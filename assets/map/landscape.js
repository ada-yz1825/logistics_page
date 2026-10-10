'use strict';
// Environmental artwork stays independent of the business nodes and transport model.
window.renderLogisticsLandscape=({g,project,nodes,roads,el})=>{
 const add=(tag,attrs,parent=g)=>{const e=el(tag,attrs);parent.append(e);return e;};
 const points=coords=>coords.map(([x,y])=>project(x,y));
 const closed=coords=>{const p=points(coords),r=40;let d='';for(let i=0;i<p.length;i++){const a=p[(i+p.length-1)%p.length],b=p[i],c=p[(i+1)%p.length],l1=Math.hypot(a.x-b.x,a.y-b.y),l2=Math.hypot(c.x-b.x,c.y-b.y),s=Math.min(r,l1*.18,l2*.18),u={x:b.x+(a.x-b.x)*s/l1,y:b.y+(a.y-b.y)*s/l1},v={x:b.x+(c.x-b.x)*s/l2,y:b.y+(c.y-b.y)*s/l2};d+=`${i?'L':'M'}${u.x},${u.y} Q${b.x},${b.y} ${v.x},${v.y} `;}return d+'Z';};
 const poly=(coords,attrs,parent=g)=>add('polygon',{points:points(coords).map(p=>`${p.x},${p.y}`).join(' '),...attrs},parent);
 const line=(coords,attrs,parent=g)=>add('path',{d:points(coords).map((p,i)=>`${i?'L':'M'}${p.x},${p.y}`).join(' '),fill:'none',...attrs},parent);
 const labelAreas=[];
 const clear=(p,r=35)=>{
  if(labelAreas.some(b=>p.x+r>b.x-16&&p.x-r<b.x+b.w&&p.y+r>b.y-30&&p.y-r<b.y+40))return false;
  if(Object.values(nodes).some(n=>Math.abs(n.x-p.x)<108*(n.visualScale||1)+r&&p.y>n.y-108*(n.visualScale||1)-r&&p.y<n.y+69*(n.visualScale||1)+76+r))return false;
  for(const route of roads.values())for(let i=1;i<route.points.length;i++){const a=route.points[i-1],b=route.points[i],dx=b.x-a.x,dy=b.y-a.y,den=dx*dx+dy*dy,t=den?Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/den)):0;if(Math.hypot(p.x-a.x-t*dx,p.y-a.y-t*dy)<r+22)return false;}
  return true;
 };
 const defs=add('defs',{});
 defs.innerHTML=`<linearGradient id="parkTurf" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e1e9d8"/><stop offset="1" stop-color="#cddfc9"/></linearGradient><linearGradient id="campusSurface" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#f3f4ee"/><stop offset="1" stop-color="#e1e7e6"/></linearGradient><linearGradient id="riverSurface" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#b7d8e2"/><stop offset=".55" stop-color="#cce6ed"/><stop offset="1" stop-color="#adceda"/></linearGradient><pattern id="campusPaving" width="28" height="16" patternUnits="userSpaceOnUse"><path d="M0 0H28M0 16H28M14 0V8M0 8H28M0 8V16M28 8V16" fill="none" stroke="#a7babd" stroke-width=".6" opacity=".14"/></pattern><filter id="landSoftShadow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="3" dy="5" stdDeviation="3" flood-color="#587783" flood-opacity=".13"/></filter>`;
 const zones=[
 {pts:[[25,100],[780,100],[860,490],[540,590],[25,525]],name:'生产园区',at:[40,70],turf:false},
 {pts:[[30,635],[790,600],[1090,685],[1070,1120],[410,1180],[20,1020]],name:'始发物流园',at:[55,610],turf:false},
 {pts:[[915,95],[1915,95],[1930,520],[1370,625],[945,550]],name:'区域仓配园',at:[1150,-5],turf:false},
 {pts:[[1110,680],[1910,650],[1900,1150],[1420,1170],[1120,1040]],name:'城市生活区',at:[1510,640],turf:true},
 {pts:[[30,1300],[1410,1300],[1440,1630],[40,1630]],name:'循环与服务园',at:[60,1670],turf:true},
 {pts:[[1495,1280],[1940,1260],[1940,1620],[1495,1590]],name:'沿海口岸区',at:[1530,1670],turf:false},
 {pts:[[2790,340],[3310,350],[3300,930],[2780,930]],name:'境外城市',at:[2790,300],turf:true},
 {pts:[[2520,1050],[3280,1070],[3250,1630],[2510,1625]],name:'境外港口与产业区',at:[2530,1020],turf:false}
 ];
 for(const z of zones){
  const d=closed(z.pts);add('path',{d,fill:z.turf?'#edf1e7':'url(#campusSurface)',stroke:'#d4dfda','stroke-width':1.3,class:'environment-zone'});
  add('path',{d,fill:'url(#campusPaving)',opacity:z.turf?.25:.7});
  const p=project(...z.at);labelAreas.push({x:p.x,y:p.y,w:z.name.length*27+20});add('text',{x:p.x,y:p.y,class:'land-zone-label',transform:`rotate(0 ${p.x} ${p.y})`}).textContent=z.name;
 }
 // The floodplain has a planted edge, retaining banks, water reflections and reeds.
 const river=[];for(let x=0;x<=2010;x+=22)river.push([x,1230+28*Math.sin(x/220)]);
 line(river,{stroke:'#dde8d5','stroke-width':66,'stroke-linecap':'round','stroke-linejoin':'round'});
 line(river,{stroke:'#b9cdbf','stroke-width':36,'stroke-linecap':'round','stroke-linejoin':'round'});
 line(river,{stroke:'url(#riverSurface)','stroke-width':29,'stroke-linecap':'round','stroke-linejoin':'round'});
 line(river.map(([x,y])=>[x,y-8]),{stroke:'#edf7f7','stroke-width':1.4,opacity:.75});
 for(let x=35;x<1990;x+=135){const y=1230+28*Math.sin(x/220),p=project(x,y);add('path',{d:`M${p.x-14},${p.y-1}l28,4 M${p.x-4},${p.y+6}l15,2`,stroke:'#f5fcfc','stroke-width':1.1,fill:'none',opacity:.6});}
 // Pocket parks have shaped lawns and gravel edges rather than solid rectangular tiles.
 for(const pts of [[[18,12],[310,10],[270,95],[15,120]],[[15,540],[250,550],[225,620],[20,655]],[[65,1570],[290,1510],[320,1655],[50,1690]],[[2495,25],[2800,35],[2730,185],[2510,160]]]){
  add('path',{d:closed(pts),fill:'url(#parkTurf)',stroke:'#d0dac6','stroke-width':2});
 }
 // Agricultural plots use planted rows and small irrigation margins.
 for(let i=0;i<5;i++){
  const x=40+i*48,coords=[[x,100],[x+38,94],[x+48,137],[x+7,144]];
  poly(coords,{fill:i%2?'#dce0b9':'#e4e0b6',stroke:'#f1f3df','stroke-width':2});
  for(let k=1;k<5;k++)line([[x+5+k*6,103],[x+12+k*6,138]],{stroke:'#c3cc9f','stroke-width':1.2,opacity:.75});
 }
 const objects=[],buildingPositions=[];
 const tree=(x,y,scale=1,type='round')=>{
  const p=project(x,y);if(!clear(p,18*scale))return;
  objects.push({y:p.y,draw:()=>{const t=add('g',{transform:`translate(${p.x},${p.y}) scale(${scale})`,class:'land-tree'});
   t.innerHTML=`<ellipse cx="5" cy="7" rx="16" ry="6" fill="#6d927a" opacity=".15"/><path d="M0 4V-24" stroke="#8b9c7d" stroke-width="3.5"/>`+(type==='pine'?'<path d="M0 -53L-15 -22H-9L-19 -9H19L9 -22H15Z" fill="#88ac8e"/><path d="M0 -53V-10H19L9 -22H15Z" fill="#759b80"/>':'<ellipse cx="-6" cy="-26" rx="14" ry="17" fill="#8eb194"/><ellipse cx="7" cy="-29" rx="13" ry="18" fill="#a7c09a"/><ellipse cy="-39" rx="14" ry="14" fill="#b5cba5"/><ellipse cx="-4" cy="-42" rx="6" ry="5" fill="#c7d8b6" opacity=".7"/>');}});
 };
 for(let i=0;i<27;i++){tree(25+i*72,1183+14*Math.sin(i),.7);tree(25+i*72,1640+(i%3)*17,.9,i%3?'round':'pine');}
 for(const[x,y]of [[30,50],[90,45],[145,55],[210,35],[260,45],[40,573],[102,577],[178,590],[2500,75],[2570,95],[2640,65],[2720,85],[3290,1100],[3310,1200],[3300,1330],[3290,1470],[1910,1000],[1930,1120]]){tree(x,y);tree(x+24,y+15,.68);}
 // Background buildings share a consistent isometric view, height scale and lighting.
 const building=(x,y,height=48,kind='apartment')=>{
  const p=project(x,y);if(!clear(p,24)||buildingPositions.some(b=>Math.hypot(b.x-p.x,b.y-p.y)<62))return;buildingPositions.push(p);
  objects.push({y:p.y,draw:()=>{
   const b=add('g',{transform:`translate(${p.x},${p.y}) scale(.72)`,class:'environment-building','data-scenery-x':p.x,'data-scenery-y':p.y});
   let art=`<ellipse cx="5" cy="8" rx="36" ry="12" fill="#6f8996" opacity=".12"/><polygon points="-28,0 4,-13 32,0 0,14" fill="#e5eceb"/><polygon points="-26,-${height} 0,${14-height} 0,14 -26,0" fill="#e5e9e7"/><polygon points="0,${14-height} 30,-${height} 30,0 0,14" fill="#b8cad0"/><polygon points="-26,-${height} 4,${-height-13} 30,-${height} 0,${14-height}" fill="#f8faf7" stroke="#d3ddd9" stroke-width=".8"/>`;
   const rows=Math.max(1,Math.floor(height/14));for(let row=0;row<rows;row++)for(let col=0;col<3;col++){
    const yy=14-height+row*13+col*4.2;art+=`<path d="M${-22+col*8},${yy-8}v6" stroke="${(row+col)%5===0?'#d4cda5':'#9db9c2'}" stroke-width="3.8"/><path d="M${5+col*8},${yy-1-col*8.5}v6" stroke="#7fa6b4" stroke-width="3.8"/>`;
   }
   art+=`<path d="M-6 4v-11l6 3v11" fill="#9caeae"/><polygon points="-17,${-height-2} -4,${-height-8} 6,${-height-4} -7,${-height+2}" fill="#d6dfdd"/><path d="M-8 ${-height-8}v-8" stroke="#a6b8bd" stroke-width="1.4"/>`;
   if(kind==='shop')art+=`<path d="M-25 -9L-1 4V-2L-25 -15Z" fill="#7bb6b0"/><path d="M-21 -7v9M-11 -2v9" stroke="#f3f7ee" stroke-width="2"/>`;
   b.innerHTML=art;
  }});
 };
 for(const[x,y,h]of [[1130,610,54],[1435,650,68],[1775,585,45],[1915,900,57],[1880,1180,44],[1500,1185,35],[1200,1140,38],[2670,340,46],[2810,205,58],[3010,285,74],[3300,700,47],[3090,960,40]]){
  building(x,y,h);building(x+52,y+24,h*.7,'shop');building(x+10,y+70,h*.85);
 }
 // Fill usable city pockets at a measured density; leave the main cargo corridors open.
 for(const [left,right,top,bottom,max]of [[1110,1930,550,1180,36],[2680,3320,230,970,25]]){
  let count=0;for(let y=top;y<=bottom&&count<max;y+=45)for(let x=left+(Math.round(y/45)%2)*22;x<=right&&count<max;x+=50){const before=buildingPositions.length;building(x,y,34+((Math.round(x/75)+Math.round(y/70))%4)*12);if(buildingPositions.length>before)count++;}
 }
 // Small planted islands occupy the gaps without becoming new logistics nodes.
 for(let y=170;y<1160;y+=112)for(let x=80+(Math.round(y/112)%2)*52;x<1940;x+=143){
  const p=project(x,y);if(!clear(p,25)||buildingPositions.some(b=>Math.hypot(b.x-p.x,b.y-p.y)<62))continue;
  const garden=add('g',{transform:`translate(${p.x},${p.y})`,class:'environment-garden'});
  garden.innerHTML='<ellipse cx="0" cy="4" rx="29" ry="12" fill="#aabfb1" opacity=".1"/><path d="M-27 0L-6 -10 27 0 6 11Z" fill="#f0f1e7" stroke="#d6dfce" stroke-width="1"/><path d="M-21 0L-5 -7 21 0 5 8Z" fill="#cadcbd"/><path d="M-15 -1l24 6" stroke="#b5ccab" stroke-width="3"/><circle cx="-10" cy="-2" r="3" fill="#a3be96"/><circle cx="8" cy="2" r="3" fill="#a3be96"/>';
  tree(x,y,.52);
 }
 // Planting strips, plazas and benches enrich free space between facilities.
 for(const[x,y]of [[1160,620],[1450,655],[1770,600],[1890,1150],[2780,215],[3070,970]]){
  const p=project(x,y);if(!clear(p,60))continue;
  poly([[x-26,y-10],[x+66,y-10],[x+66,y+70],[x-26,y+70]],{fill:'#e2e7db',stroke:'#f7f8ef','stroke-width':3});
  line([[x-16,y+48],[x+56,y+48]],{stroke:'#f4f4eb','stroke-width':6});
  tree(x-18,y+8,.7);tree(x+59,y+30,.8);
  const bench=project(x+14,y+48);add('path',{d:`M${bench.x-10} ${bench.y}l20 3m-17 -2v5m14 -2v5`,stroke:'#afaa8b','stroke-width':2.5,fill:'none'});
 }
 // Quay edges have deck seams, bollards, breakwater stones and container ribs.
 for(const[x,y,side]of [[1960,1300,1],[1960,1440,1],[2500,1290,-1],[2500,1460,-1]]){
  poly([[x-15,y],[x+side*65,y],[x+side*65,y+26],[x-15,y+26]],{fill:'#d8e4e6',stroke:'#9cb7c1','stroke-width':1.5});
  for(let j=0;j<4;j++){line([[x+side*j*15,y+2],[x+side*j*15,y+24]],{stroke:'#b9ced4','stroke-width':.8});const p=project(x+side*j*17,y+24);add('ellipse',{cx:p.x,cy:p.y,rx:2.6,ry:2,fill:'#819eaa'});}
 }
 for(let i=0;i<7;i++){
  const x=1635+i*32,y=1570+(i%2)*42;
  const base=points([[x,y],[x+24,y],[x+24,y+29],[x,y+29]]),top=base.map(p=>({x:p.x,y:p.y-16})),join=p=>p.map(v=>`${v.x},${v.y}`).join(' '),colors=['#a8c7c1','#c7ccb3','#abc3cc'];
  add('polygon',{points:join([base[1],base[2],top[2],top[1]]),fill:'#809fa9'});add('polygon',{points:join([base[2],base[3],top[3],top[2]]),fill:'#9eb7bb'});add('polygon',{points:join(top),fill:colors[i%3],stroke:'#eef4f1','stroke-width':1});
  for(let k=1;k<5;k++){const a=project(x+k*4,y+2),b=project(x+k*4,y+27);add('path',{d:`M${a.x},${a.y-16}L${b.x},${b.y-16}`,fill:'none',stroke:'#7e9da8','stroke-width':.6,opacity:.6});}

 }
 // Airport apron details stay behind the aviation facility and outside all route corridors.
 for(const[x,y]of [[1510,1540],[1565,1570],[1620,1540]]){
  const p=project(x,y);if(!clear(p,35))continue;
  poly([[x-30,y-20],[x+30,y-20],[x+30,y+28],[x-30,y+28]],{fill:'#e0e6e4',stroke:'#cbd6d5','stroke-width':1});
  line([[x,y-15],[x,y+20],[x+15,y+20]],{stroke:'#c9b88a','stroke-width':1.5});
 }
 objects.sort((a,b)=>a.y-b.y).forEach(o=>o.draw());
};
