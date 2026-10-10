'use strict';
(()=>{
const {nodes:N,modes:M,documents:D,sources:S}=window.LOGISTICS_MAP_DATA;
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const NS='http://www.w3.org/2000/svg';
const WORLD={w:5133,h:3009};
const project=(x,y)=>({x:(1.12*x+220)*1.18,y:(.98*y+160)*1.18});
const SCENE_ASSETS={factory:'assets/map/scenes/factory.png',home:'assets/map/scenes/residence.png',store:'assets/map/scenes/shop.png',port:'assets/map/scenes/seaport.png',rail:'assets/map/scenes/rail.png',air:'assets/map/scenes/airport.png',warehouse:'assets/icons-3d/warehouse.png',station:'assets/icons-3d/station.png',sort:'assets/icons-3d/hub.png',terminal:'assets/icons-3d/hub.png',service:'assets/icons-3d/station.png'};
function sceneAsset(id){return id==='repair'?'assets/map/scenes/repair.png':SCENE_ASSETS[N[id].icon];}

const sceneNames={normal:'常规流转',cancel:'交接前取消',intercept:'拦截退回',interceptFail:'拦截未成功',reroute:'改址交付',redelivery:'未妥投再投',refuse:'拒收退回',pickup:'转自提',unclaimed:'超期未取退回',damage:'货损待处理',delay:'运输延误',discrepancy:'到货差异',customsHold:'通关待处理'};
let doc='b2c',modeId='platform',scenario='normal',inspected=null,selectedStep=0,replay=null,drag=null,view={x:0,y:0,w:WORLD.w,h:WORLD.h},viewKind='fit';
const mode=()=>M.find(m=>m.id===modeId);
const reducedMotion=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
let cameraFrame=0,wheelFrame=0,wheelDelta=0,wheelAnchor=null,lastRenderKey='',hasRendered=false;
const transitionAnimations=new Set();
function transition(element,frames,options){const animation=element.animate(frames,options);transitionAnimations.add(animation);const release=()=>transitionAnimations.delete(animation);animation.onfinish=release;animation.oncancel=release;}
function cancelTransitions(){for(const animation of transitionAnimations)animation.cancel();transitionAnimations.clear();}
function cancelWheel(){cancelAnimationFrame(wheelFrame);wheelFrame=0;wheelDelta=0;}
function cancelCamera(){cancelAnimationFrame(cameraFrame);cameraFrame=0;}
function animateChange(){
 if(reducedMotion())return;
 transition($('routeArrows'),[{opacity:0},{opacity:1}],{duration:600,easing:'ease-out'});
 transition($('selectedRoads'),[{opacity:0},{opacity:1}],{duration:400,easing:'ease-out'});
 [...$('activeEdges').querySelectorAll('.route-edge')].forEach((path,i)=>{
  const delay=Math.min(i*85,425),length=path.getTotalLength();
  if(!path.classList.contains('air')&&!path.classList.contains('aux-edge')&&!path.hasAttribute('stroke-dasharray'))transition(path,[{strokeDasharray:`${length} ${length}`,strokeDashoffset:length},{strokeDasharray:`${length} ${length}`,strokeDashoffset:0}],{duration:600,delay,easing:'cubic-bezier(.22,.7,.2,1)',fill:'backwards'});
  else transition(path,[{opacity:0},{opacity:1}],{duration:450,delay,fill:'backwards'});
 });
 $('activeEdges').querySelectorAll('.moving-vehicle').forEach(g=>transition(g,[{opacity:0},{opacity:1}],{duration:450,delay:180,fill:'backwards'}));
 $('nodes').querySelectorAll('.node.active .node-halo').forEach((halo,i)=>transition(halo,[{opacity:0,strokeWidth:7},{opacity:.7,strokeWidth:4},{opacity:.55,strokeWidth:3}],{duration:650,delay:Math.min(i*65,325),easing:'ease-out'}));
 for(const element of [$('selectionGuide'),document.querySelector('.chain-overlay'),document.querySelector('.explanation'),$('journeySteps')]){element.getAnimations().forEach(a=>a.cancel());transition(element,[{opacity:.3,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:280,easing:'ease-out'});}
}

function available(m){let a=['normal','cancel'];if(!m.vehicle)a.push('damage','delay');if(m.parcel)a.push('intercept','interceptFail','reroute','redelivery','refuse','pickup','unclaimed');if(['warehouse','factory','service','store'].includes(N[m.path.at(-1)].icon)&&!m.vehicle)a.push('discrepancy');if(m.crossborder)a.push('customsHold');return a;}
function currentRoute(m=mode(),s=scenario){
 if(doc==='overview'&&arguments.length===0)return {path:[],pivot:Infinity,note:'',hold:false,aux:[]};
 let path=[...m.path],pivot=m.reverse?0:Infinity,note='',hold=false;
 if(s==='cancel'){path=path.slice(0,1);note='仅展示承运交接前取消：核对货物仍在原发运地点，撤销相关任务。取消单据本身不会产生一条实物运输线。';hold=true;}
 if(s==='damage'||s==='delay'){
  const stop=Math.max(0,m.path.findIndex((id,i)=>i>0&&['sort','terminal','station','port','rail','air'].includes(N[id].icon)));
  path=m.path.slice(0,stop+1);note=`这里示例货物停留在“${N[path.at(-1)].label}”：${s==='damage'?'记录货损、保留交接信息，等待责任核查与处置指令。':'核查运输或班次衔接原因，等待后续安排。'}异常名称不能单独确定实际停留地点；后续退回、补发或继续发运另行确认。`;hold=true;
 }
 if(s==='intercept'){
  const stop=Math.max(1,m.path.indexOf('sortB')>=0?m.path.indexOf('sortB'):m.path.length-2);
  const outward=m.path.slice(0,stop+1);path=outward.concat(outward.slice(0,-1).reverse());pivot=stop;
  note='示例假定在当前处理点拦截执行成功，再回到本次原发运地点。实际执行点、返运路线与接收地址由承运安排确认，回程不必原路返回。';
 }
 if(s==='interceptFail')note='拦截请求未执行成功，本例货物继续完成原交付。提交申请、受理申请和实际拦截成功是不同状态；已交付后的售后退货需另建业务。';
 if(s==='reroute'){path[path.length-1]='newAddress';note='示例假定承运方已确认改址可执行，并组织后续交付。若跨配送区域，可能新增中转；图中采用同一末端节点可承接的简化路径。';}
 if(s==='redelivery'){
  const end=path.at(-1),last=path.at(-2);path.push(last,end);
  note='先到原地址尝试交付，未妥投后回到末端节点，再次派送并成功交付。末端处理可能采用其他安排；再投次数、时限及是否收费按具体服务。';
 }
 if(s==='refuse'){pivot=path.length-1;path=path.concat(path.slice(0,-1).reverse());note='交付时拒收，本例按指令返运至原发运地点。商品售后退款与物流返运不是同一状态；回程地址、路径和费用另行确认。';}
 if(s==='pickup'){path[path.length-1]='pickup';note='示例假定货物符合自提条件、服务点可接收，后续在自提点核验交付。收件人的取件出行不画成承运运输线。';}
 if(s==='unclaimed'){
  path[path.length-1]='pickup';pivot=path.length-1;path=path.concat(path.slice(0,-1).reverse());
  note='货物送到自提点后超过约定期限仍未取件，本例按指令退回原发运地点。期限、通知及是否先转站点待处理，依服务规则确认。';
 }
 if(s==='discrepancy'){note='货物已到接收节点，发现数量、包装或单货差异，登记后等待复核与业务决定。此时不能自动视为已合格入库，也不自动产生退货运输。';hold=true;}
 if(s==='customsHold'){
  const importing=['bondedstock','directimport'].includes(m.id);const end=path.indexOf(importing?'portA':'portB');path=path.slice(0,end+1);
  note='本例示意货物到达目的侧口岸后，因申报、查验或其他监管事项等待处理。待放行不等于必定退运；具体监管环节与时间按实际办理确认。';hold=true;
 }
 return {path,pivot,note,hold,aux:s==='normal'?(m.aux||[]):[]};
}
function el(tag,attrs={}){const e=document.createElementNS(NS,tag);for(const[k,v]of Object.entries(attrs))e.setAttribute(k,v);return e;}
function label(id){return (doc==='overview'?null:mode().labels?.[id])||N[id].label;}
const PLACES={
 supplier:[160,160],supplier2:[160,460],factory:[440,160],material:[440,460],bulk:[720,160],merchant:[720,460],cold:[1000,160],regional:[1280,160],fulfill:[1280,460],fulfill2:[1000,460],front:[1560,460],store:[1560,160],business:[1840,160],
 person:[160,760],origin:[440,760],sortA:[720,760],freightA:[440,1060],crossdock:[1000,760],sortB:[1280,760],station:[1560,760],consumer:[1840,760],pickup:[1560,1060],newAddress:[1840,1060],freightB:[1000,1060],railA:[720,1060],railB:[1280,1060],airA:[1560,1360],portA:[1840,1360],bonded:[1840,460],
 reuse:[160,1360],parts:[440,1360],repair:[720,1360],returns:[1000,1360],recycle:[1280,1360],
 foreignBusiness:[2900,460],portB:[2620,1360],foreignFactory:[2900,1060],overseas:[2900,760],foreignConsumer:[3180,460]
};
// Facilities retain their geographic role while following the main business chains.
const OFFSETS={supplier:[-15,10],supplier2:[25,-15],factory:[30,-10],material:[-10,18],bulk:[15,20],merchant:[-25,-12],cold:[-20,-15],regional:[25,12],fulfill:[-30,-20],fulfill2:[10,20],front:[25,15],store:[-20,-12],business:[15,20],person:[-15,15],origin:[25,-20],sortA:[-20,10],crossdock:[10,-20],sortB:[-25,-10],station:[20,15],consumer:[-10,-20],pickup:[-25,20],newAddress:[25,-10],freightA:[-20,-12],freightB:[20,15],reuse:[20,-15],parts:[-25,10],repair:[20,-15],returns:[-20,20],recycle:[25,-10],overseas:[-30,20],foreignFactory:[20,-10],foreignConsumer:[-20,10],foreignBusiness:[25,-15]};
for(const[id,offset]of Object.entries(OFFSETS)){PLACES[id][0]+=offset[0];PLACES[id][1]+=offset[1];}
Object.assign(PLACES,{sortA:[720,690],crossdock:[940,730],sortB:[1230,820],station:[1560,850],consumer:[1860,830],returns:[1090,1320],recycle:[1350,1410],foreignConsumer:[3210,490],overseas:[2870,800]});
// Scale represents relative footprint and network role, rather than a measured building size.
const FACILITY_SCALE={factory:1.3,bulk:1.22,cold:1.1,regional:1.22,fulfill:1.18,fulfill2:1.1,sortA:1.3,sortB:1.3,crossdock:1.16,freightA:1.15,freightB:1.15,railA:1.25,railB:1.25,airA:1.35,portA:1.35,portB:1.35,foreignFactory:1.3,bonded:1.15,overseas:1.15,returns:1.12,recycle:1.16,person:.78,consumer:.8,newAddress:.8,foreignConsumer:.8,pickup:.75,station:.88,origin:.92,store:.92,front:.9,parts:.88};
const facilitySize=id=>FACILITY_SCALE[id]||1;
const plateY=id=>69*facilitySize(id);
const ROAD_CACHE=new Map(),ROAD_POINTS=[],ROAD_GRAPH=[],NODE_PORTS={},USED_ROADS=new Map();
function island(id){return N[id].gridX>2400?'foreign':'mainland';}
function buildRoads(){
 const boxes=Object.entries(N).flatMap(([id,n])=>{
  const names=[n.label,...M.map(m=>m.labels?.[id]).filter(Boolean)],half=Math.max(63,...names.map(name=>(name.length*23+28)/2));
  return [{id,side:island(id),left:n.x-108*facilitySize(id)-10,right:n.x+108*facilitySize(id)+10,top:n.y-108*facilitySize(id)-10,bottom:n.y+64*facilitySize(id)+10},{id,side:island(id),left:n.x-half-10,right:n.x+half+10,top:n.y+plateY(id)-10,bottom:n.y+plateY(id)+86}];
 });
 const visible=(a,b)=>{if(a.side!==b.side)return false;return !boxes.some(r=>{if(r.side!==a.side)return false;let lo=0,hi=1;for(const [v,d,min,max]of [[a.x,b.x-a.x,r.left,r.right],[a.y,b.y-a.y,r.top,r.bottom]]){if(Math.abs(d)<.00001){if(v<=min||v>=max)return false;}else{const p=(min-v)/d,q=(max-v)/d;lo=Math.max(lo,Math.min(p,q));hi=Math.min(hi,Math.max(p,q));}}return lo<hi&&hi>0&&lo<1;});};
 for(const [id,n]of Object.entries(N)){
  const size=facilitySize(id),side=island(id),half=Math.max(108*size,...M.map(m=>m.labels?.[id]).filter(Boolean).map(name=>(name.length*23+28)/2)),outside=half+24;
  const coords=[[-outside,16*size,-100*size,16*size],[outside,16*size,100*size,16*size],[0,-108*size-30,0,-105*size],[0,plateY(id)+104,0,plateY(id)+80],[-outside,-108*size-28,-90*size,-85*size],[outside,-108*size-28,90*size,-85*size],[outside,plateY(id)+41,104*size,48*size],[-outside,plateY(id)+41,-104*size,48*size]];
  NODE_PORTS[id]=[];coords.forEach(([x,y,gx,gy])=>{const k=ROAD_POINTS.length;ROAD_POINTS.push({x:n.x+x,y:n.y+y,side,gate:{x:n.x+gx,y:n.y+gy}});ROAD_GRAPH.push([]);NODE_PORTS[id].push(k);});
 }
 // Visibility edges pass around buildings and labels. The shortest path chooses entry and exit sides.
 for(let i=0;i<ROAD_POINTS.length;i++)for(let j=i+1;j<ROAD_POINTS.length;j++)if(visible(ROAD_POINTS[i],ROAD_POINTS[j])){const d=Math.hypot(ROAD_POINTS[i].x-ROAD_POINTS[j].x,ROAD_POINTS[i].y-ROAD_POINTS[j].y);ROAD_GRAPH[i].push([j,d]);ROAD_GRAPH[j].push([i,d]);}
}
function landRoute(a,b){
 const key=[a,b].sort().join('|');if(ROAD_CACHE.has(key)){const cached=ROAD_CACHE.get(key);return cached.a===a?cached.points:[...cached.points].reverse();}
 const count=ROAD_POINTS.length,dist=Array(count).fill(Infinity),prev=Array(count).fill(-1),done=new Set(),targets=new Set(NODE_PORTS[b]);
 const gateLength=k=>{const p=ROAD_POINTS[k];return Math.hypot(p.x-p.gate.x,p.y-p.gate.y);};
 for(const k of NODE_PORTS[a])dist[k]=gateLength(k);let end=-1,best=Infinity;
 for(let step=0;step<count;step++){
  let u=-1;for(let k=0;k<count;k++)if(!done.has(k)&&(u<0||dist[k]<dist[u]))u=k;
  if(u<0||!Number.isFinite(dist[u])||dist[u]>=best)break;
  if(targets.has(u)&&dist[u]+gateLength(u)<best){best=dist[u]+gateLength(u);end=u;}
  done.add(u);for(const[v,w]of ROAD_GRAPH[u])if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;prev[v]=u;}
 }
 if(end<0)throw Error(`无法连通道路：${a} → ${b}`);
 const indices=[];for(let u=end;u>=0;u=prev[u])indices.unshift(u);
 for(let i=1;i<indices.length;i++){const u=indices[i-1],v=indices[i],edge=[u,v].sort((x,y)=>x-y).join('|');USED_ROADS.set(edge,[ROAD_POINTS[u],ROAD_POINTS[v]]);}
 const points=[ROAD_POINTS[indices[0]].gate,...indices.map(k=>ROAD_POINTS[k]),ROAD_POINTS[indices.at(-1)].gate];ROAD_CACHE.set(key,{a,points});return points;
}
function smoothPath(points){
 let d=`M${points[0].x},${points[0].y}`;
 for(let i=1;i<points.length-1;i++){const a=points[i-1],b=points[i],c=points[i+1],l1=Math.hypot(b.x-a.x,b.y-a.y),l2=Math.hypot(c.x-b.x,c.y-b.y),r=Math.min(13,l1*.2,l2*.2);if(l1<.001||l2<.001)continue;const u={x:b.x+(a.x-b.x)*r/l1,y:b.y+(a.y-b.y)*r/l1},v={x:b.x+(c.x-b.x)*r/l2,y:b.y+(c.y-b.y)*r/l2};d+=` L${u.x},${u.y} Q${b.x},${b.y} ${v.x},${v.y}`;}
 return d+` L${points.at(-1).x},${points.at(-1).y}`;
}
const pathPoints=points=>points.map(([x,y],i)=>{const p=project(x,y);return `${i?'L':'M'}${p.x},${p.y}`;}).join(' ');
function transport(a,b){if([a,b].includes('airA')&&[a,b].includes('portB'))return 'air';if([a,b].includes('portA')&&[a,b].includes('portB'))return 'sea';if([a,b].includes('railA')&&[a,b].includes('railB'))return 'rail';return 'road';}
function routePoints(a,b){
 const A=N[a],B=N[b],ax=A.gridX,ay=A.gridY,bx=B.gridX,by=B.gridY;
 if(transport(a,b)==='sea'){const points=[[1905,1385],[1980,1385],[2180,1550],[2340,1550],[2480,1385],[2555,1385]];return a==='portA'?points:points.reverse();}
 if(transport(a,b)==='rail'){const A=N.railA,B=N.railB,points=[[A.gridX+65,A.gridY+30],[A.gridX+140,A.gridY+65],[B.gridX-140,B.gridY+65],[B.gridX-65,B.gridY+30]];return a==='railA'?points:points.reverse();}
 throw Error('此运输段不使用港口或轨道折线');
}
const CURVE_CACHE=new Map(),BRIDGE_CACHE=new Map();
function curve(a,b,offset=0){
 const key=`${a}|${b}|${offset}`;if(CURVE_CACHE.has(key))return CURVE_CACHE.get(key);
 let d;
 if(transport(a,b)==='air'){const A=N.airA,B=N.portB;d=a==='airA'?`M${A.x+55},${A.y-30} C${A.x+250},${A.y-540} ${B.x-250},${B.y-540} ${B.x-55},${B.y-30}`:`M${B.x-55},${B.y-30} C${B.x-250},${B.y-540} ${A.x+250},${A.y-540} ${A.x+55},${A.y-30}`;}
 else d=transport(a,b)==='road'?smoothPath(landRoute(a,b)):pathPoints(routePoints(a,b));
 if(!offset){CURVE_CACHE.set(key,d);return d;}
 const probe=el('path',{d}),length=probe.getTotalLength(),samples=[];
 for(let t=0;t<length;t+=12){const p=probe.getPointAtLength(t),before=probe.getPointAtLength(Math.max(0,t-4)),after=probe.getPointAtLength(Math.min(length,t+4)),dx=after.x-before.x,dy=after.y-before.y,l=Math.hypot(dx,dy)||1;samples.push({x:p.x-dy/l*offset,y:p.y+dx/l*offset});}
 const p=probe.getPointAtLength(length),before=probe.getPointAtLength(Math.max(0,length-4)),dx=p.x-before.x,dy=p.y-before.y,l=Math.hypot(dx,dy)||1;samples.push({x:p.x-dy/l*offset,y:p.y+dx/l*offset});d=smoothPath(samples);CURVE_CACHE.set(key,d);return d;
}
function terrain(){
 const g=$('terrain');const waterDefs=el('defs');waterDefs.innerHTML='<linearGradient id="oceanDepth" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#d5edf2"/><stop offset=".5" stop-color="#bedeea"/><stop offset="1" stop-color="#d8edf0"/></linearGradient>';g.append(waterDefs);const poly=(pts,attrs)=>g.append(el('polygon',{points:pts.map(([x,y])=>{const p=project(x,y);return `${p.x},${p.y}`;}).join(' '),...attrs}));
 poly([[1980,0],[2480,0],[2480,1750],[1980,1750]],{fill:'url(#oceanDepth)',class:'ocean-water'});
 for(let y=70;y<1700;y+=110){const d=pathPoints([[2040,y],[2100,y+8],[2160,y],[2220,y+8],[2280,y],[2340,y+8],[2400,y]]);g.append(el('path',{d,class:'ocean-wave'}));}
 const regions=[{x:0,w:860,name:'产地与始发区域',sub:'供应 · 生产 · 集货',fill:'#edf3e9'},{x:860,w:1120,name:'消费与目的区域',sub:'库存分配 · 城市配送 · 售后',fill:'#eaf2f5'},{x:2480,w:900,name:'境外区域',sub:'口岸 · 海外库存 · 当地交付',fill:'#edf1ea'}];
 for(const r of regions){poly([[r.x,0],[r.x+r.w,0],[r.x+r.w,1720],[r.x,1720]],{fill:r.fill,stroke:'#fff','stroke-width':5,class:'district-top'});const pt=project(r.x+40,-42);const t=el('text',{x:pt.x,y:pt.y,class:'district-name',transform:`rotate(0 ${pt.x} ${pt.y})`});t.textContent=r.name;g.append(t);}
 window.renderLogisticsLandscape({g,project,nodes:N,roads:ROAD_CACHE,el});
 const coast=project(2240,430),seaLabel=el('text',{x:coast.x,y:coast.y,class:'sea-label'});seaLabel.textContent='海域';g.append(seaLabel);
}

function drawArrow(path,color){
 const length=path.getTotalLength(),tip=path.getPointAtLength(length),before=path.getPointAtLength(Math.max(0,length-12)),angle=Math.atan2(tip.y-before.y,tip.x-before.x)*180/Math.PI;
 $('routeArrows').append(el('path',{d:'M3 0L-22 -10L-17 0L-22 10Z',fill:color,stroke:'#ffffff','stroke-width':1.4,'stroke-linejoin':'round',transform:`translate(${tip.x} ${tip.y}) rotate(${angle})`,class:'route-direction'}));
}
function vehicle(path,kind,index){
 const g=el('g',{class:`moving-vehicle vehicle-${kind}`});
 if(kind==='road')g.innerHTML='<image href="assets/icons-3d/truck.png" x="-24" y="-35" width="48" height="48"/>';
 if(kind==='sea')g.innerHTML='<path d="M-38 -11H38L27 13H-25Z" fill="#174966" stroke="white" stroke-width="3"/><path d="M-30 19Q-18 26 -5 19T25 19" fill="none" stroke="white" stroke-width="4"/><rect x="-23" y="-28" width="18" height="15" rx="2" fill="#11aeb1"/><rect x="-3" y="-28" width="18" height="15" rx="2" fill="#e8ae58"/><rect x="17" y="-37" width="13" height="24" rx="2" fill="#fff"/>';
 if(kind==='air')g.innerHTML='<path d="M42 0L7 -7 -12 -37 -22 -37 -12 -6 -34 -5 -43 -18 -50 -18 -44 0 -50 18 -43 18 -34 5 -12 6 -22 37 -12 37 7 7Z" fill="#fff" stroke="#235776" stroke-width="3"/><path d="M7 0H30" stroke="#10a4ad" stroke-width="5"/>';
 if(kind==='rail')g.innerHTML='<rect x="-36" y="-19" width="72" height="32" rx="5" fill="#174966" stroke="white" stroke-width="3"/><rect x="-28" y="-14" width="39" height="20" rx="2" fill="#11aeb1"/><rect x="16" y="-13" width="13" height="12" fill="#d4ecf1"/><circle cx="-21" cy="15" r="6" fill="#334b5c"/><circle cx="23" cy="15" r="6" fill="#334b5c"/>';
 const length=path.getTotalLength(),pt=path.getPointAtLength(length*.5);g.setAttribute('transform',`translate(${pt.x},${pt.y})`);
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches){g.removeAttribute('transform');const motion=el('animateMotion',{dur:`${Math.max(9,Math.min(25,length/65))}s`,repeatCount:'indefinite',rotate:kind==='air'?'auto':'0'});motion.append(el('mpath',{href:'#'+path.id}));g.append(motion);}
 $('routeVehicles').append(g);
}
function initMap(){
 for(const [id,n]of Object.entries(N)){[n.gridX,n.gridY]=PLACES[id];Object.assign(n,project(n.gridX,n.gridY));n.visualScale=facilitySize(id);}
 buildRoads();
 const pairs=new Set();
 for(const m of M)for(const scenario of available(m)){const r=currentRoute(m,scenario);for(let i=1;i<r.path.length;i++)if(transport(r.path[i-1],r.path[i])==='road')pairs.add([r.path[i-1],r.path[i]].sort().join('|'));for(const[a,b]of r.aux)pairs.add([a,b].sort().join('|'));}
 for(const pair of pairs){const[a,b]=pair.split('|');landRoute(a,b);}
 terrain();
 for(const[id,n]of Object.entries(N).sort((a,b)=>a[1].y-b[1].y)){
  const g=el('g',{class:'node','data-node':id,transform:`translate(${n.x} ${n.y})`,role:'button',tabindex:'0','aria-label':`${n.label}：${n.sub}`});
  const decoration=['sort','terminal'].includes(n.icon)?'sort':id==='recycle'?'recycle':id==='returns'?'inspect':id==='parts'?'parcel':null;
  const width=Math.max(126,n.label.length*23+28),size=facilitySize(id),py=plateY(id);n.visualScale=size;
  g.innerHTML=`<g class="facility-art" transform="scale(${size})"><ellipse class="node-shadow" cx="0" cy="34" rx="94" ry="28"/><polygon class="plot-side" points="-98,16 -30,-23 98,15 98,26 30,66 -98,27"/><polygon class="node-ground" points="-98,16 -30,-23 98,15 30,55"/><polygon class="node-halo" points="-108,16 -30,-32 108,15 30,64"/><g class="site-markings" aria-hidden="true"><path d="M-83 20l13 6m-5 -10l13 6m-5 -10l13 6" stroke="#ccd9de" stroke-width="1.4"/><path d="M65 32l-20 9" stroke="#d9c9a0" stroke-width="1.2"/></g><g class="scene-objects"><image class="facility-image" href="${sceneAsset(id)}" x="-76" y="-104" width="152" height="152" preserveAspectRatio="xMidYMid meet"/>${decoration?`<image class="yard-object" href="assets/icons-3d/${decoration}.png" x="-91" y="14" width="43" height="43"/>`:''}${['warehouse','station'].includes(n.icon)?'<image class="yard-object" href="assets/icons-3d/truck.png" x="43" y="0" width="52" height="52"/>':''}</g></g><g class="nameplate"><rect x="${-width/2}" y="${py}" width="${width}" height="36" rx="10"/><text class="node-label" y="${py+26}">${esc(n.label)}</text></g><text class="node-sub" y="${py+63}">${esc(n.sub)}</text><g class="badge" transform="translate(${67*size},${-56*size})"></g>`;
  g.addEventListener('click',()=>inspect(id));g.addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();inspect(id);}});$('nodes').append(g);
 }
}
const DOCUMENT_INTROS={
 purchase:'采购确定买什么、向谁买；入厂收货核对到货物料。采购指令与验收入库记录是不同环节。',
 transfer:'补货或调拨安排库存从一个地点移到另一个地点，服务于库存分配，不等于已向最终客户交付。',
 b2b:'围绕企业订单或门店补货发运，收货方通常还需核对数量、批次及交接条件，再确认接收或入库。',
 b2c:'围绕消费者订单，从可履约库存或门店发货到个人收件地点。此前采购和仓网备货属于其他移动。',
 parcel:'个人委托寄递，可寄给个人或企业。收寄、运输与签收由运单记录，企业后续服务另行确认。',
 international:'跨境货流需衔接两侧运输、口岸作业与监管手续。贸易单据、运输单据和申报资料分工不同。',
 return:'退货指令约定物品回到哪个接收地点；物流返运完成后，还需分别确认验收、退款或其他处置。',
 repair:'送修单组织待修品交接，配件单组织备件供应。待修品与配件是两条货流，维修完成后的寄回另行安排。',
 recycle:'回收单组织物品交接与后续处置；载具单组织托盘、周转箱等循环使用。回收接收不等于已完成资源化处理。'
};
function renderSelectionGuide(m,r){
 const d=D.find(d=>d.id===doc);
 const normal=m.vehicle?'展示本次车辆的取送行程；车辆经过的地点不等于每件货物都经过这些地点。':m.reverse?'按已受理的退货、服务或回收指令返运，终点接收后还需完成相应业务处理。':'按所选模式展示从发运到接收的常规实物移动，图中省略了不影响理解的内部作业。';
 $('selectionGuide').innerHTML=`<article><h3>${esc(d.title)}</h3><p>${esc(DOCUMENT_INTROS[doc])}</p></article><article><h3>${esc(m.title)}</h3><p>${esc(m.summary)}</p></article><article><h3>${esc(sceneNames[scenario])}</h3><p>${esc(r.note||normal)}</p></article>`;
}
function renderControls(){
 $('documents').innerHTML=[{id:'overview',title:'总览',sub:'全部设施与代表性连接'},...D].map(d=>`<button class="document-button" data-doc="${d.id}" aria-pressed="${d.id===doc}" title="${esc(d.sub)}">${esc(d.title)}</button>`).join('');
 $('documents').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{doc=b.dataset.doc;if(doc==='overview'){enterOverview();return;}modeId=M.find(m=>m.doc===doc).id;scenario='normal';reset();}));
 const isOverview=doc==='overview';$('modeControls').hidden=isOverview;$('scenarioControls').hidden=isOverview;if(isOverview)return;
 const choices=M.filter(m=>m.doc===doc);$('modeSelect').innerHTML=choices.map(m=>`<option value="${m.id}">${esc(m.title)}</option>`).join('');$('modeSelect').value=modeId;$('modeCount').textContent=`${choices.length} 种`;
 $('modeHint').textContent=D.find(d=>d.id===doc).sub;
 $('scenarios').innerHTML=available(mode()).map(s=>`<button class="scenario-button" data-scenario="${s}" aria-pressed="${s===scenario}">${sceneNames[s]}</button>`).join('');
 $('scenarios').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{scenario=b.dataset.scenario;reset();}));
}
function reset(){stopReplay();selectedStep=0;inspected=null;render();fitRoute();}
function render(){
 const renderKey=`${doc}|${modeId}|${scenario}`,changed=renderKey!==lastRenderKey;
 if(hasRendered&&!changed){renderFocus();renderDetail();return;}
 cancelTransitions();lastRenderKey=renderKey;
 $('mapCanvas').classList.toggle('is-overview',doc==='overview');renderControls();if(doc==='overview'){renderOverview();lastRenderKey=renderKey;hasRendered=true;return;}
 const m=mode(),r=currentRoute();renderSelectionGuide(m,r);
 $('coverage').textContent=`${D.length} 类单据范围 · ${M.length} 个路径示例`;
 $('baseEdges').replaceChildren();$('activeEdges').replaceChildren();$('selectedRoads').replaceChildren();$('routeArrows').replaceChildren();for(const id of ['routeUnderlays','routeLines','routeVehicles'])$('activeEdges').append(el('g',{id}));const repeats=new Map();
 const roadPairs=new Set(),directions=new Map();for(let i=1;i<r.path.length;i++){const a=r.path[i-1],b=r.path[i],key=[a,b].sort().join('|');if(!directions.has(key))directions.set(key,new Set());directions.get(key).add(a+'>'+b);}
 for(const[a,b]of [...r.path.slice(1).map((id,i)=>[r.path[i],id]),...r.aux]){
  const key=[a,b].sort().join('|');if(roadPairs.has(key))continue;roadPairs.add(key);
  const kind=transport(a,b),d=curve(a,b),g=$('selectedRoads');
  if(kind==='road'){const twoWay=directions.get(key)?.size>1;g.append(el('path',{d,class:'world-road-edge','stroke-width':twoWay?29:23}));g.append(el('path',{d,class:'world-road','stroke-width':twoWay?25:19}));}
  if(kind==='road'){
   if(!BRIDGE_CACHE.has(key)){
    const probe=el('path',{d}),length=probe.getTotalLength(),bridges=[];let previous=null;
    const riverSide=p=>{const gx=(p.x/1.18-220)/1.12,gy=(p.y/1.18-160)/.98;return gx>=0&&gx<=2010?gy-(1230+28*Math.sin(gx/220)):null;};
    for(let t=0;t<=length;t+=14){const point=probe.getPointAtLength(t),side=riverSide(point);if(previous&&side!==null&&previous.side!==null&&side*previous.side<0){const p=probe.getPointAtLength(t-7),before=probe.getPointAtLength(Math.max(0,t-26)),after=probe.getPointAtLength(Math.min(length,t+12)),angle=Math.atan2(after.y-before.y,after.x-before.x)*180/Math.PI;bridges.push(`translate(${p.x},${p.y}) rotate(${angle})`);}previous={side};}BRIDGE_CACHE.set(key,bridges);
   }
   for(const transform of BRIDGE_CACHE.get(key)){const bridge=el('g',{transform,class:'route-bridge'});bridge.innerHTML='<path d="M-24 -13H24 M-24 13H24" stroke="#7797a8" stroke-width="3"/><path d="M-22 -16V-10 M0 -16V-10 M22 -16V-10 M-22 10V16 M0 10V16 M22 10V16" stroke="#94afbc" stroke-width="2"/>';g.append(bridge);}
  }

  if(kind==='rail'){g.append(el('path',{d,class:'rail-bed'}));g.append(el('path',{d,class:'rail-ties'}));g.append(el('path',{d,class:'rail-center'}));}
 }

 for(let i=1;i<r.path.length;i++){
  const a=r.path[i-1],b=r.path[i],key=[a,b].sort().join('|'),repeat=repeats.get(key)||0;repeats.set(key,repeat+1);
  const back=i>r.pivot;const path=el('path',{d:curve(a,b,directions.get(key)?.size>1?6:0),id:`travel-${i}`,class:'route-edge '+transport(a,b)+(back?' return-edge':''),'data-direction':back?'back':'main'});if(!repeat)$('routeUnderlays').append(el('path',{d:path.getAttribute('d'),class:'route-underlay'}));if(repeat&&! (directions.get(key)?.size>1)){path.setAttribute('stroke-dasharray','12 8');path.style.strokeWidth='3';}$('routeLines').append(path);drawArrow(path,back?'#d98b39':'#069b9f');
  vehicle(path,transport(a,b),i);
 }
 for(const[a,b]of r.aux){const path=el('path',{d:curve(a,b),class:'route-edge aux-edge'});$('routeLines').append(path);drawArrow(path,'#4877bb');}
 const active=new Set(r.path),auxIds=new Set(r.aux.flat());
 $('nodes').querySelectorAll('.node').forEach(g=>{
  const id=g.dataset.node;g.classList.toggle('active',active.has(id)||auxIds.has(id));g.classList.toggle('inspected',inspected===id||(!inspected&&r.path[selectedStep]===id));
  g.querySelector('.facility-image').setAttribute('href',id==='portB'&&m.id==='air'?'assets/map/scenes/airport.png':sceneAsset(id));g.querySelector('.node-label').textContent=label(id);const plateWidth=Math.max(126,label(id).length*23+28);g.querySelector('.nameplate rect').setAttribute('width',plateWidth);g.querySelector('.nameplate rect').setAttribute('x',-plateWidth/2);const indices=r.path.flatMap((v,i)=>v===id?[i+1]:[]),badge=g.querySelector('.badge');
  const text=indices.join('·')||(auxIds.has(id)?'配件':'');badge.classList.toggle('aux',!indices.length&&auxIds.has(id));const w=Math.max(26,text.length*8+12);
  badge.innerHTML=text?`<rect x="${-w/2}" y="-11" width="${w}" height="23" rx="11"/><text y="5">${text}</text>`:'';
  g.setAttribute('aria-label',`${label(id)}：${N[id].sub}${indices.length?'；经过顺序 '+indices.join('、'):''}`);
 });
 $('guideText').textContent=m.guide;$('scenarioText').textContent=r.note;
 $('sourceLinks').innerHTML=[...new Set([...m.sources,...(scenario==='normal'?[]:scenario==='customsHold'?['customs']:['intercept','interceptFail','reroute'].includes(scenario)?['ups']:scenario==='unclaimed'?['hold']:scenario==='refuse'?['refusal']:['redelivery','pickup'].includes(scenario)?['fedex']:['gs1'])])].map(k=>`<a href="${S[k].url}" target="_blank" rel="noopener noreferrer">${esc(S[k].name)} ↗</a>`).join('');
 document.querySelector('.journey').hidden=false;renderJourney();renderDetail();renderMini();if(changed&&hasRendered)animateChange();hasRendered=true;
}
function enterOverview(){stopReplay();doc='overview';inspected=null;selectedStep=0;render();overview(true);}
function renderOverview(){
 $('coverage').textContent=`${Object.keys(N).length} 个设施 · ${M.length} 个路径示例`;
 $('selectionGuide').innerHTML='<article><h3>总览</h3><p>查看生产、仓储、分拨、交付、口岸与服务设施的分布。淡色连线汇总代表性模式中的连接，不表示一件货物需要经过全部节点。点击设施查看作业说明；选择具体单据后比较对应链路。</p></article>';
 $('baseEdges').replaceChildren();$('activeEdges').replaceChildren();$('selectedRoads').replaceChildren();$('routeArrows').replaceChildren();const pairs=new Set();
 for(const m of M)for(const[a,b]of [...m.path.slice(1).map((id,i)=>[m.path[i],id]),...(m.aux||[])]){const key=[a,b].sort().join('|');if(pairs.has(key))continue;pairs.add(key);$('baseEdges').append(el('path',{d:curve(a,b),class:'overview-connection '+transport(a,b)}));}
 $('nodes').querySelectorAll('.node').forEach(g=>{const id=g.dataset.node;g.classList.remove('active');g.classList.toggle('inspected',id===inspected);g.querySelector('.node-label').textContent=N[id].label;g.querySelector('.facility-image').setAttribute('href',sceneAsset(id));const w=Math.max(126,N[id].label.length*23+28),plate=g.querySelector('.nameplate rect');plate.setAttribute('width',w);plate.setAttribute('x',-w/2);g.querySelector('.badge').replaceChildren();g.setAttribute('aria-label',`${N[id].label}：${N[id].sub}`);});
 $('guideText').textContent='这张总览按设施功能展示行业中的代表性连接。仓库管理库存与出入库，分拣和货运设施衔接运输段，口岸连接境内外网络，服务设施承接维修、退货或回收。淡线仅供认识网络结构，具体货流请按单据范围和模式选择。';$('scenarioText').textContent='';$('sourceLinks').innerHTML=['gs1','dhl','upu'].map(k=>`<a href="${S[k].url}" target="_blank" rel="noopener noreferrer">${esc(S[k].name)} ↗</a>`).join('');document.querySelector('.journey').hidden=true;$('journeySteps').replaceChildren();renderDetail();renderMini();
}
const FACILITY_GUIDANCE={
 factory:'把生产作业与物流交接分开理解：物料到厂、厂内供料、成品发运可能分别对应不同任务。先确认本次货物是生产物料还是成品，再看它从哪个收发接口进入或离开工厂。',
 warehouse:'看仓库时先判断这次作业是收货入库、库存调拨，还是按订单出库。库存所在地点、作业指令与实物交接需要对应；货物到仓、验收通过和系统库存更新是不同状态。',
 station:'站点连接所在区域与上级运输网络。理解它的作用时，先看本次是揽收集货还是到达派送，再核对下一交接对象；“已到站”与“已交给收件人”是不同状态。',
 sort:'这里的核心是按路由处理货物，再交给下一运输段。看链路时要分清货物去向、集包或拆包关系与装载交接，不能把经过分拣中心理解为商品已经入库备货。',
 terminal:'货运场站把不同运输段衔接起来。先区分本次是集货配载、到达拆零还是越库转运，再看货物如何交给下一承运环节；卸货或到站本身不表示最终交付完成。',
 home:'这是人与承运方完成实物交接的地点。先确认本次是交件还是收件，再核对物品、收发信息与约定；物流交接记录与商品订单、售后申请等业务状态要分别理解。',
 store:'门店既可能是补货的收货方，也可能是消费者订单的发货方。先辨认本次货物流向，再看收货验收、门店库存或订单打包中哪项作业属于当前环节。',
 service:'服务设施接收货物后还需按业务指令处理。先确认物品、委托与接收状态，再看检验、维修或分类结果如何决定下一步；物流送达与业务处理完成要分别确认。',
 port:'先辨认所选模式对应港口、机场还是陆路口岸，再区分运输交接与监管手续。货物到达口岸、完成相应手续和交给后续承运方，是不同的进度信息。',
 rail:'铁路场站承担铁路运输与接驳运输之间的交接。查看该节点时，先辨认起运或到达方向，再核对货物、装载单元与下一承运环节，避免把到站等同于已送至收货地址。',
 air:'航空货站把地面接驳与航空运输衔接起来。先看本次是起运还是到达处理，再核对货物接收、所需检查和航空交接的进度；进货站不等于已起飞。'
};
const SPECIFIC_GUIDANCE={
 cold:'温控要求应结合商品、温区与交接条件理解。除仓内存储外，还要看装卸、运输和末端交付能否衔接相应条件；一座冷库不能代表整条链路的温控状态。',
 parts:'先核对维修所需配件的型号、数量和去向，再安排库存分配与发运。配件供应服务于维修任务，但它与客户的待修品是独立货流，蓝线不表示待修品也经过配件库。',
 repair:'先核对送修物品与委托，再根据检测结果确认处理方案。维修、复测与返还分别记录；修复品离开服务中心后，到客户实际收到仍需后续运输与交付。',
 returns:'接收退货时，需要把原业务、退回物品与授权对应起来。检验和分类决定后续去向：能够重新销售、需要维修或需要回收的物品可能采用不同处理；接收到货不等于退款已完成。',
 recycle:'先确认回收物的品类、状态与约定去向，再衔接评估、再利用或相应处理。集散与实际处理可以由不同设施承担，图中的一个节点是功能概括，并不代表所有品类采用同样作业。',
 reuse:'这里管理的是托盘、周转箱等可重复使用载具。先核对回收数量与状态，再安排清洁、整修或重新投入使用；载具流转与其中商品的销售、退货要分别看。',
 pickup:'到点暂存、通知收件人和核验取件是不同环节。查看本节点时，还要结合货物是否适合该服务、约定取件条件与期限；图中不把收件人的取件出行算作承运运输。'
};
// Inspecting a facility keeps route geometry, cards and vehicle animations intact.
function renderFocus(){
 const r=currentRoute(),current=inspected||r.path[selectedStep];
 $('nodes').querySelectorAll('.node').forEach(g=>g.classList.toggle('inspected',g.dataset.node===current));
 $('journeySteps').querySelectorAll('[data-step]').forEach(button=>{const step=Number(button.dataset.step),value=r.path[step]===current&&step===selectedStep?'step':'false';if(button.getAttribute('aria-current')!==value)button.setAttribute('aria-current',value);});
}
function renderDetail(){
 const r=currentRoute(),id=inspected||r.path[selectedStep]||'factory',n=N[id],index=r.path[selectedStep]===id?selectedStep:r.path.indexOf(id);
 $('nodeTitle').textContent=label(id);
 let work=n.work;
 if(doc!=='overview'&&id==='consumer'&&mode().reverse&&r.path[0]===id)work='在个人地址核对已受理的退货、送修或回收委托，准备物品并按约定交件。实际接收地址由受理方指定，业务申请与承运方接货分别确认。';
 $('nodeText').textContent=work;
 $('nodeGuide').textContent=SPECIFIC_GUIDANCE[id]||FACILITY_GUIDANCE[n.icon];
 let handoff='';
 if(index>=0){const before=index?label(r.path[index-1]):null,after=r.path[index+1]?label(r.path[index+1]):null;handoff=before&&after?`本次衔接：${before} → ${label(id)} → ${after}。`:after?`本次发运起点，下一交接地点：${after}。`:before?`本次到达地点，上一交接地点：${before}。`:'本情景未产生运输移动。';if(r.hold&&index===r.path.length-1)handoff+=' 当前等待处理，尚未完成原定交付。';}
 else handoff=doc==='overview'?'总览展示该设施的通用功能；选择具体模式后可查看本次上下游衔接。':r.aux.flat().includes(id)?'本例蓝线表示独立的备件供应货流。':'该设施不在当前所选链路中。';
 $('handoff').textContent=handoff;
}
function focusNode(id,width=null){
 const n=N[id],g=$('nodes').querySelector(`[data-node="${id}"]`),bounds=g.getBBox(),cx=n.x+bounds.x+bounds.width/2,cy=n.y+bounds.y+bounds.height/2;
 const w=width||view.w,h=w*$('mapCanvas').clientHeight/$('mapCanvas').clientWidth;
 viewKind='manual';setView({x:cx-w/2,y:cy-h/2,w,h},true);
}
function inspect(id,width=null,step=null){stopReplay();const index=currentRoute().path.indexOf(id);selectedStep=step??Math.max(0,index);inspected=id;render();focusNode(id,width);}
function applyView(v){
 view=v;syncZoom();$('network').setAttribute('viewBox',`${v.x} ${v.y} ${v.w} ${v.h}`);
 const rect=$('minimap').querySelector('[data-viewport]');if(rect)for(const k of ['x','y','width','height'])rect.setAttribute(k,k==='width'?v.w:k==='height'?v.h:v[k]);
}
function setView(v,animated=false){
 $('mapCanvas').classList.toggle('route-focused',viewKind==='fit');const ratio=$('mapCanvas').clientWidth/$('mapCanvas').clientHeight;if(v.w/v.h<ratio)v.w=v.h*ratio;else v.h=v.w/ratio;
 cancelWheel();cancelCamera();
 if(!animated||reducedMotion()){applyView(v);return;}
 const from={...view},started=performance.now(),duration=viewKind==='manual'?380:850;
 const tick=now=>{const t=Math.min(1,(now-started)/duration),ease=1-Math.pow(1-t,3),next={};for(const k of ['x','y','w','h'])next[k]=from[k]+(v[k]-from[k])*ease;applyView(next);if(t<1)cameraFrame=requestAnimationFrame(tick);else cameraFrame=0;};
 cameraFrame=requestAnimationFrame(tick);
}
function fitRoute(animated=true){
 if(doc==='overview'){overview(animated);return;}
 viewKind='fit';
 const r=currentRoute(),ids=[...new Set([...r.path,...r.aux.flat()])],xs=[],ys=[];
 for(const id of ids){const n=N[id],size=facilitySize(id),half=Math.max(108*size,(label(id).length*23+28)/2,n.sub.length*7);xs.push(n.x-half,n.x+half);ys.push(n.y-108*size,n.y+plateY(id)+76);}
 $('activeEdges').querySelectorAll('.route-edge').forEach(e=>{const b=e.getBBox();xs.push(b.x,b.x+b.width);ys.push(b.y,b.y+b.height);});
 const canvas=$('mapCanvas'),cw=canvas.clientWidth,ch=canvas.clientHeight,overlay=document.querySelector('.chain-overlay'),reserve=cw>680?Math.max(overlay.offsetWidth,document.querySelector('.location-overlay').offsetWidth)+44:0;
 const minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys),unit=Math.max((maxX-minX+150)/Math.max(200,cw-reserve-50),(maxY-minY+130)/Math.max(250,ch-70),850/cw),w=unit*cw,h=unit*ch,cx=(minX+maxX)/2+reserve*unit/2,cy=(minY+maxY)/2+35*unit;
 setView({x:cx-w/2,y:cy-h/2,w,h},animated);
}
function overview(animated=true){
 viewKind='overview';
 // Fit the actual map region in the full canvas instead of an inset beside the panels.
 const canvas=$('mapCanvas'),cw=canvas.clientWidth,ch=canvas.clientHeight,topLeft=project(0,-70),bottomRight=project(3380,1770),unit=Math.max((bottomRight.x-topLeft.x)/Math.max(240,cw-60),(bottomRight.y-topLeft.y)/Math.max(250,ch-80)),w=unit*cw,h=unit*ch,cx=(topLeft.x+bottomRight.x)/2,cy=(topLeft.y+bottomRight.y)/2;
 setView({x:cx-w/2,y:cy-h/2,w,h},animated);
}

