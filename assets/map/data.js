window.LOGISTICS_MAP_DATA = {
  "sources": {
    "gs1": {
      "name": "GS1 物流互操作模型",
      "url": "https://ref.gs1.org/standards/logistics-interoperability/1.1.1/",
      "scope": "第 3.5、3.6 节区分仓储与运输；第 4.2—4.5 节覆盖采购、工厂到仓、直送、越库及集货拆零。原文范围为 B2B。"
    },
    "edi": {
      "name": "GS1 订单到收款",
      "url": "https://www.gs1.org/standards/edi/solutions",
      "scope": "区分订单、发运通知、收货通知和结算等信息记录；单据名称与实物路径并非一一对应。"
    },
    "upu": {
      "name": "万国邮联 DPS",
      "url": "https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System",
      "scope": "邮政收寄、分拣、运输与投递功能；用于归纳寄递网络，不要求每票经过全部节点。"
    },
    "dhl": {
      "name": "DHL 仓储服务",
      "url": "https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html",
      "scope": "储存、拣选、包装、发运、退货管理及越库；支持自有、外包、共用仓的功能比较。"
    },
    "cross": {
      "name": "DHL 越库说明",
      "url": "https://lot.dhl.com/how-cross-docking-is-transforming-last-mile-delivery-dynamics/",
      "scope": "越库以快速衔接入站与出站货物为目标，减少中间储存；不等于没有卸货、分流或复核。"
    },
    "omni": {
      "name": "DHL 全渠道物流报告",
      "url": "https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf",
      "scope": "全渠道共享库存、B2B 与 B2C 仓内履约。地图分别展示每笔订单的去向。"
    },
    "parts": {
      "name": "DHL 服务物流",
      "url": "https://www.dhl.com/gb-en/home/supply-chain/solutions/service-logistics.html",
      "scope": "备件、正逆向运输、维修与部件回收。备件供应与客户送修品是不同货物流。"
    },
    "manufacture": {
      "name": "DHL 生产入厂物流",
      "url": "https://www.dhl.com/content/dam/dhl/global/csi/documents/pdf/csi-dhl-auto-mobility-inbound-to-manufacturing-domestic-transport.pdf.coredownload.pdf",
      "scope": "供应商到工厂的运输、生产需求衔接。循环取货是车辆组织示例，不表示单件货经过所有供应商。"
    },
    "inland": {
      "name": "马士基内陆运输",
      "url": "https://www.maersk.com/transportation-services/inland-services",
      "scope": "整车、拼载、公路、铁路、驳船与海运衔接；节点间不固定采用一种运力。"
    },
    "air": {
      "name": "DHL 航空货运",
      "url": "https://www.dhl.com/gb-en/home/global-forwarding/products-and-solutions/air-freight.html",
      "scope": "机场操作、航空货运及门到门衔接；图中简化承运人和代理人之间的信息协同。"
    },
    "samecity": {
      "name": "顺丰同城急送",
      "url": "https://www.sf-express.com/chn/sc/express/instant/rush",
      "scope": "点到点同城直送产品示例；同城并不意味着所有产品都不用中转。"
    },
    "cold": {
      "name": "顺丰冷运仓储",
      "url": "https://www.sf-express.com/chn/sc/express/cold/cold-warehousing",
      "scope": "多温区储存、分拣、包装、配送和温度追溯；温控是贯穿链路的条件。"
    },
    "cainiao": {
      "name": "菜鸟国际供应链",
      "url": "https://www.cainiao.com/global-supply-chain.html",
      "scope": "海外仓、保税仓、货运、进口头程、调拨及逆向物流。"
    },
    "customs": {
      "name": "海关跨境电商办事指南",
      "url": "https://online.customs.gov.cn/static/pages/guides/000629020000/000629020000.html",
      "scope": "跨境电商直购与网购保税、交易支付物流数据等办理要求；本图仅解释物理路径差异。"
    },
    "amazon": {
      "name": "亚马逊 FBA",
      "url": "https://sell.amazon.com/fulfillment-by-amazon",
      "scope": "平台履约中心储存、拣选、包装、发运及退货服务；为平台仓配模式实例。"
    },
    "awd": {
      "name": "亚马逊 AWD",
      "url": "https://sell.amazon.com/programs/warehousing?mons_sel_locale=en_US",
      "scope": "批量库存储存、向 FBA 自动补货与多渠道分配；备货与消费者订单履约分开。"
    },
    "jd": {
      "name": "京东 BBCC 案例（官方稿转载）",
      "url": "https://finance.sina.com.cn/roll/2026-08-14/doc-ininhhrt9413108.shtml",
      "scope": "新浪转载京东物流黑板报：B 仓集中备货、向 C 仓补货；名称属于该模式，不作为行业统一仓型。"
    },
    "ups": {
      "name": "UPS 交付前拦截",
      "url": "https://www.ups.com/us/en/support/tracking-support/change-delivery-options/delivery-intercept",
      "scope": "美国服务的退回、改址、延后与自提选项；资格、执行位置与是否成功需按服务确认。"
    },
    "fedex": {
      "name": "FedEx 末端交付 FAQ",
      "url": "https://www.fedex.com/en-us/faq/delivery-manager.html",
      "scope": "配送调整、未交付与自提服务示例；具体可用选项、期限和次数依承运产品。"
    },
    "recovery": {
      "name": "商务部等九部门回收体系通知",
      "url": "https://app.www.gov.cn/govdata/gov/202402/02/511741/article.html",
      "scope": "废旧家电家具回收渠道、集散与处理衔接；用于回收网络范围，不推广为全部品类的处置规程。"
    },
    "bulky": {
      "name": "顺丰大件仓配",
      "url": "https://www.sf-freight.com/warehouse.html",
      "scope": "大件仓配、宅配与送装等服务；本图区分运输交付和安装服务完成。"
    },
    "milkrun": {
      "name": "DHL 温控运输组织",
      "url": "https://dhlsupplychain.dhl.com/temperature-controlled-transport",
      "scope": "官方列出整车、循环取送（Milk run）及拼载等组织方式。结合生产入厂资料，地图归纳为多供应商取货的车辆行程示例。"
    },
    "hold": {
      "name": "FedEx 自提保管与退回",
      "url": "https://www.fedex.com/en-us/shipping/hold-at-location.html",
      "scope": "美国自提保管后未取的退回示例。本图不使用该服务期限作为行业统一期限。"
    },
    "refusal": {
      "name": "FedEx 停止投递与退回",
      "url": "https://shipnow.gb.fedex.com/help-centre/parcels/question/delivery/how-do-i-request-that-my-parcel-is-stopped-and-returned-to-me",
      "scope": "英国服务的停止投递、退回请求与交付时拒收示例。不把申请等同于执行完成。"
    }
  },
  "nodes": {
    "supplier": {
      "label": "供应商 A",
      "sub": "原料 / 成品供货",
      "x": 100,
      "y": 110,
      "icon": "factory",
      "role": "上游供货主体",
      "work": "按采购或供货约定备货、核对批次与交付要求。供应商既可以是生产商，也可以是贸易商。"
    },
    "supplier2": {
      "label": "供应商 B",
      "sub": "另一取货点",
      "x": 100,
      "y": 265,
      "icon": "factory",
      "role": "多点供货主体",
      "work": "在循环取货示例中按预约时段交货；它与供应商 A 交的是不同批次货物。"
    },
    "factory": {
      "label": "工厂",
      "sub": "生产与成品发运",
      "x": 310,
      "y": 110,
      "icon": "factory",
      "role": "生产设施",
      "work": "接收生产物料，组织加工与厂内流转，按指令发出成品。工厂内的收货、质检和线边补给可另行细分。"
    },
    "material": {
      "label": "原料 / 线边库",
      "sub": "生产物料存储",
      "x": 310,
      "y": 265,
      "icon": "warehouse",
      "role": "生产供料节点",
      "work": "完成收货、检验与库存管理，再按生产需求向线边补料。该节点表示功能，厂内库与厂外原料库可以分别设置。"
    },
    "bulk": {
      "label": "中心 / 储备仓",
      "sub": "集货备货 · B 仓实例",
      "x": 540,
      "y": 110,
      "icon": "warehouse",
      "role": "批量库存节点",
      "work": "集中接收与储存货物，向区域仓、履约仓或渠道补货。在京东 BBCC 中可对应 B 仓，在其他网络中名称和职能不同。"
    },
    "regional": {
      "label": "区域配送仓",
      "sub": "批量配送 / 分仓",
      "x": 785,
      "y": 110,
      "icon": "warehouse",
      "role": "区域库存与分配节点",
      "work": "向所在区域的门店、企业或下级仓供货。中心仓与区域仓并非每个网络都同时存在。"
    },
    "store": {
      "label": "门店 / 经销商",
      "sub": "渠道收货与本地销售",
      "x": 1070,
      "y": 110,
      "icon": "store",
      "role": "商业渠道节点",
      "work": "按补货计划收货、验收与上架，也可按线上订单组织门店发货。到店补货与门店向消费者交付是不同业务。"
    },
    "business": {
      "label": "企业收货点",
      "sub": "客户仓 / 项目现场",
      "x": 1390,
      "y": 110,
      "icon": "warehouse",
      "role": "企业交付终点",
      "work": "核对货物与交付凭证，按企业要求完成验收、入库或现场接收。签收不自动代表质量检验全部完成。"
    },
    "cold": {
      "label": "冷链仓",
      "sub": "符合要求的温控设施",
      "x": 540,
      "y": 265,
      "icon": "warehouse",
      "role": "温控库存节点",
      "work": "按商品要求管理温区、包装与温度记录。运输、装卸和末端同样需要温控能力，冷库并不能单独保证全程冷链。"
    },
    "fulfill": {
      "label": "订单履约仓",
      "sub": "拣选包装 · C 仓实例",
      "x": 785,
      "y": 265,
      "icon": "warehouse",
      "role": "面向订单的出库节点",
      "work": "根据销售订单分配库存，拣选、复核、包装并交给承运方。可以由商家、平台或第三方运营；C 仓仅为一种企业命名。"
    },
    "fulfill2": {
      "label": "另一履约仓",
      "sub": "平台仓 / 区域分仓",
      "x": 1020,
      "y": 265,
      "icon": "warehouse",
      "role": "另一库存落点",
      "work": "表示另一物理履约点，支持跨仓调拨或平台仓补货。自营、外包是运营属性，不另设必经“自营仓”节点。"
    },
    "front": {
      "label": "前置仓",
      "sub": "贴近本地消费需求",
      "x": 1240,
      "y": 265,
      "icon": "warehouse",
      "role": "近场库存节点",
      "work": "在配送服务区域附近储存商品，按订单拣货后衔接即时配送。前置仓本身仍有库存和仓内作业。"
    },
    "merchant": {
      "label": "商家发货点",
      "sub": "自有仓 / 第三方仓",
      "x": 100,
      "y": 450,
      "icon": "warehouse",
      "role": "商家订单发货节点",
      "work": "按订单拣选与打包，完成承运交接。自有仓、云仓、第三方仓可以承担相同的发货功能，合同与运营主体不同。"
    },
    "person": {
      "label": "个人寄件地址",
      "sub": "住址 / 现场交件",
      "x": 100,
      "y": 600,
      "icon": "home",
      "role": "个人发运起点",
      "work": "个人准备物品与寄件信息，交给快递员或带到营业网点。申请退货、回收或维修与实际交件要分别确认。"
    },
    "origin": {
      "label": "始发站点",
      "sub": "揽收 / 集货网点",
      "x": 310,
      "y": 465,
      "icon": "station",
      "role": "区域寄递入口",
      "work": "汇集揽收货物，记录交接与到件，再发往处理中心。上门揽收与网点交件都可以接入网络。"
    },
    "sortA": {
      "label": "始发分拣中心",
      "sub": "分流集包 · 发运",
      "x": 540,
      "y": 450,
      "icon": "sort",
      "role": "始发处理设施",
      "work": "按路由分流、集包或集笼，再装载发运。分拣中心侧重处理和路由，不默认承担商品长期库存。"
    },
    "sortB": {
      "label": "目的地分拣中心",
      "sub": "到达处理 · 下发",
      "x": 785,
      "y": 450,
      "icon": "sort",
      "role": "目的地处理设施",
      "work": "接收干线或支线来货，按目的区域与站点分流，向下游设施交接。实际网络可以有多级分拨或中转枢纽。"
    },
    "station": {
      "label": "末端配送站点",
      "sub": "区域派送 / 交接",
      "x": 1070,
      "y": 450,
      "icon": "station",
      "role": "末端组织设施",
      "work": "接货、按配送区域组织人员和车辆，再实施交付。大件、冷链等场景需要匹配的设备、人员和服务条件。"
    },
    "consumer": {
      "label": "个人收件地址",
      "sub": "消费者 / 收件人",
      "x": 1390,
      "y": 450,
      "icon": "home",
      "role": "上门交付地点",
      "work": "按约定核对和接收物品。妥投、商品使用、售后申请与业务结算是不同事件。"
    },
    "pickup": {
      "label": "自提点 / 柜",
      "sub": "通知与取件核验",
      "x": 1170,
      "y": 610,
      "icon": "station",
      "role": "约定的自提交付点",
      "work": "货物暂存后通知收件人，按服务核验取件。自提期限和超期处理依运营商规则；并非所有货物都可入柜。"
    },
    "newAddress": {
      "label": "变更收件地址",
      "sub": "符合条件后改派",
      "x": 1390,
      "y": 620,
      "icon": "home",
      "role": "另一个交付地点",
      "work": "仅在承运方确认可改址并更新路由后使用。它可以在其他区域，地图的距离不代表实际可服务范围。"
    },
    "freightA": {
      "label": "始发货运场站",
      "sub": "零担集货 / 配载",
      "x": 310,
      "y": 630,
      "icon": "terminal",
      "role": "货运网络入口",
      "work": "将不同托运人的小批量货物集货配载，再按线路发运。货运场站和快递分拣中心属于不同示例网络。"
    },
    "crossdock": {
      "label": "越库 / 集配点",
      "sub": "快进快出 · 衔接班次",
      "x": 540,
      "y": 630,
      "icon": "terminal",
      "role": "跨运次衔接设施",
      "work": "接收入站货物，按目的地或订单分流、复核并转入出站运输，尽量减少中间储存。具体可与其他设施合设。"
    },
    "freightB": {
      "label": "目的地货运场站",
      "sub": "拆零 / 提送货",
      "x": 785,
      "y": 630,
      "icon": "terminal",
      "role": "货运到达处理设施",
      "work": "拆分拼载货物，组织提货或末端送货。并非全部零担都要经过相同层级的场站。"
    },
    "reuse": {
      "label": "周转载具中心",
      "sub": "托盘 / 包装容器",
      "x": 310,
      "y": 800,
      "icon": "warehouse",
      "role": "可重复使用载具节点",
      "work": "回收、核查、清洁或整修周转载具，再按规则投入下一轮使用。载具回收不是商品退货。"
    },
    "parts": {
      "label": "配件库",
      "sub": "售后备件库存",
      "x": 540,
      "y": 800,
      "icon": "warehouse",
      "role": "备件供给节点",
      "work": "储存、管理并发出维修所需备件。维修品进入维修中心，所需配件由配件库另行配送。"
    },
    "repair": {
      "label": "维修 / 服务中心",
      "sub": "诊断维修与复测",
      "x": 785,
      "y": 800,
      "icon": "service",
      "role": "售后服务节点",
      "work": "核对维修委托，检测、确认方案后维修与复测，再衔接返还。维修完成与客户收到修复品要分别确认。"
    },
    "returns": {
      "label": "退货处理中心",
      "sub": "收货质检 · 分类去向",
      "x": 1070,
      "y": 800,
      "icon": "service",
      "role": "退货检验与处置节点",
      "work": "核对退货授权、商品与数量，登记状态后按检测结果安排可售入库、维修或回收等去向。退款时点由业务规则决定。"
    },
    "recycle": {
      "label": "回收集散 / 处理点",
      "sub": "分类评估与资源处理",
      "x": 1390,
      "y": 800,
      "icon": "service",
      "role": "回收网络节点",
      "work": "对回收物分类、评估并衔接再利用或合规资源处理。不同品类需要不同设施；地图未把废弃物当作普通快件。"
    },
    "portA": {
      "label": "国内口岸",
      "sub": "港口 / 机场 / 陆口岸",
      "x": 310,
      "y": 1010,
      "icon": "port",
      "role": "跨境出入境交接设施",
      "work": "衔接国际运输、口岸操作和海关监管。清关是业务与监管过程，不是一座必须独立经过的“海关仓”。"
    },
    "railA": {
      "label": "始发铁路场站",
      "sub": "集装箱 / 铁路交接",
      "x": 540,
      "y": 1010,
      "icon": "rail",
      "role": "铁路起运设施",
      "work": "衔接公路短驳与铁路承运、装载交接。铁路和公路的运输责任与运单按承运安排确认。"
    },
    "airA": {
      "label": "始发航空货站",
      "sub": "安检 / 航空交接",
      "x": 785,
      "y": 1010,
      "icon": "air",
      "role": "航空起运设施",
      "work": "按货物与航线要求组织收货、安检和航空交接；国际航班还涉及相应出境监管。"
    },
    "portB": {
      "label": "境外口岸 / 货站",
      "sub": "国际到达 / 离境",
      "x": 1070,
      "y": 1010,
      "icon": "port",
      "role": "境外运输衔接设施",
      "work": "在跨境示例中代表境外港口、机场或陆路口岸之一，按所选运输模式理解，不表示一次运输经过全部口岸类型。"
    },
    "railB": {
      "label": "目的地铁路场站",
      "sub": "卸载 / 公路短驳",
      "x": 1020,
      "y": 1170,
      "icon": "rail",
      "role": "铁路到达设施",
      "work": "完成到达交接，再安排公路短驳送至收货方。本图不要求每一铁路方案都采用同样的操作分工。"
    },
    "bonded": {
      "label": "保税仓",
      "sub": "受监管备货库存",
      "x": 540,
      "y": 1170,
      "icon": "warehouse",
      "role": "保税库存节点",
      "work": "按适用监管模式管理库存。网购保税零售进口的消费者订单履约与商品先入仓备货属于不同阶段。"
    },
    "overseas": {
      "label": "海外仓",
      "sub": "当地库存与履约",
      "x": 1240,
      "y": 1010,
      "icon": "warehouse",
      "role": "境外库存节点",
      "work": "先承接批量备货入仓，再按当地订单出库和配送。它是地理属性，可以同时具有储备或履约功能。"
    },
    "foreignFactory": {
      "label": "境外供货方",
      "sub": "进口货物发运",
      "x": 1390,
      "y": 970,
      "icon": "factory",
      "role": "跨境供货主体",
      "work": "按进口订单或备货安排发运，衔接境外运输与出口手续。商品类别和贸易方式影响所需文件。"
    },
    "foreignConsumer": {
      "label": "境外收件方",
      "sub": "企业 / 消费者",
      "x": 1390,
      "y": 1170,
      "icon": "home",
      "role": "境外交付地点",
      "work": "接收海外仓或国际直发货物；企业客户与个人消费者分别按相应交易及交付约定处理。"
    },
    "foreignBusiness": {
      "label": "境外企业收货点",
      "sub": "境外到货 / 接收",
      "x": 2900,
      "y": 460,
      "icon": "warehouse",
      "role": "企业交付终点",
      "work": "核对货物与交付凭证，按企业要求完成验收、入库或现场接收。签收不自动代表质量检验全部完成。"
    }
  },
  "documents": [
    {
      "id": "purchase",
      "title": "采购 / 入厂",
      "sub": "供应商交货、生产供料"
    },
    {
      "id": "transfer",
      "title": "补货 / 调拨",
      "sub": "库存迁移与仓网补货"
    },
    {
      "id": "b2b",
      "title": "企业销售 / 店配",
      "sub": "企业客户、门店收货"
    },
    {
      "id": "b2c",
      "title": "消费者销售",
      "sub": "商家、平台及近场履约"
    },
    {
      "id": "parcel",
      "title": "个人寄件",
      "sub": "C2C、C2B 与同城"
    },
    {
      "id": "international",
      "title": "国际 / 跨境",
      "sub": "海空铁、保税和海外仓"
    },
    {
      "id": "return",
      "title": "退货单",
      "sub": "个人退货、企业退供"
    },
    {
      "id": "repair",
      "title": "维修 / 配件单",
      "sub": "送修、返还、备件供应"
    },
    {
      "id": "recycle",
      "title": "回收 / 载具单",
      "sub": "回收物与周转载具"
    }
  ],
  "modes": [
    {
      "id": "raw",
      "doc": "purchase",
      "title": "供应商 → 原料库",
      "path": [
        "supplier",
        "material"
      ],
      "summary": "采购物料交给原料库验收入库。",
      "guide": "采购单触发的是供货与收货约定；接货后还要看数量、批次及质量检验，不能把到厂直接当作可投入生产。",
      "sources": [
        "gs1",
        "manufacture"
      ]
    },
    {
      "id": "jit",
      "doc": "purchase",
      "title": "供应商直送工厂",
      "path": [
        "supplier",
        "factory"
      ],
      "summary": "物料按生产需求送到工厂接收点。",
      "guide": "是否直接到线边、是否经过厂内缓冲区，取决于生产与供料方案。图中将厂内作业归入工厂，不表示省略验收。",
      "sources": [
        "gs1",
        "manufacture"
      ]
    },
    {
      "id": "milkrun",
      "doc": "purchase",
      "title": "多供应商循环取货",
      "path": [
        "supplier",
        "supplier2",
        "material"
      ],
      "summary": "车辆依次取货，再集中送至原料接收点。",
      "guide": "这条线表示车辆行程：A、B 两处的货物是不同批次。一件 A 供货并不需要在 B 再次收货。",
      "sources": [
        "manufacture",
        "milkrun"
      ],
      "vehicle": true
    },
    {
      "id": "linefeed",
      "doc": "purchase",
      "title": "原料库 → 生产线",
      "path": [
        "material",
        "factory"
      ],
      "summary": "已满足使用条件的物料按生产指令补给工厂。",
      "guide": "这是生产物流，不一定是对外承运。生产领料单、厂内搬运任务与采购入库单需要分别理解。",
      "sources": [
        "gs1",
        "manufacture"
      ]
    },
    {
      "id": "finished",
      "doc": "transfer",
      "title": "工厂 → 成品储备仓",
      "path": [
        "factory",
        "bulk"
      ],
      "summary": "成品下线后按发运计划进入储备库存。",
      "guide": "生产完成、成品入库和下游销售发运是不同事件；先检查本次移动对应哪个库存地点变化。",
      "sources": [
        "gs1"
      ]
    },
    {
      "id": "regional",
      "doc": "transfer",
      "title": "中心仓 → 区域仓",
      "path": [
        "bulk",
        "regional"
      ],
      "summary": "按区域库存需求批量补货。",
      "guide": "调拨通常改变库存位置，不自动产生向消费者的交付。一家公司可以只有单仓，也可以有多级仓网。",
      "sources": [
        "gs1",
        "dhl"
      ]
    },
    {
      "id": "jd",
      "doc": "transfer",
      "title": "B 仓 → C 仓补货",
      "path": [
        "bulk",
        "fulfill"
      ],
      "summary": "京东 BBCC 的集货备货与终端履约仓衔接实例。",
      "guide": "B 仓、C 仓在此专指 BBCC 的角色。补货与消费者订单发货分别选择查看；B 仓还可支撑其他渠道。",
      "sources": [
        "jd"
      ],
      "labels": {
        "bulk": "B 仓 · 集货备货",
        "fulfill": "C 仓 · 订单履约"
      }
    },
    {
      "id": "awd",
      "doc": "transfer",
      "title": "批量库存 → 平台履约仓",
      "path": [
        "bulk",
        "fulfill2"
      ],
      "summary": "亚马逊 AWD 向 FBA 补货的库存分工实例。",
      "guide": "储备库存用于批量储存，履约库存便于订单拣选。AWD 可向不同渠道分配货物；本例只突出向 FBA 的一次补货。",
      "sources": [
        "awd",
        "amazon"
      ],
      "labels": {
        "bulk": "AWD · 批量库存",
        "fulfill2": "FBA · 平台履约仓"
      }
    },
    {
      "id": "rebal",
      "doc": "transfer",
      "title": "履约仓之间调拨",
      "path": [
        "fulfill",
        "fulfill2"
      ],
      "summary": "将库存从一个履约点转到另一个履约点。",
      "guide": "仓间调拨以可调库存和业务授权为前提。共享库存的数据概念不等于库存实物已经移动。",
      "sources": [
        "gs1",
        "dhl",
        "omni"
      ]
    },
    {
      "id": "frontstock",
      "doc": "transfer",
      "title": "区域仓 → 前置仓",
      "path": [
        "regional",
        "front"
      ],
      "summary": "根据本地需求补充前置库存。",
      "guide": "先补货，再由前置仓按消费者订单拣货。两类任务不能合并为一笔订单的连续必经链路。",
      "sources": [
        "gs1",
        "omni"
      ]
    },
    {
      "id": "ftl",
      "doc": "b2b",
      "title": "企业直达货运",
      "path": [
        "factory",
        "business"
      ],
      "summary": "示例采用工厂到企业收货点的直达运输。",
      "guide": "整车表示运力使用方式，直达表示路径；两者不是同一分类。本例未画中转，不表示所有整车业务都没有经停。",
      "sources": [
        "gs1",
        "inland"
      ]
    },
    {
      "id": "ltl",
      "doc": "b2b",
      "title": "零担集拼 / 拆零",
      "path": [
        "merchant",
        "freightA",
        "freightB",
        "business"
      ],
      "summary": "小批量货物进入货运网络，集拼运输后拆零送达。",
      "guide": "不同托运人的货物可以共用运输车辆。场站层级、是否途中换车，以及提货或送货方式以具体网络为准。",
      "sources": [
        "gs1",
        "inland"
      ]
    },
    {
      "id": "store",
      "doc": "b2b",
      "title": "区域仓 → 门店店配",
      "path": [
        "regional",
        "store"
      ],
      "summary": "按门店补货单配送商品到门店。",
      "guide": "到店后仍有收货核对、入库或上架。门店面向消费者的销售属于后续业务，不能把两笔业务当作一票货的全部状态。",
      "sources": [
        "gs1",
        "omni"
      ]
    },
    {
      "id": "directstore",
      "doc": "b2b",
      "title": "工厂 / 供应商直送门店",
      "path": [
        "factory",
        "store"
      ],
      "summary": "商品直接送达零售门店。",
      "guide": "适合的供货方、货量与门店收货窗口要提前协同；直送不要求先经过中心仓。",
      "sources": [
        "gs1"
      ]
    },
    {
      "id": "crossdock",
      "doc": "b2b",
      "title": "越库集配到店",
      "path": [
        "factory",
        "crossdock",
        "store"
      ],
      "summary": "货物在集配点分流后快速衔接到店运输。",
      "guide": "越库侧重衔接入站与出站，尽量减少储存。卸货、分流、核对和装载仍可能发生。",
      "sources": [
        "gs1",
        "cross"
      ]
    },
    {
      "id": "merchant",
      "doc": "b2c",
      "title": "商家仓 → 快递网络",
      "path": [
        "merchant",
        "origin",
        "sortA",
        "sortB",
        "station",
        "consumer"
      ],
      "summary": "商家自发货，经寄递网络送达消费者。",
      "guide": "发货仓可以自有，也可以委托第三方。物流公司的中转分拣与商家的商品仓储承担不同功能。",
      "sources": [
        "dhl",
        "upu"
      ],
      "parcel": true
    },
    {
      "id": "platform",
      "doc": "b2c",
      "title": "平台 / 第三方仓履约",
      "path": [
        "fulfill",
        "sortB",
        "station",
        "consumer"
      ],
      "summary": "履约仓拣选打包，衔接运输网络与末端交付。",
      "guide": "平台仓、云仓、自营仓是运营安排，可以采用相似实物路径。图中将出仓后的网络入口合并，不要求绕行始发网点。",
      "sources": [
        "amazon",
        "dhl",
        "upu"
      ],
      "parcel": true
    },
    {
      "id": "short",
      "doc": "b2c",
      "title": "仓配一体短链",
      "path": [
        "fulfill",
        "station",
        "consumer"
      ],
      "summary": "从区域库存直接衔接末端站点配送。",
      "guide": "本例省略独立分拣中心，表示仓内已完成必要分流并可衔接区域配送。是否适用取决于覆盖范围与网络设计。",
      "sources": [
        "dhl",
        "omni"
      ],
      "parcel": true
    },
    {
      "id": "dropship",
      "doc": "b2c",
      "title": "供应商代发",
      "path": [
        "supplier",
        "sortA",
        "sortB",
        "station",
        "consumer"
      ],
      "summary": "商家接单，由供货方直接发货给消费者。",
      "guide": "业务订单在商家，实物从供货方出发。路径终点由交付约定决定，平台并非实物必须经过的地点。",
      "sources": [
        "edi",
        "dhl",
        "upu"
      ],
      "parcel": true
    },
    {
      "id": "factorydirect",
      "doc": "b2c",
      "title": "工厂直发消费者",
      "path": [
        "factory",
        "sortA",
        "sortB",
        "station",
        "consumer"
      ],
      "summary": "工厂按订单备货，接入快递配送网络。",
      "guide": "“工厂直发”说的是库存发货主体，不等于车辆一路直送，也不自动省略包装与订单复核。",
      "sources": [
        "dhl",
        "upu"
      ],
      "parcel": true
    },
    {
      "id": "front",
      "doc": "b2c",
      "title": "前置仓即时配送",
      "path": [
        "front",
        "consumer"
      ],
      "summary": "附近前置库存拣货后直接配送。",
      "guide": "前置仓是有库存的节点，即时配送是履约方式。本例使用点到点配送，不经过跨区域分拣。",
      "sources": [
        "omni",
        "samecity"
      ]
    },
    {
      "id": "storeinstant",
      "doc": "b2c",
      "title": "门店发货 / 同城直送",
      "path": [
        "store",
        "consumer"
      ],
      "summary": "门店接单备货，由同城运力配送。",
      "guide": "地图显示商品配送，门店中的订单确认、拣选复核与承运交接另行记录。实际服务还可能合单或采用其他组织方式。",
      "sources": [
        "omni",
        "samecity"
      ]
    },
    {
      "id": "selfpickup",
      "doc": "b2c",
      "title": "寄递至自提点",
      "path": [
        "fulfill",
        "sortB",
        "station",
        "pickup"
      ],
      "summary": "订单送至约定自提点，收件人核验取件。",
      "guide": "实物链路在自提交付点完成交付。消费者到自提点的出行不画成配送运输线。",
      "sources": [
        "upu",
        "fedex"
      ]
    },
    {
      "id": "cold",
      "doc": "b2c",
      "title": "冷链仓配",
      "path": [
        "cold",
        "station",
        "consumer"
      ],
      "summary": "温控库存衔接符合条件的运输与末端交付。",
      "guide": "冷链不是增加一个冷库就完成。温度要求、包装、装卸、车辆和站点均需适配商品，本例站点代表具备相应能力的节点。",
      "sources": [
        "cold"
      ],
      "labels": {
        "station": "温控末端节点"
      }
    },
    {
      "id": "bulky",
      "doc": "b2c",
      "title": "大件送装 / 入户",
      "path": [
        "fulfill",
        "freightB",
        "station",
        "consumer"
      ],
      "summary": "大件货物通过匹配的运力和末端团队交付。",
      "guide": "入户、安装和包装回收属于服务约定；交付与安装完成应分别确认，不把所有大件运输都视为送装服务。",
      "sources": [
        "bulky",
        "inland"
      ]
    },
    {
      "id": "c2c",
      "doc": "parcel",
      "title": "个人寄件 C2C",
      "path": [
        "person",
        "origin",
        "sortA",
        "sortB",
        "station",
        "consumer"
      ],
      "summary": "个人交件后，经寄递网络交给另一位个人。",
      "guide": "看链路时先找到真实寄件与收件地点。途中可以增加或合并处理节点，地图展示的是网络功能。",
      "sources": [
        "upu"
      ],
      "parcel": true
    },
    {
      "id": "c2b",
      "doc": "parcel",
      "title": "个人寄企业 C2B",
      "path": [
        "person",
        "origin",
        "sortA",
        "sortB",
        "station",
        "business"
      ],
      "summary": "个人寄件，企业作为实物接收方。",
      "guide": "企业接收可以是普通文件、样品或物品，不必一定有退货、维修或回收单。售后单据在对应范围中单独选择。",
      "sources": [
        "upu",
        "gs1"
      ],
      "parcel": true
    },
    {
      "id": "local",
      "doc": "parcel",
      "title": "个人同城直送",
      "path": [
        "person",
        "consumer"
      ],
      "summary": "选择点到点同城产品，取件后直接送达。",
      "guide": "这是同城直送产品示例，不是“同城必定不分拣”的行业规则。另选 C2C 可以比较寄递网络路径。",
      "sources": [
        "samecity"
      ]
    },
    {
      "id": "ocean",
      "doc": "international",
      "title": "海运门到门",
      "path": [
        "factory",
        "portA",
        "portB",
        "foreignBusiness"
      ],
      "summary": "国内集港、国际海运、境外提送货相衔接。",
      "guide": "出口与进口监管、提单及承运交接按贸易和运输约定办理。图中口岸同时承载关务提示，没有把报关当作独立实物搬运节点。",
      "sources": [
        "inland",
        "cainiao"
      ],
      "crossborder": true,
      "labels": {
        "portA": "国内海港",
        "portB": "境外海港"
      }
    },
    {
      "id": "rail",
      "doc": "international",
      "title": "公路—铁路联运",
      "path": [
        "factory",
        "railA",
        "railB",
        "business"
      ],
      "summary": "公路短驳连接两端铁路场站。",
      "guide": "此例用于比较多式联运的换装衔接，既可用于国内，也可用于适用的国际线路；跨境线路还需相应口岸和监管流程。",
      "sources": [
        "inland"
      ]
    },
    {
      "id": "air",
      "doc": "international",
      "title": "国际航空货运",
      "path": [
        "merchant",
        "airA",
        "portB",
        "foreignConsumer"
      ],
      "summary": "始发接货、航空交接、境外到达和提送货。",
      "guide": "货站代表航空操作功能。进出口清关、安检与目的地配送按产品组织，国际快递也可以使用航空干线但网络结构不同。",
      "sources": [
        "air"
      ],
      "crossborder": true,
      "labels": {
        "portB": "境外航空货站"
      }
    },
    {
      "id": "overseasstock",
      "doc": "international",
      "title": "批量出口备货海外仓",
      "path": [
        "factory",
        "portA",
        "portB",
        "overseas"
      ],
      "summary": "先把商品批量运到海外仓，形成当地库存。",
      "guide": "备货入仓不等于海外消费者已下单。海外仓可以由商家、平台或物流企业运营。",
      "sources": [
        "cainiao",
        "inland"
      ],
      "crossborder": true
    },
    {
      "id": "overseasorder",
      "doc": "international",
      "title": "海外仓本地履约",
      "path": [
        "overseas",
        "foreignConsumer"
      ],
      "summary": "当地订单从海外库存出库并配送。",
      "guide": "本地履约使用已经到仓的库存。本次发货不再次经过国际干线；与“批量出口备货海外仓”是两段业务。",
      "sources": [
        "cainiao"
      ]
    },
    {
      "id": "bondedstock",
      "doc": "international",
      "title": "进口商品保税备货",
      "path": [
        "foreignFactory",
        "portB",
        "portA",
        "bonded"
      ],
      "summary": "境外商品进入适用监管下的保税库存。",
      "guide": "该阶段是进口备货，不等于个人订单已放行。入区、仓储和后续出区按适用监管方式处理。",
      "sources": [
        "customs",
        "cainiao"
      ],
      "crossborder": true
    },
    {
      "id": "bondedorder",
      "doc": "international",
      "title": "网购保税进口履约",
      "path": [
        "bonded",
        "sortB",
        "station",
        "consumer"
      ],
      "summary": "消费者下单后，完成相应申报放行，再国内配送。",
      "guide": "商品库存先在保税仓。订单、支付与物流等信息按监管要求传输，放行后才能按相应模式衔接配送。",
      "sources": [
        "customs",
        "cainiao"
      ]
    },
    {
      "id": "directimport",
      "doc": "international",
      "title": "跨境直购进口",
      "path": [
        "foreignFactory",
        "portB",
        "portA",
        "sortB",
        "station",
        "consumer"
      ],
      "summary": "境外订单发运，入境通关后衔接国内交付。",
      "guide": "与网购保税相比，本例订单履约中包含国际运输。不能把监管方式代码当成一种车辆路径或仓库类型。",
      "sources": [
        "customs",
        "cainiao"
      ],
      "crossborder": true
    },
    {
      "id": "return",
      "doc": "return",
      "title": "个人退货 → 退货中心",
      "path": [
        "consumer",
        "station",
        "sortB",
        "returns"
      ],
      "summary": "经退货授权和交件，将商品送至指定退货地址。",
      "guide": "售后退货与交付失败退回不同：前者有售后业务处理，后者按运输指令回到原寄件方或指定接收方。",
      "sources": [
        "dhl",
        "parts",
        "upu"
      ],
      "reverse": true
    },
    {
      "id": "returnlocal",
      "doc": "return",
      "title": "门店 / 网点退货交接",
      "path": [
        "consumer",
        "store",
        "returns"
      ],
      "summary": "个人在受理门店交件，再归集至处理中心。",
      "guide": "能否跨渠道退货、由哪个门店受理，要看商家授权。图中展示可受理情形，不默认所有门店都接收所有订单。",
      "sources": [
        "omni",
        "dhl"
      ],
      "reverse": true
    },
    {
      "id": "supplierreturn",
      "doc": "return",
      "title": "企业退供 / 退货",
      "path": [
        "regional",
        "bulk",
        "factory"
      ],
      "summary": "企业库存按退供安排回到指定供货方。",
      "guide": "回程收货地址由退供约定确定，可能是供应商仓而非工厂。这里明确采用回到工厂的示例。",
      "sources": [
        "gs1"
      ],
      "reverse": true
    },
    {
      "id": "restock",
      "doc": "return",
      "title": "检测合格 → 可售入库",
      "path": [
        "returns",
        "fulfill"
      ],
      "summary": "退货经判断满足条件后转入可售库存。",
      "guide": "图中只展示检测后可售的一条去向。商品仍可转维修或回收；收货、退款与恢复可售是不同状态。",
      "sources": [
        "dhl",
        "parts"
      ]
    },
    {
      "id": "sendrepair",
      "doc": "repair",
      "title": "寄修 → 维修中心",
      "path": [
        "consumer",
        "station",
        "sortB",
        "repair"
      ],
      "summary": "客户送修品经运输交给服务中心。",
      "guide": "先核对维修委托并检测，确认服务方案后维修。蓝色辅助线表示备件供应，备件不随客户送修品走同一条主线。",
      "sources": [
        "parts",
        "upu"
      ],
      "reverse": true,
      "aux": [
        [
          "parts",
          "repair"
        ]
      ]
    },
    {
      "id": "repairreturn",
      "doc": "repair",
      "title": "维修完成 → 返还客户",
      "path": [
        "repair",
        "sortB",
        "station",
        "consumer"
      ],
      "summary": "修复、复测后重新发运，交给客户。",
      "guide": "本例返还为企业到个人的一程。送修、维修、返还及客户接收分别确认，不用一个“维修完成”代替全部状态。",
      "sources": [
        "parts",
        "upu"
      ],
      "parcel": true
    },
    {
      "id": "spares",
      "doc": "repair",
      "title": "配件库 → 服务中心",
      "path": [
        "parts",
        "repair"
      ],
      "summary": "备件按维修需求或补货任务发出。",
      "guide": "配件补给与客户维修品是不同货流，也可以直送工程师或现场。本例以服务中心为接收点。",
      "sources": [
        "parts"
      ]
    },
    {
      "id": "repaironsite",
      "doc": "repair",
      "title": "备件直送服务现场",
      "path": [
        "parts",
        "consumer"
      ],
      "summary": "备件交给现场服务人员，支持现场维修。",
      "guide": "线表示备件运输，不表示客户整机被带回配件库。服务人员到场、维修与测试另按服务任务管理。",
      "sources": [
        "parts"
      ]
    },
    {
      "id": "recover",
      "doc": "recycle",
      "title": "上门 / 定点回收",
      "path": [
        "consumer",
        "station",
        "recycle"
      ],
      "summary": "回收受理后，归集至适配品类的回收处理网络。",
      "guide": "本例站点为具备回收交接条件的服务点，并非任意普通快递网点；评估、再利用与资源处理需按品类和约定判断。",
      "sources": [
        "recovery",
        "parts"
      ],
      "reverse": true,
      "labels": {
        "station": "回收交接点"
      }
    },
    {
      "id": "recoveryflow",
      "doc": "recycle",
      "title": "处理后再生材料流转",
      "path": [
        "recycle",
        "material",
        "factory"
      ],
      "summary": "满足使用条件的再生材料进入生产供料。",
      "guide": "这条线的货物已经从回收物转为符合要求的再生材料。不能把未处理废弃物直接当作普通原料入厂。",
      "sources": [
        "recovery",
        "manufacture"
      ]
    },
    {
      "id": "rti",
      "doc": "recycle",
      "title": "周转载具回收与再用",
      "path": [
        "store",
        "reuse",
        "factory"
      ],
      "summary": "托盘或周转容器回收、核查整修后再使用。",
      "guide": "载具物流可以独立于商品正向运输，也可以回程带回；此例突出回收中心功能。",
      "sources": [
        "gs1"
      ],
      "reverse": true
    }
  ]
};