const ZOOM_MIN=380,ZOOM_MAX=10000;
function syncZoom(){const slider=$('zoomSlider'),value=Math.max(0,Math.min(100,100*Math.log(ZOOM_MAX/view.w)/Math.log(ZOOM_MAX/ZOOM_MIN)));slider.value=value;slider.style.setProperty('--zoom-fill',`${value}%`);slider.setAttribute('aria-valuetext',`${Math.round(ZOOM_MAX/view.w*100)}%`);$('zoomIn').disabled=view.w<=ZOOM_MIN+.1;$('zoomOut').disabled=view.w>=ZOOM_MAX-.1;}
function zoomTo(width,animated=true){viewKind='manual';const w=Math.max(ZOOM_MIN,Math.min(ZOOM_MAX,width)),h=w*$('mapCanvas').clientHeight/$('mapCanvas').clientWidth;setView({x:view.x+(view.w-w)/2,y:view.y+(view.h-h)/2,w,h},animated);}
function zoom(f){zoomTo(view.w*f);}
function renderMini(){
 if(!$('minimap'))return;const r=currentRoute(),active=new Set(r.path);$('minimap').innerHTML=`<rect x="0" y="0" width="5133" height="3009" rx="60" fill="#eef5fa"/>${Object.entries(N).map(([id,n])=>`<circle cx="${n.x}" cy="${n.y}" r="${active.has(id)?22:14}" fill="${active.has(id)?'#087f72':'#a9bfd1'}"/>`).join('')}<rect data-viewport x="${view.x}" y="${view.y}" width="${view.w}" height="${view.h}" fill="#087f7210" stroke="#087f72" stroke-width="10"/>`;
}
function renderJourney(){
 const r=currentRoute(),current=inspected||r.path[selectedStep];
 $('journeySteps').innerHTML=r.path.map((id,i)=>{
  const n=N[id],asset=id==='portB'&&mode().id==='air'?'assets/map/scenes/airport.png':sceneAsset(id),phase=r.path.length===1?'未发运 / 待处理':i===0?'本次发运起点':i===r.path.length-1?(r.hold?'当前等待处理':'本次到达地点'):'途中作业与交接';
  return `${i?'<span class="step-arrow" aria-hidden="true">→</span>':''}<button class="step-button journey-card ${i>r.pivot?'back':''}" data-step="${i}" aria-current="${id===current&&i===selectedStep?'step':'false'}" aria-label="第${i+1}环节：${esc(label(id))}"><div class="journey-card-head"><img src="${asset}" width="54" height="54" alt=""><div><h4>${esc(label(id))}</h4><p>${esc(n.sub)}</p></div></div><div class="journey-card-body"><div class="journey-number">${String(i+1).padStart(2,'0')} / ${String(r.path.length).padStart(2,'0')}</div><p>${esc(n.work)}</p></div><div class="journey-card-foot">${phase}</div></button>`;
 }).join('');
 sizeJourney();
 $('journeySteps').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{const step=Number(b.dataset.step);inspect(r.path[step],null,step);}));
}
function sizeJourney(){
 if(doc==='overview')return;
 const box=$('journeySteps'),count=currentRoute().path.length,available=box.clientWidth,gap=24,min=innerWidth<=680?154:140,max=count<3?360:310,width=Math.max(min,Math.min(max,(available-(count-1)*gap-4)/count));
 box.style.setProperty('--journey-card-width',`${width}px`);
 box.classList.toggle('journey-overflow',count*width+(count-1)*gap>available);
}
function stopReplay(){if(replay){clearInterval(replay);replay=null;}$('replayBtn').textContent='▶ 逐站演示';}
$('replayBtn').addEventListener('click',()=>{
 if(replay){stopReplay();return;}selectedStep=0;inspected=currentRoute().path[0];render();focusNode(inspected);$('replayBtn').textContent='Ⅱ 暂停演示';
 if(currentRoute().path.length<2){stopReplay();return;}
 replay=setInterval(()=>{const r=currentRoute();if(selectedStep>=r.path.length-1){stopReplay();return;}selectedStep++;inspected=r.path[selectedStep];render();focusNode(inspected);$('journeySteps').querySelector('[aria-current=step]')?.scrollIntoView({behavior:reducedMotion()?'instant':'smooth',block:'nearest',inline:'center'});if(selectedStep===r.path.length-1)stopReplay();},1500);
});
$('zoomSlider').addEventListener('input',e=>zoomTo(ZOOM_MAX*Math.pow(ZOOM_MIN/ZOOM_MAX,Number(e.target.value)/100),false));
$('modeSelect').addEventListener('change',e=>{modeId=e.target.value;scenario='normal';reset();});$('fitBtn').addEventListener('click',fitRoute);$('overviewBtn').addEventListener('click',overview);$('zoomIn').addEventListener('click',()=>zoom(.8));$('zoomOut').addEventListener('click',()=>zoom(1.25));
const canvas=$('mapCanvas');canvas.addEventListener('pointerdown',e=>{if(e.target.closest('.node')||e.target.closest('button')||e.target.closest('.chain-overlay')||e.target.closest('.map-navigation')||e.target.closest('.location-overlay'))return;cancelWheel();cancelCamera();drag={x:e.clientX,y:e.clientY,view:{...view}};canvas.setPointerCapture(e.pointerId);canvas.classList.add('dragging');});canvas.addEventListener('pointermove',e=>{if(!drag)return;viewKind='manual';const factor=drag.view.w/canvas.clientWidth;setView({...drag.view,x:drag.view.x-(e.clientX-drag.x)*factor,y:drag.view.y-(e.clientY-drag.y)*factor});});for(const name of ['pointerup','pointercancel'])canvas.addEventListener(name,()=>{drag=null;canvas.classList.remove('dragging');});
// Batch wheel events into one view update per frame, anchored under the pointer.
canvas.addEventListener('wheel',e=>{
 if(e.target.closest('.chain-overlay,.location-overlay,.map-navigation')||drag)return;
 e.preventDefault();cancelCamera();
 wheelDelta+=Math.max(-120,Math.min(120,e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?canvas.clientHeight:1)));
 wheelAnchor={x:e.clientX,y:e.clientY};
 if(wheelFrame)return;
 wheelFrame=requestAnimationFrame(()=>{
  wheelFrame=0;const delta=wheelDelta,anchor=wheelAnchor;wheelDelta=0;if(!delta)return;
  const rect=canvas.getBoundingClientRect(),u=(anchor.x-rect.left)/rect.width,v=(anchor.y-rect.top)/rect.height,w=Math.max(ZOOM_MIN,Math.min(ZOOM_MAX,view.w*Math.exp(delta*.0018))),h=w*rect.height/rect.width;
  viewKind='manual';setView({x:view.x+u*(view.w-w),y:view.y+v*(view.h-h),w,h},false);
 });
},{passive:false});
function showDialog(title,html){$('dialogTitle').textContent=title;$('dialogBody').innerHTML=html;$('infoDialog').showModal();}
$('sourcesBtn').addEventListener('click',()=>showDialog('资料依据与路径归纳',`<p>本图将行业机构标准、监管部门说明及物流企业公开服务归纳为教学路径。企业实例用于说明一种模式，不代表行业通用名称或其他公司的现行规程。链路是示例，不是真实订单轨迹。</p>${Object.entries(S).map(([k,s])=>`<article><a href="${s.url}" target="_blank" rel="noopener noreferrer">${esc(s.name)} ↗</a><p>${esc(s.scope)}</p></article>`).join('')}<article><b>覆盖范围</b><p>涵盖一般采购与生产物流、库存分配、寄递与货运、仓配、国际运输和逆向物流的代表性结构。危险品、医药、超限项目、工程与其他专用物流需要在这些结构上补充专门设施、资质、操作和监管要求，本图未逐项展开。</p></article>`));
$('helpBtn').addEventListener('click',()=>showDialog('怎样使用这张地图',`<article><b>1. 先选这次移动的业务目的</b><p>采购、补货、销售履约和售后服务可能属于同一供应链，却是不同的单据与实物移动。消费者订单发货，不需要把此前工厂生产和仓网备货再走一遍。</p></article><article><b>2. 比较适用的物流模式</b><p>选同一单据范围下的模式，比较直达、网络、越库、仓配或近场组织。全网中的地点位置固定；“聚焦链路”调整视野，“全网”显示所有设施，可拖动或缩放。</p></article><article><b>3. 看箭头、序号，再点设施</b><p>青绿色是主货流，橙色是退回或逆向，蓝色是独立备件货流。地点上的多个序号表示重复经过；点击设施可将它移到视野中心；地图右上角解释当前链路，右下角介绍选中的地点；下方顺序条支持按每次经过查看。</p></article><article><b>4. 再看流程情景</b><p>只提供与所选模式相匹配的情景。取消不凭空生成运输，异常待处理不自动变成退货，申请拦截不等于实际拦截成功。</p></article><article><b>设施名称怎样理解</b><p>仓库按库存与作业功能区分，自营、第三方、平台是运营属性；保税、海外、冷链各有不同维度。B 仓、C 仓在相应模式中作为企业案例标注，不当作全行业必经节点。</p></article>`));
$('allNodesBtn').addEventListener('click',()=>{showDialog('认识全部设施',`<div class="facility-directory">${Object.entries(N).map(([id,n])=>`<button data-facility="${id}">${esc(n.label)}<small>${esc(n.sub)}</small></button>`).join('')}</div>`);$('dialogBody').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{$('infoDialog').close();inspect(b.dataset.facility,850);}));});
$('closeDialog').addEventListener('click',()=>$('infoDialog').close());$('infoDialog').addEventListener('click',e=>{if(e.target===$('infoDialog')){const r=$('infoDialog').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('infoDialog').close();}});
window.addEventListener('resize',()=>{sizeJourney();if(viewKind==='overview')overview(false);else if(viewKind==='fit')fitRoute(false);else setView({...view});});window.addEventListener('pagehide',()=>{stopReplay();cancelWheel();cancelCamera();cancelTransitions();});
initMap();render();fitRoute(false);
window.LOGISTICS_MAP={available,currentRoute,roadGeometry:(a,b)=>landRoute(a,b).map(p=>({x:p.x,y:p.y})),getState:()=>({doc,modeId,scenario}),select:(id,s='normal')=>{if(id==='overview'){enterOverview();return;}const m=M.find(m=>m.id===id);if(!m||!available(m).includes(s))throw Error('无效模式或情景');doc=m.doc;modeId=id;scenario=s;reset();}};
})();
