window.LOGISTICS_MAP_DATA = {
  "sources": {
    "gs1": {
      "name": "GS1 物流互操作模型",
      "url": "https://ref.gs1.org/standards/logistics-interoperability/1.1.1/",
      "scope": "第 3.5、3.6 节区分仓储与运输；第 4.2—4.5 节覆盖采购、工厂到仓、直送、越库及集货拆零。原文范围为 B2B。"
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
      "scope": "多温区仓储、分拣、包装、配送与追溯；按项目报价，列出出入库、存储、分拣及包装费用；顺丰该产品仅限月结客户并需签订合同。"
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
    },
    "fiata": {
      "name": "FIATA：货代服务定义",
      "url": "https://fiata.org/about-freight-forwarding/",
      "scope": "货代组织单式或多式运输、集拼、仓储及相关代理服务；组织方与实际承运资源按职能区分。",
      "checked": "2026-10-13"
    },
    "dgfmodel": {
      "name": "DHL Group：货代业务模式",
      "url": "https://group.dhl.com/en/about-us/corporate-divisions/global-forwarding-freight.html",
      "scope": "货代在客户与承运人之间组织运输，提供海空陆及多式联运；不等于必须自有车辆、飞机或船舶。",
      "checked": "2026-10-13"
    },
    "ocean": {
      "name": "DHL：海运 FCL / LCL",
      "url": "https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/ocean-freight.html",
      "scope": "整箱、拼箱与门到门海运服务；作为服务模式实例，不推导所有航线的固定时效。",
      "checked": "2026-10-13"
    },
    "rail": {
      "name": "DHL：铁路与多式联运",
      "url": "https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/rail-freight.html",
      "scope": "铁路货运及公路前后程衔接；包括欧亚整箱/拼箱和国内铁路方案，各产品范围不同。",
      "checked": "2026-10-13"
    },
    "weight": {
      "name": "DHL：各运输方式计费重量",
      "url": "https://www.dhl.com/gb-en/home/global-forwarding/freight-forwarding-education-center/calculating-chargeable-weights.html",
      "scope": "航空、拼箱货运比较实重与体积重；整箱按箱计费；公路体积折算随地区与承运人变化。示例折算不能作为行业统一标准。",
      "checked": "2026-10-13"
    },
    "freightquote": {
      "name": "DHL：货代报价与订舱",
      "url": "https://www.dhl.com/us-en/home/global-forwarding/mydhli/discover-quote-and-book.html",
      "scope": "航空、海运整箱和拼箱报价订舱；可选清关、货值保护等服务，须核对报价覆盖范围。",
      "checked": "2026-10-13"
    },
    "dgfterms": {
      "name": "DHL 比利时：费用与付款条款案例",
      "url": "https://www.dhl.com/content/dam/dhl/local/be/dhl-global-forwarding/documents/be-en-dgf-terms-and-conditions.pdf",
      "scope": "地区条款实例：未列明服务可另收费，附加费按条款调整，发票原则上立即付款。仅适用于该地区/合同，不推广为所有货代统一账期。",
      "checked": "2026-10-13"
    },
    "sfpay": {
      "name": "顺丰企业平台：付款方式",
      "url": "https://v.sf-express.com/web/laas/help-center",
      "scope": "企业寄件操作列出寄付现结、寄付月结、到付；可选方式和月结资格以实际产品与账号为准。",
      "checked": "2026-10-13"
    },
    "sfltl": {
      "name": "顺丰快运：标准零担",
      "url": "https://www.sf-freight.com/mobile/smLoad.html",
      "scope": "标准零担面向批量/大件托运，公开页采用单公斤报价；是该产品实例，不代表所有零担产品都采用相同计费规则。",
      "checked": "2026-10-13"
    },
    "sfintl": {
      "name": "顺丰：国际标快",
      "url": "https://www.sf-express.com/chn/sc/express/intl/int-standard",
      "scope": "门到门国际快件、航空运输及清关；按实重与体积重较大者计费，覆盖、附加服务和时效因起讫地变化。",
      "checked": "2026-10-13"
    },
    "warehousequote": {
      "name": "DHL Fulfillment Network：项目询价",
      "url": "https://www.dhl.com/global-en/microsites/supply-chain/fulfillment-network/get-a-quote.html",
      "scope": "仓配项目通过需求询价；该页未公布统一付款方、费用清单或结算周期。",
      "checked": "2026-10-13"
    },
    "lcl": {
      "name": "DHL：拼箱作业与计价",
      "url": "https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/ocean-freight/less-than-container-load.html",
      "scope": "拼箱货在始发集拼、目的侧拆分；DHL 产品示例按立方米或吨报价，仓库/作业点和海港可以衔接或合设。",
      "checked": "2026-10-13"
    },
    "recovery": {
      "name": "商务部等九部门：回收体系",
      "url": "https://app.www.gov.cn/govdata/gov/202402/02/511741/article.html",
      "scope": "废旧家电家具的回收网点、储运集散和规范处理；仅用于相关品类回收设施说明，不推广为所有物品处置规程。",
      "checked": "2026-10-13"
    },
    "rti": {
      "name": "GS1：可回收周转载具标识",
      "url": "https://www.gs1.org/standards/id-keys/grai",
      "scope": "可重复使用的运输载具、设备的跟踪和分类；用于载具节点说明，不确定统一回收路径或服务价格。",
      "checked": "2026-10-13"
    },
    "warehouseOps": {
      "name": "GS1：仓内收存拣发",
      "url": "https://gs1.org.sg/transport-and-logistics/warehouse-management/",
      "scope": "GS1 的仓内收货、存储、拣选和发运标识管理；卡片流程为教学归纳。"
    },
    "airDocs": {
      "name": "DHL：航空货物与运输资料",
      "url": "https://www.dhl.com/ch-en/home/global-forwarding/freight-forwarding-education-center/air-cargo-documentation.html",
      "scope": "DHL 的航空运输文件与适用监管资料；不同货类和运输范围要求不同。"
    },
    "returnsCircular": {
      "name": "DHL：退货与循环服务",
      "url": "https://www.dhl.com/us-en/home/supply-chain/solutions/returns-and-circularity.html",
      "scope": "退货收集与运输、接收检查分类，以及按确认指令维修、入库、返供应商或回收；不规定统一分拣中心数量。"
    },
    "sfAirHubs": {
      "name": "顺丰航空：航空与分拣网络",
      "url": "https://www.sf-airlines.com/en/capability/hubs/index.html",
      "scope": "国内及国际航空网络与地区分拣中心衔接；支持境内航空寄递示例，不表示所有时效产品都走航空。"
    },
    "accDomestic": {
      "name": "国货航：国内与国际货站作业",
      "url": "https://www.airchinacargo.com/cargo/tzzgx/jbxx/xxpl/0714/2c9865b6-97f43e60-0198-079a6220-0d11.pdf",
      "scope": "国货航 2024 年年度报告的航空货站服务章节：国内、国际进出港货物收运、交接、计重、仓储、交付、中转等；用于国内航空服务作业归纳。"
    },
    "storeFulfill": {
      "name": "DHL：门店发货与到店自提",
      "url": "https://www.dhl.com/discover/en-in/b2b-advice/b2b-e-commerce-advice/omnichannel-logistics-store-website-fulfilment",
      "scope": "门店库存拣选包装发运、线上订单到店领取；示例市场为印度，不能照搬时效与价格。"
    },
    "frontPlan": {
      "name": "菜鸟：区域仓与前置仓规划",
      "url": "https://tech.cainiao.com/productv2/ProductIndex/269",
      "scope": "区域仓、前置仓选址与库存、订单、配送需求的协同；不公布统一即配时效或计费。"
    },
    "coscoDomestic": {
      "name": "中远海控：内贸沿海与海铁联运",
      "url": "https://hold.coscoshipping.com/cms_files/filemanager/1631/attach/20248/65FC76FE0F54CDED993C5161A6D8E9D8.pdf",
      "scope": "2024 年中期业绩材料说明内贸业务和海铁联运通道；仅归纳服务结构，不使用历史规模数字作为现行数据。"
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
      "work": "按采购或供货约定备货、核对批次与交付要求。供应商既可以是生产商，也可以是贸易商。",
      "resource": "供应商",
      "sources": [
        "gs1",
        "manufacture"
      ],
      "operations": {
        "outbound": "ship",
        "inbound": "productionIn",
        "through": "ship"
      }
    },
    "supplier2": {
      "label": "供应商 B",
      "sub": "另一取货点",
      "x": 100,
      "y": 265,
      "icon": "factory",
      "role": "多点供货主体",
      "work": "在循环取货示例中按预约时段交货；它与供应商 A 交的是不同批次货物。",
      "resource": "供应商",
      "sources": [
        "gs1",
        "manufacture"
      ],
      "operations": {
        "outbound": "ship",
        "inbound": "productionIn",
        "through": "ship"
      }
    },
    "factory": {
      "label": "工厂",
      "sub": "生产与成品发运",
      "x": 310,
      "y": 110,
      "icon": "factory",
      "role": "生产设施",
      "work": "接收生产物料，组织加工与厂内流转，按指令发出成品。工厂内的收货、质检和线边补给可另行细分。",
      "resource": "生产企业",
      "sources": [
        "gs1",
        "manufacture"
      ],
      "operations": {
        "outbound": "ship",
        "inbound": "productionIn",
        "through": "ship"
      }
    },
    "material": {
      "label": "原料 / 线边库",
      "sub": "生产物料存储",
      "x": 310,
      "y": 265,
      "icon": "warehouse",
      "role": "生产供料节点",
      "work": "完成收货、检验与库存管理，再按生产需求向线边补料。该节点表示功能，厂内库与厂外原料库可以分别设置。",
      "resource": "仓储运营方",
      "sources": [
        "gs1",
        "dhl"
      ],
      "operations": {
        "outbound": "material",
        "inbound": "warehouseIn",
        "through": "material"
      }
    },
    "bulk": {
      "label": "中心 / 储备仓",
      "sub": "集货备货 · B 仓实例",
      "x": 540,
      "y": 110,
      "icon": "warehouse",
      "role": "批量库存节点",
      "work": "集中接收与储存货物，向区域仓、履约仓或渠道补货。在京东 BBCC 中可对应 B 仓，在其他网络中名称和职能不同。",
      "resource": "仓储运营方",
      "sources": [
        "gs1",
        "dhl"
      ],
      "operations": {
        "outbound": "warehouseOut",
        "inbound": "warehouseIn",
        "through": "warehouseThrough"
      }
    },
    "regional": {
      "label": "区域配送仓",
      "sub": "批量配送 / 分仓",
      "x": 785,
      "y": 110,
      "icon": "warehouse",
      "role": "区域库存与分配节点",
      "work": "向所在区域的门店、企业或下级仓供货。中心仓与区域仓并非每个网络都同时存在。",
      "resource": "仓储运营方",
      "sources": [
        "gs1",
        "dhl"
      ],
      "operations": {
        "outbound": "warehouseOut",
        "inbound": "warehouseIn",
        "through": "warehouseThrough"
      }
    },
    "store": {
      "label": "门店 / 经销商",
      "sub": "渠道收货与本地销售",
      "x": 1070,
      "y": 110,
      "icon": "store",
      "role": "商业渠道节点",
      "work": "按补货计划收货、验收与上架，也可按线上订单组织门店发货。到店补货与门店向消费者交付是不同业务。",
      "resource": "门店 / 经销商",
      "sources": [
        "omni"
      ],
      "operations": {
        "outbound": "ship",
        "inbound": "receive",
        "through": "receive"
      }
    },
    "business": {
      "label": "企业收货点",
      "sub": "客户仓 / 项目现场",
      "x": 1390,
      "y": 110,
      "icon": "warehouse",
      "role": "企业交付终点",
      "work": "核对货物与交付凭证，按企业要求完成验收、入库或现场接收。签收不自动代表质量检验全部完成。",
      "resource": "企业收货方",
      "sources": [
        "gs1",
        "dhl"
      ],
      "operations": {
        "outbound": "warehouseOut",
        "inbound": "receive",
        "through": "warehouseThrough"
      }
    },
    "cold": {
      "label": "冷链仓",
      "sub": "符合要求的温控设施",
      "x": 540,
      "y": 265,
      "icon": "warehouse",
      "role": "温控库存节点",
      "work": "按商品要求管理温区、包装与温度记录。运输、装卸和末端同样需要温控能力，冷库并不能单独保证全程冷链。",
      "resource": "仓储运营方",
      "sources": [
        "cold"
      ],
      "operations": {
        "outbound": "coldOut",
        "inbound": "coldIn",
        "through": "coldThrough"
      }
    },
    "fulfill": {
      "label": "订单履约仓",
      "sub": "拣选包装 · C 仓实例",
      "x": 785,
      "y": 265,
      "icon": "warehouse",
      "role": "面向订单的出库节点",
      "work": "根据销售订单分配库存，拣选、复核、包装并交给承运方。可以由商家、平台或第三方运营；C 仓仅为一种企业命名。",
      "resource": "仓储运营方",
      "sources": [
        "gs1",
        "dhl"
      ],
      "operations": {
        "outbound": "warehouseOut",
        "inbound": "warehouseIn",
        "through": "warehouseThrough"
      }
    },
    "fulfill2": {
      "label": "另一履约仓",
      "sub": "平台仓 / 区域分仓",
      "x": 1020,
      "y": 265,
      "icon": "warehouse",
      "role": "另一库存落点",
      "work": "表示另一物理履约点，支持跨仓调拨或平台仓补货。自营、外包是运营属性，不另设必经“自营仓”节点。",
      "resource": "仓储运营方",
      "sources": [
        "gs1",
        "dhl"
      ],
      "operations": {
        "outbound": "warehouseOut",
        "inbound": "warehouseIn",
        "through": "warehouseThrough"
      }
    },
    "front": {
      "label": "前置仓",
      "sub": "贴近本地消费需求",
      "x": 1240,
      "y": 265,
      "icon": "warehouse",
      "role": "近场库存节点",
      "work": "在配送服务区域附近储存商品，按订单拣货后衔接即时配送。前置仓本身仍有库存和仓内作业。",
      "resource": "仓储运营方",
      "sources": [
        "omni"
      ],
      "operations": {
        "outbound": "warehouseOut",
        "inbound": "warehouseIn",
        "through": "warehouseThrough"
      }
    },
    "merchant": {
      "label": "商家发货点",
      "sub": "自有仓 / 第三方仓",
      "x": 100,
      "y": 450,
      "icon": "warehouse",
      "role": "商家订单发货节点",
      "work": "按订单拣选与打包，完成承运交接。自有仓、云仓、第三方仓可以承担相同的发货功能，合同与运营主体不同。",
      "resource": "仓储运营方",
      "sources": [
        "gs1",
        "dhl"
      ],
      "operations": {
        "outbound": "warehouseOut",
        "inbound": "warehouseIn",
        "through": "warehouseThrough"
      }
    },
    "person": {
      "label": "个人寄件地址",
      "sub": "住址 / 现场交件",
      "x": 100,
      "y": 600,
      "icon": "home",
      "role": "个人发运起点",
      "work": "个人准备物品与寄件信息，交给快递员或带到营业网点。申请退货、回收或维修与实际交件要分别确认。",
      "resource": "寄件方",
      "sources": [
        "upu"
      ],
      "operations": {
        "outbound": "homeShip",
        "inbound": "homeReceive",
        "through": "homeReceive"
      }
    },
    "origin": {
      "label": "始发站点",
      "sub": "揽收 / 集货网点",
      "x": 310,
      "y": 465,
      "icon": "station",
      "role": "区域寄递入口",
      "work": "汇集揽收货物，记录交接与到件，再发往处理中心。上门揽收与网点交件都可以接入网络。",
      "resource": "揽派 / 配送方",
      "sources": [
        "upu"
      ],
      "operations": {
        "outbound": "postalOrigin",
        "inbound": "postalOrigin",
        "through": "postalOrigin"
      }
    },
    "sortA": {
      "label": "始发分拣中心",
      "sub": "分流集包 · 发运",
      "x": 540,
      "y": 450,
      "icon": "sort",
      "role": "始发处理设施",
      "work": "按路由分流、集包或集笼，再装载发运。分拣中心侧重处理和路由，不默认承担商品长期库存。",
      "resource": "分拣网络运营方",
      "sources": [
        "upu"
      ],
      "operations": {
        "outbound": "sort",
        "inbound": "sort",
        "through": "sort"
      }
    },
    "sortB": {
      "label": "目的地分拣中心",
      "sub": "到达处理 · 下发",
      "x": 785,
      "y": 450,
      "icon": "sort",
      "role": "目的地处理设施",
      "work": "接收干线或支线来货，按目的区域与站点分流，向下游设施交接。实际网络可以有多级分拨或中转枢纽。",
      "resource": "分拣网络运营方",
      "sources": [
        "upu"
      ],
      "operations": {
        "outbound": "sort",
        "inbound": "sort",
        "through": "sort"
      }
    },
    "station": {
      "label": "末端配送站点",
      "sub": "区域派送 / 交接",
      "x": 1070,
      "y": 450,
      "icon": "station",
      "role": "末端组织设施",
      "work": "接货、按配送区域组织人员和车辆，再实施交付。大件、冷链等场景需要匹配的设备、人员和服务条件。",
      "resource": "揽派 / 配送方",
      "sources": [
        "upu"
      ],
      "operations": {
        "outbound": "postalOrigin",
        "inbound": "delivery",
        "through": "delivery"
      }
    },
    "consumer": {
      "label": "个人收件地址",
      "sub": "消费者 / 收件人",
      "x": 1390,
      "y": 450,
      "icon": "home",
      "role": "上门交付地点",
      "work": "按约定核对和接收物品。妥投、商品使用、售后申请与业务结算是不同事件。",
      "resource": "收件方",
      "sources": [
        "upu"
      ],
      "operations": {
        "outbound": "homeShip",
        "inbound": "homeReceive",
        "through": "homeReceive"
      }
    },
    "pickup": {
      "label": "自提点 / 柜",
      "sub": "通知与取件核验",
      "x": 1170,
      "y": 610,
      "icon": "station",
      "role": "约定的自提交付点",
      "work": "货物暂存后通知收件人，按服务核验取件。自提期限和超期处理依运营商规则；并非所有货物都可入柜。",
      "resource": "揽派 / 配送方",
      "sources": [
        "upu"
      ],
      "operations": {
        "outbound": "pickup",
        "inbound": "pickup",
        "through": "pickup"
      }
    },
    "newAddress": {
      "label": "变更收件地址",
      "sub": "符合条件后改派",
      "x": 1390,
      "y": 620,
      "icon": "home",
      "role": "另一个交付地点",
      "work": "仅在承运方确认可改址并更新路由后使用。它可以在其他区域，地图的距离不代表实际可服务范围。",
      "resource": "收件方",
      "sources": [
        "upu"
      ],
      "operations": {
        "outbound": "homeShip",
        "inbound": "homeReceive",
        "through": "homeReceive"
      }
    },
    "freightA": {
      "label": "始发货运场站",
      "sub": "零担集货 / 配载",
      "x": 310,
      "y": 630,
      "icon": "terminal",
      "role": "货运网络入口",
      "work": "将不同托运人的小批量货物集货配载，再按线路发运。货运场站和快递分拣中心属于不同示例网络。",
      "resource": "集拼 / 场站运营方",
      "sources": [
        "gs1",
        "fiata"
      ],
      "operations": {
        "outbound": "freightOut",
        "inbound": "freightIn",
        "through": "freightIn"
      }
    },
    "crossdock": {
      "label": "越库 / 集配点",
      "sub": "快进快出 · 衔接班次",
      "x": 540,
      "y": 630,
      "icon": "terminal",
      "role": "跨运次衔接设施",
      "work": "接收入站货物，按目的地或订单分流、复核并转入出站运输，尽量减少中间储存。具体可与其他设施合设。",
      "resource": "集拼 / 场站运营方",
      "sources": [
        "gs1",
        "fiata"
      ],
      "operations": {
        "outbound": "crossdock",
        "inbound": "crossdock",
        "through": "crossdock"
      }
    },
    "freightB": {
      "label": "目的地货运场站",
      "sub": "拆零 / 提送货",
      "x": 785,
      "y": 630,
      "icon": "terminal",
      "role": "货运到达处理设施",
      "work": "拆分拼载货物，组织提货或末端送货。并非全部零担都要经过相同层级的场站。",
      "resource": "集拼 / 场站运营方",
      "sources": [
        "gs1",
        "fiata"
      ],
      "operations": {
        "outbound": "freightOut",
        "inbound": "freightIn",
        "through": "freightIn"
      }
    },
    "reuse": {
      "label": "周转载具中心",
      "sub": "托盘 / 包装容器",
      "x": 310,
      "y": 800,
      "icon": "warehouse",
      "role": "可重复使用载具节点",
      "work": "接收和管理可重复使用的托盘、周转箱等运输载具，核对标识、数量和状态，衔接后续再次使用。具体检修、清洗或回收路径按载具服务安排确认。",
      "resource": "载具服务方",
      "sources": [
        "rti"
      ],
      "operations": {
        "outbound": "reuse",
        "inbound": "reuse",
        "through": "reuse"
      }
    },
    "parts": {
      "label": "配件库",
      "sub": "售后备件库存",
      "x": 540,
      "y": 800,
      "icon": "warehouse",
      "role": "备件供给节点",
      "work": "储存、管理并发出维修所需备件。维修品进入维修中心，所需配件由配件库另行配送。",
      "resource": "仓储运营方",
      "sources": [
        "parts"
      ],
      "operations": {
        "outbound": "warehouseOut",
        "inbound": "warehouseIn",
        "through": "warehouseThrough"
      }
    },
    "repair": {
      "label": "维修 / 服务中心",
      "sub": "诊断维修与复测",
      "x": 785,
      "y": 800,
      "icon": "service",
      "role": "售后服务节点",
      "work": "核对维修委托，检测、确认方案后维修与复测，再衔接返还。维修完成与客户收到修复品要分别确认。",
      "resource": "维修服务方",
      "sources": [
        "parts"
      ],
      "operations": {
        "outbound": "repair",
        "inbound": "repair",
        "through": "repair"
      }
    },
    "returns": {
      "label": "退货处理中心",
      "sub": "收货质检 · 分类去向",
      "x": 1070,
      "y": 800,
      "icon": "service",
      "role": "退货检验与处置节点",
      "work": "核对退货授权、商品与数量，登记状态后按检测结果安排可售入库、维修或回收等去向。退款时点由业务规则决定。",
      "resource": "退货处理方",
      "sources": [
        "dhl"
      ],
      "operations": {
        "outbound": "returnProcess",
        "inbound": "returnProcess",
        "through": "returnProcess"
      }
    },
    "recycle": {
      "label": "回收集散 / 处理点",
      "sub": "分类评估与资源处理",
      "x": 1390,
      "y": 800,
      "icon": "service",
      "role": "回收网络节点",
      "work": "以废旧家电家具为例，回收设施衔接暂存、运输、分拣及后续规范处理。集散与处理可由不同主体完成；不能把收货理解为已完成拆解或资源化。",
      "resource": "回收运营方",
      "sources": [
        "recovery"
      ],
      "operations": {
        "outbound": "recovery",
        "inbound": "recovery",
        "through": "recovery"
      }
    },
    "portA": {
      "label": "境内海港",
      "sub": "海运装船与交接",
      "x": 310,
      "y": 1010,
      "icon": "port",
      "role": "跨境出入境交接设施",
      "work": "在境内海港衔接集装箱交接、装船或卸船作业，以及相应监管与地面运输。进口与出口的作业方向不同；具体流程按码头、航线及业务要求确认。",
      "resource": "港口作业方",
      "sources": [
        "ocean"
      ],
      "operations": {
        "outbound": "seaOut",
        "inbound": "seaIn",
        "through": "seaIn"
      }
    },
    "railA": {
      "label": "始发铁路场站",
      "sub": "集装箱 / 铁路交接",
      "x": 540,
      "y": 1010,
      "icon": "rail",
      "role": "铁路起运设施",
      "work": "衔接公路短驳与铁路承运、装载交接。铁路和公路的运输责任与运单按承运安排确认。",
      "resource": "铁路场站运营方",
      "sources": [
        "rail"
      ],
      "operations": {
        "outbound": "railOut",
        "inbound": "railIn",
        "through": "railIn"
      }
    },
    "airA": {
      "label": "境内航空货站",
      "sub": "安检 / 航空交接",
      "x": 785,
      "y": 1010,
      "icon": "air",
      "role": "航空起运设施",
      "work": "按货物与航线要求组织收货、安检和航空交接；国际航班还涉及相应出境监管。",
      "resource": "航空货站作业方",
      "sources": [
        "air",
        "accDomestic",
        "sfAirHubs"
      ],
      "operations": {
        "outbound": "airOut",
        "inbound": "airIn",
        "through": "airIn"
      }
    },
    "portB": {
      "label": "境外海港",
      "sub": "海运卸船与交接",
      "x": 1070,
      "y": 1010,
      "icon": "port",
      "role": "境外运输衔接设施",
      "work": "在境外海港衔接装船或卸船、集装箱交接及当地地面运输。港口作业与清关分别确认，船舶提供海上干线运力。",
      "resource": "港口作业方",
      "sources": [
        "ocean"
      ],
      "operations": {
        "outbound": "seaOut",
        "inbound": "seaIn",
        "through": "seaIn"
      }
    },
    "railB": {
      "label": "目的地铁路场站",
      "sub": "卸载 / 公路短驳",
      "x": 1020,
      "y": 1170,
      "icon": "rail",
      "role": "铁路到达设施",
      "work": "完成到达交接，再安排公路短驳送至收货方。本图不要求每一铁路方案都采用同样的操作分工。",
      "resource": "铁路场站运营方",
      "sources": [
        "rail"
      ],
      "operations": {
        "outbound": "railOut",
        "inbound": "railIn",
        "through": "railIn"
      }
    },
    "bonded": {
      "label": "保税仓",
      "sub": "受监管备货库存",
      "x": 540,
      "y": 1170,
      "icon": "warehouse",
      "role": "保税库存节点",
      "work": "按适用监管模式管理库存。网购保税零售进口的消费者订单履约与商品先入仓备货属于不同阶段。",
      "resource": "仓储运营方",
      "sources": [
        "cainiao",
        "customs"
      ],
      "operations": {
        "outbound": "bonded",
        "inbound": "bonded",
        "through": "bonded"
      }
    },
    "overseas": {
      "label": "海外仓",
      "sub": "当地库存与履约",
      "x": 1240,
      "y": 1010,
      "icon": "warehouse",
      "role": "境外库存节点",
      "work": "先承接批量备货入仓，再按当地订单出库和配送。它是地理属性，可以同时具有储备或履约功能。",
      "resource": "仓储运营方",
      "sources": [
        "cainiao"
      ],
      "operations": {
        "outbound": "warehouseOut",
        "inbound": "warehouseIn",
        "through": "warehouseThrough"
      }
    },
    "foreignFactory": {
      "label": "境外供货方",
      "sub": "进口货物发运",
      "x": 1390,
      "y": 970,
      "icon": "factory",
      "role": "跨境供货主体",
      "work": "按进口订单或备货安排发运，衔接境外运输与出口手续。商品类别和贸易方式影响所需文件。",
      "resource": "境外供货方",
      "sources": [
        "gs1",
        "manufacture"
      ],
      "operations": {
        "outbound": "ship",
        "inbound": "productionIn",
        "through": "ship"
      }
    },
    "foreignConsumer": {
      "label": "境外收件方",
      "sub": "企业 / 消费者",
      "x": 1390,
      "y": 1170,
      "icon": "home",
      "role": "境外交付地点",
      "work": "接收海外仓或国际直发货物；企业客户与个人消费者分别按相应交易及交付约定处理。",
      "resource": "收件方",
      "sources": [
        "upu"
      ],
      "operations": {
        "outbound": "homeShip",
        "inbound": "homeReceive",
        "through": "homeReceive"
      }
    },
    "foreignBusiness": {
      "label": "境外企业收货点",
      "sub": "境外到货 / 接收",
      "x": 2900,
      "y": 460,
      "icon": "warehouse",
      "role": "企业交付终点",
      "work": "核对货物与交付凭证，按企业要求完成验收、入库或现场接收。签收不自动代表质量检验全部完成。",
      "resource": "境外收货方",
      "sources": [
        "gs1",
        "dhl"
      ],
      "operations": {
        "outbound": "warehouseOut",
        "inbound": "receive",
        "through": "warehouseThrough"
      }
    },
    "airB": {
      "label": "境外航空货站",
      "icon": "air",
      "sub": "航空卸货与交接",
      "work": "航空到达后卸货、办理货站交接，按适用要求衔接进口手续和地面提货。清关是作业过程，不是额外的实物仓库。",
      "resource": "航空货站作业方",
      "sources": [
        "air"
      ],
      "operations": {
        "outbound": "airOut",
        "inbound": "airIn",
        "through": "airIn"
      }
    },
    "cfsA": {
      "label": "始发拼箱作业点",
      "icon": "terminal",
      "sub": "收货与集拼装箱",
      "work": "接收拼箱货物，按运输安排集拼、装箱并交给海港运输段。本图采用独立作业点示例；实际可位于港区或其他场站。",
      "resource": "集拼 / 场站运营方",
      "sources": [
        "lcl"
      ],
      "operations": {
        "outbound": "cfsOut",
        "inbound": "cfsOut",
        "through": "cfsOut"
      }
    },
    "cfsB": {
      "label": "目的地拆箱作业点",
      "icon": "terminal",
      "sub": "拆箱与分拨提货",
      "work": "到达拼箱货物在此拆箱、核对并按收货对象分拨，衔接提货或配送。拆箱作业与进口放行分别确认。",
      "resource": "集拼 / 场站运营方",
      "sources": [
        "lcl"
      ],
      "operations": {
        "outbound": "cfsIn",
        "inbound": "cfsIn",
        "through": "cfsIn"
      }
    },
    "foreignStation": {
      "label": "境外配送站点",
      "icon": "station",
      "sub": "目的侧派送网络",
      "work": "接收目的侧寄递或配送货物，组织所在区域的末端交付。由服务商当地网络或合作承运资源承接，具体安排按产品确认。",
      "resource": "揽派 / 配送方",
      "sources": [
        "upu"
      ],
      "operations": {
        "outbound": "postalOrigin",
        "inbound": "delivery",
        "through": "delivery"
      }
    },
    "airC": {
      "label": "境内到达航空货站",
      "sub": "安检 / 航空交接",
      "x": 785,
      "y": 1010,
      "icon": "air",
      "role": "境内到达运输设施",
      "work": "在境内到达货站卸机接货、核对交接资料，并按提货条件衔接后续配送。国内运输不因经过航空货站而自动产生进出口清关。",
      "resource": "航空货站作业方",
      "sources": [
        "accDomestic",
        "sfAirHubs"
      ],
      "operations": {
        "outbound": "airOut",
        "inbound": "airDomesticIn",
        "through": "airDomesticIn"
      }
    },
    "portC": {
      "label": "境内到达海港",
      "sub": "海运装船与交接",
      "x": 310,
      "y": 1010,
      "icon": "port",
      "role": "境内到达运输设施",
      "work": "接收沿海运输到港箱货，衔接卸船、提箱和陆路交接。内贸海运与国际海运的监管及单证要求需分别确认。",
      "resource": "港口作业方",
      "sources": [
        "coscoDomestic"
      ],
      "operations": {
        "outbound": "seaOut",
        "inbound": "seaDomesticIn",
        "through": "seaDomesticIn"
      }
    }
  },
  "modes": [
    {
      "id": "warehouse",
      "title": "仓配一体 / 合同仓配",
      "path": [
        "merchant",
        "fulfill",
        "station",
        "consumer"
      ],
      "summary": "将库存入仓、仓内履约和配送作为一组服务来看。",
      "guide": "先看货物入仓与出库两个作业阶段；储存期间不表示货物一直在运输。图中配送段是服务衔接示例。",
      "sources": [
        "dhl",
        "gs1",
        "warehousequote"
      ],
      "scene": "supplychain",
      "capabilities": [
        "储存、拣选、包装与发运",
        "订单处理、库存可视与配送衔接"
      ],
      "settlement": {
        "basis": "公开服务介绍未给出本模式统一价目表；需核对所选项目报价，不能直接套用其他企业的仓储或配送价格。",
        "payment": "公开资料未给出本模式统一付款方与结算周期。询价时确认谁签约付款、哪些作业单独计费、如何对账及何时付款。",
        "sources": [
          "dhl",
          "gs1",
          "warehousequote",
          "warehousequote"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "segments": [
        "入仓运输",
        "出库配送",
        "派送"
      ]
    },
    {
      "id": "platform",
      "title": "平台仓履约 · FBA 案例",
      "path": [
        "fulfill",
        "sortB",
        "station",
        "consumer"
      ],
      "summary": "以亚马逊 FBA 说明平台仓如何完成订单履约。",
      "guide": "此处展示已在平台仓库存的订单履约；中间分拨与配送节点是通用结构示例，不表示 FBA 订单固定经过这些节点。",
      "sources": [
        "amazon",
        "upu"
      ],
      "scene": "supplychain",
      "capabilities": [
        "拣选、包装、配送",
        "客服与退货处理"
      ],
      "settlement": {
        "basis": "FBA 按履约件计收履约费，仓储按日均占用体积形成月度费用；品类、尺寸、重量及其他适用项目需按官方费表核对。",
        "payment": "本页说明公开的计费项目；账户扣费、账单与应付款按卖家账户规则核对，不把月度仓储计费理解为所有项目统一月结。",
        "sources": [
          "amazon"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "平台履约服务商（FBA 案例）",
      "resourceRoles": {
        "fulfill": "平台仓运营方"
      },
      "operationOverrides": {
        "fulfill": "warehouseOut"
      },
      "segments": [
        "出库集运",
        "末端转运",
        "派送"
      ]
    },
    {
      "id": "awd",
      "title": "储备仓补货 · AWD 案例",
      "path": [
        "bulk",
        "fulfill2"
      ],
      "summary": "以 AWD 说明批量库存向履约仓补货。",
      "guide": "补货完成不等于消费者订单已交付；本模式终点是履约仓。",
      "sources": [
        "awd",
        "amazon"
      ],
      "scene": "supplychain",
      "capabilities": [
        "批量储存与自动补货",
        "面向多个销售渠道的库存分配"
      ],
      "settlement": {
        "basis": "AWD 公开价格分储存、入库处理、出库处理与运输，分别采用体积/月、箱和运输体积等计价单位；核对所在地区与方案。",
        "payment": "按实际使用服务收费；账单和扣费规则核对卖家账户，公开产品页未给出全行业通用的付款账期。",
        "sources": [
          "awd"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "resourceRoles": {
        "bulk": "AWD 仓运营方",
        "fulfill2": "FBA 仓运营方"
      },
      "segments": [
        "库存补货"
      ]
    },
    {
      "id": "distribution",
      "title": "仓网分配与门店配送",
      "path": [
        "factory",
        "bulk",
        "regional",
        "store"
      ],
      "summary": "从成品备货到区域分配，再衔接门店补货。",
      "guide": "图中展示一个去向，不代表每件货都必须经过中心和区域两层仓；仓网层级由服务方案确定。",
      "sources": [
        "gs1",
        "omni",
        "dhl"
      ],
      "scene": "supplychain",
      "capabilities": [
        "仓储库存管理",
        "区域库存分配与门店交接"
      ],
      "settlement": {
        "basis": "公开服务介绍未给出本模式统一价目表；需核对所选项目报价，不能直接套用其他企业的仓储或配送价格。",
        "payment": "公开资料未给出本模式统一付款方与结算周期。询价时确认谁签约付款、哪些作业单独计费、如何对账及何时付款。",
        "sources": [
          "gs1",
          "omni",
          "dhl",
          "warehousequote"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "segments": [
        "成品入仓",
        "仓间调拨",
        "门店配送"
      ]
    },
    {
      "id": "front-fulfill",
      "scene": "supplychain",
      "title": "区域补货与前置仓履约",
      "path": [
        "regional",
        "front",
        "consumer"
      ],
      "summary": "区域库存补入近场库存，按当地订单拣配交付。",
      "guide": "先看区域补货，再看前置仓按新订单出库；两段可能属于不同任务。前置仓是近场库存节点，不是所有末端站点都存放销售库存。",
      "capabilities": [
        "区域补货与近场库存管理",
        "按订单拣选与当地配送"
      ],
      "sources": [
        "frontPlan",
        "warehouseOps",
        "samecity"
      ],
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "settlement": {
        "basis": "公开资料未给出该服务的统一计费表。按实际项目核对收集、运输、库存及作业是否分别计费。",
        "payment": "付款主体、对账项目与付款时点按所选服务合同确认；不推定统一现结或月结。",
        "sources": [
          "frontPlan",
          "warehouseOps",
          "samecity"
        ]
      },
      "segments": [
        "前置仓补货",
        "订单配送"
      ]
    },
    {
      "id": "store-fulfill",
      "scene": "supplychain",
      "title": "门店库存发货",
      "path": [
        "store",
        "station",
        "consumer"
      ],
      "summary": "从门店库存拣选线上订单，再交给配送资源。",
      "guide": "门店此时承担发货作业，不能把它仅理解为门店补货的终点。图示经过配送站点；可直送或经更多网络节点，按所选服务确认。",
      "capabilities": [
        "门店库存与线上订单衔接",
        "拣选包装、承运交接"
      ],
      "sources": [
        "storeFulfill",
        "omni",
        "upu"
      ],
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "settlement": {
        "basis": "公开资料未给出该服务的统一计费表。按实际项目核对收集、运输、库存及作业是否分别计费。",
        "payment": "付款主体、对账项目与付款时点按所选服务合同确认；不推定统一现结或月结。",
        "sources": [
          "storeFulfill",
          "omni",
          "upu"
        ]
      },
      "operationOverrides": {
        "store": "warehouseOut"
      },
      "segments": [
        "门店交运",
        "派送"
      ]
    },
    {
      "id": "store-pickup",
      "scene": "supplychain",
      "title": "门店订单 / 到店自提",
      "path": [
        "regional",
        "store"
      ],
      "summary": "向门店补货后，按订单预留库存供客户领取。",
      "guide": "补货到店与客户自提是不同阶段。店内核验后向客户交货；顾客自行到店的出行不画成物流承运线。",
      "capabilities": [
        "门店补货与库存预留",
        "订单备货和核验领取"
      ],
      "sources": [
        "storeFulfill",
        "omni",
        "gs1"
      ],
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "settlement": {
        "basis": "公开资料未给出该服务的统一计费表。按实际项目核对收集、运输、库存及作业是否分别计费。",
        "payment": "付款主体、对账项目与付款时点按所选服务合同确认；不推定统一现结或月结。",
        "sources": [
          "storeFulfill",
          "omni",
          "gs1"
        ]
      },
      "operationOverrides": {
        "store": "storePickup"
      },
      "segments": [
        "门店补货"
      ]
    },
    {
      "id": "crossdock",
      "title": "越库集配",
      "path": [
        "factory",
        "crossdock",
        "store"
      ],
      "summary": "入站货物在集配点衔接出站，减少中间储存。",
      "guide": "越库仍有收货、复核和转装作业；不要把没有长期库存理解为货物无需经过设施。",
      "sources": [
        "cross",
        "gs1"
      ],
      "scene": "supplychain",
      "capabilities": [
        "入出站集拼与分流",
        "衔接配送，减少库存停留"
      ],
      "settlement": {
        "basis": "公开服务介绍未给出本模式统一价目表；需核对所选项目报价，不能直接套用其他企业的仓储或配送价格。",
        "payment": "公开资料未给出本模式统一付款方与结算周期。询价时确认谁签约付款、哪些作业单独计费、如何对账及何时付款。",
        "sources": [
          "cross",
          "gs1",
          "warehousequote"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "segments": [
        "集货运输",
        "集配发运"
      ]
    },
    {
      "id": "cold",
      "title": "冷链仓配",
      "path": [
        "cold",
        "station",
        "consumer"
      ],
      "summary": "以顺丰冷运仓储说明温控仓储与配送的衔接。",
      "guide": "温控是贯穿作业与运输的服务条件；具体温区、包装和追溯范围按所选产品确认。",
      "sources": [
        "cold"
      ],
      "scene": "supplychain",
      "capabilities": [
        "多温区储存、分拣和包装",
        "温控配送与温度追溯"
      ],
      "settlement": {
        "basis": "顺丰冷运仓储按客户需求项目报价，公开列出出入库、存储、分拣和包装等收费项目。",
        "payment": "该顺丰产品仅限月结客户，需签订物流及物流辅助服务主合同和冷运仓储服务条款；具体账单及付款日期按合同确认。",
        "sources": [
          "cold"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "resourceRoles": {
        "station": "温控配送承运方"
      },
      "segments": [
        "温控配送",
        "温控派送"
      ]
    },
    {
      "id": "inbound",
      "title": "生产入厂与线边供料",
      "path": [
        "supplier",
        "material",
        "factory"
      ],
      "summary": "围绕生产物料到厂和供料组织作业。",
      "guide": "图示采用原料库中转到生产地点的结构，实际也可直达工厂；以生产计划与收货接口判断服务范围。",
      "sources": [
        "manufacture",
        "gs1"
      ],
      "scene": "supplychain",
      "capabilities": [
        "供应商协调与运输计划",
        "物料到达可视与生产需求衔接"
      ],
      "settlement": {
        "basis": "公开服务介绍未给出本模式统一价目表；需核对所选项目报价，不能直接套用其他企业的仓储或配送价格。",
        "payment": "公开资料未给出本模式统一付款方与结算周期。询价时确认谁签约付款、哪些作业单独计费、如何对账及何时付款。",
        "sources": [
          "manufacture",
          "gs1"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "segments": [
        "物料入库运输",
        "生产供料"
      ]
    },
    {
      "id": "milkrun",
      "title": "循环取货 / Milk run",
      "path": [
        "supplier",
        "supplier2",
        "material"
      ],
      "summary": "用车辆行程说明多供应商取货组织。",
      "guide": "这里序号表示车辆取货行程，供应商 A 的单件物料不会再进入供应商 B 生产设施。",
      "sources": [
        "manufacture",
        "milkrun"
      ],
      "scene": "supplychain",
      "capabilities": [
        "供应商取货衔接",
        "车辆与取货路线组织"
      ],
      "settlement": {
        "basis": "公开服务介绍未给出本模式统一价目表；需核对所选项目报价，不能直接套用其他企业的仓储或配送价格。",
        "payment": "公开资料未给出本模式统一付款方与结算周期。询价时确认谁签约付款、哪些作业单独计费、如何对账及何时付款。",
        "sources": [
          "manufacture",
          "milkrun"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "delay"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "vehicle": true,
      "segments": [
        "前往下一取货点",
        "集货送厂"
      ]
    },
    {
      "id": "returns",
      "title": "跨区域退货 / 网络返运",
      "path": [
        "consumer",
        "station",
        "sortB",
        "sortA",
        "returns"
      ],
      "summary": "组织退回货物接收与后续退货处理。",
      "guide": "本例退货经寄出侧与接收侧两个分拣中心返运至指定处理中心。分拣中心数量由距离、路由和承运网络决定；短距可直接退回，多级网络也可能经过更多中转点。物流接收、质量处置与退款分别确认。",
      "sources": [
        "dhl",
        "gs1",
        "returnsCircular"
      ],
      "scene": "supplychain",
      "capabilities": [
        "退货物流与接收管理",
        "按业务指令核验、分流"
      ],
      "settlement": {
        "basis": "公开服务介绍未给出本模式统一价目表；需核对所选项目报价，不能直接套用其他企业的仓储或配送价格。",
        "payment": "公开资料未给出本模式统一付款方与结算周期。询价时确认谁签约付款、哪些作业单独计费、如何对账及何时付款。",
        "sources": [
          "dhl",
          "gs1"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy",
        "restock",
        "vendorReturn"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "reverse": true,
      "labels": {
        "sortB": "退货始发分拣中心",
        "sortA": "退货接收侧分拣中心",
        "consumer": "退货交件地址"
      },
      "resourceRoles": {
        "consumer": "退货交出方"
      },
      "segments": [
        "退货揽收",
        "退件集运",
        "返运干线",
        "退货交接"
      ]
    },
    {
      "id": "returns-direct",
      "scene": "supplychain",
      "title": "本地退货 / 直接退回",
      "path": [
        "consumer",
        "returns"
      ],
      "summary": "按已受理退货委托，直接收集至指定接收地点。",
      "guide": "这是可直接取送的本地退货示例，不必经过分拣中心。接收地址可为商家、仓库或指定处理中心，本图采用处理中心；范围和资格按所选服务确认。",
      "capabilities": [
        "退货收集与直接运输",
        "核验、分类和处置衔接"
      ],
      "sources": [
        "returnsCircular",
        "samecity"
      ],
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "settlement": {
        "basis": "公开资料未给出该服务的统一计费表。按实际项目核对收集、运输、库存及作业是否分别计费。",
        "payment": "付款主体、对账项目与付款时点按所选服务合同确认；不推定统一现结或月结。",
        "sources": [
          "returnsCircular",
          "samecity"
        ]
      },
      "reverse": true,
      "resourceRoles": {
        "consumer": "退货交出方"
      },
      "labels": {
        "consumer": "退货交件地址"
      },
      "segments": [
        "本地退货取送"
      ]
    },
    {
      "id": "service",
      "title": "备件与维修服务物流",
      "path": [
        "consumer",
        "station",
        "sortB",
        "sortA",
        "repair"
      ],
      "summary": "待修品返运与备件供应协同服务。",
      "guide": "蓝线是配件库的独立货流；维修完成后的寄回另行组织，不把配件和待修品合成一票。",
      "sources": [
        "parts",
        "returnsCircular"
      ],
      "scene": "supplychain",
      "capabilities": [
        "备件供应、正逆向运输",
        "维修与部件回收衔接"
      ],
      "settlement": {
        "basis": "公开服务介绍未给出本模式统一价目表；需核对所选项目报价，不能直接套用其他企业的仓储或配送价格。",
        "payment": "公开资料未给出本模式统一付款方与结算周期。询价时确认谁签约付款、哪些作业单独计费、如何对账及何时付款。",
        "sources": [
          "parts"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy",
        "repairedReturn"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "reverse": true,
      "aux": [
        [
          "parts",
          "repair"
        ]
      ],
      "labels": {
        "sortB": "送修始发分拣中心",
        "sortA": "送修接收侧分拣中心",
        "consumer": "送修交件地址"
      },
      "resourceRoles": {
        "consumer": "送修交出方"
      },
      "segments": [
        "送修揽收",
        "送修集运",
        "送修干线",
        "送修交接"
      ]
    },
    {
      "id": "recovery-flow",
      "scene": "supplychain",
      "title": "废旧家电家具回收",
      "path": [
        "consumer",
        "recycle"
      ],
      "summary": "按约定收集废旧家电家具，送至相应回收集散或处理设施。",
      "guide": "仅示意废旧家电家具：收集、分类储运与规范处理可以由不同设施承担。实际去向、处理资格及作业要求按品类确认，不套用为所有废物的回收流程。",
      "capabilities": [
        "预约收集与分类储运",
        "规范处理资源衔接"
      ],
      "sources": [
        "recovery"
      ],
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "回收服务组织方",
      "settlement": {
        "basis": "公开资料未给出该服务的统一计费表。按实际项目核对收集、运输、库存及作业是否分别计费。",
        "payment": "付款主体、对账项目与付款时点按所选服务合同确认；不推定统一现结或月结。",
        "sources": [
          "recovery"
        ]
      },
      "reverse": true,
      "operationOverrides": {
        "consumer": "recoveryOut"
      },
      "resourceRoles": {
        "consumer": "物品交出方",
        "recycle": "回收集散 / 处理方"
      },
      "segments": [
        "回收取送"
      ]
    },
    {
      "id": "rti-flow",
      "scene": "supplychain",
      "title": "托盘 / 周转箱回收再用",
      "path": [
        "business",
        "reuse",
        "factory"
      ],
      "summary": "回收可重复使用的运输载具，登记分类后再投入周转。",
      "guide": "货流对象是托盘、周转箱等载具。回收、整理和再次分配可为不同任务；载具权属、押金或租赁收费不能由商品退货规则推导。",
      "capabilities": [
        "载具标识、回收与分类",
        "状态跟踪与周转分配"
      ],
      "sources": [
        "rti",
        "gs1"
      ],
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "载具周转组织方",
      "settlement": {
        "basis": "公开资料未给出该服务的统一计费表。按实际项目核对收集、运输、库存及作业是否分别计费。",
        "payment": "付款主体、对账项目与付款时点按所选服务合同确认；不推定统一现结或月结。",
        "sources": [
          "rti",
          "gs1"
        ]
      },
      "operationOverrides": {
        "business": "rtiOut",
        "factory": "rtiIn"
      },
      "resourceRoles": {
        "business": "载具使用 / 交出方",
        "factory": "载具接收使用方"
      },
      "segments": [
        "载具回收",
        "载具再分配"
      ]
    },
    {
      "id": "overseas",
      "title": "海外仓备货与当地履约",
      "path": [
        "factory",
        "portA",
        "portB",
        "overseas",
        "foreignStation",
        "foreignConsumer"
      ],
      "summary": "批量运输、海外库存与当地订单履约分阶段衔接。",
      "guide": "海运仅是本图的头程示例；到海外仓备货后，需要新的订单指令才进入当地履约阶段。",
      "sources": [
        "cainiao",
        "ocean"
      ],
      "scene": "supplychain",
      "capabilities": [
        "海外仓储与库存分配",
        "当地配送与逆向服务"
      ],
      "settlement": {
        "basis": "公开服务介绍未给出本模式统一价目表；需核对所选项目报价，不能直接套用其他企业的仓储或配送价格。",
        "payment": "公开资料未给出本模式统一付款方与结算周期。询价时确认谁签约付款、哪些作业单独计费、如何对账及何时付款。",
        "sources": [
          "cainiao",
          "ocean"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy",
        "customsHold"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "crossborder": true,
      "customsNode": "portB",
      "segments": [
        "出运集港",
        "跨境海运",
        "到仓运输",
        "出库配送",
        "当地派送"
      ]
    },
    {
      "id": "bonded",
      "title": "保税仓配 / 进口履约",
      "path": [
        "foreignFactory",
        "portB",
        "portA",
        "bonded",
        "sortB",
        "station",
        "consumer"
      ],
      "summary": "展示进口备货与保税库存订单出库的衔接。",
      "guide": "进口备货与订单出区分别办理相应手续；本图合并展示服务范围，不表示入仓后自动放行或直接发给消费者。",
      "sources": [
        "cainiao",
        "customs"
      ],
      "scene": "supplychain",
      "capabilities": [
        "保税仓储与进口货流衔接",
        "按监管要求组织订单履约"
      ],
      "settlement": {
        "basis": "公开服务介绍未给出本模式统一价目表；需核对所选项目报价，不能直接套用其他企业的仓储或配送价格。",
        "payment": "公开资料未给出本模式统一付款方与结算周期。询价时确认谁签约付款、哪些作业单独计费、如何对账及何时付款。",
        "sources": [
          "cainiao",
          "customs"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy",
        "customsHold"
      ],
      "resourceCoordinator": "供应链服务商 / 企业物流团队",
      "crossborder": true,
      "customsNode": "portA",
      "segments": [
        "出运集港",
        "跨境海运",
        "保税入仓运输",
        "订单出库集运",
        "末端转运",
        "派送"
      ]
    },
    {
      "id": "domestic",
      "title": "本土快递 / 公路网络",
      "path": [
        "merchant",
        "origin",
        "sortA",
        "sortB",
        "station",
        "consumer"
      ],
      "summary": "揽收、分拣、运输与派送构成一票寄递服务。",
      "guide": "本例用公路干线衔接寄出侧与到达侧分拣。快件也可能采用航空或其他运输方式，路由按产品与起讫地确认；两个分拣中心仅是跨区域教学路径。",
      "sources": [
        "upu",
        "sfpay"
      ],
      "scene": "express",
      "capabilities": [
        "揽收与路由分流",
        "交接追踪与末端交付"
      ],
      "settlement": {
        "basis": "运费按所选承运产品查询；本模式不设置统一重量折算或统一首续重。",
        "payment": "顺丰企业平台的寄件例子支持寄付现结、寄付月结和到付；是否可用以产品、账号和下单页面为准。",
        "sources": [
          "sfpay"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "intercept",
        "interceptFail",
        "reroute",
        "redelivery",
        "refuse",
        "pickup",
        "unclaimed",
        "discrepancy"
      ],
      "resourceCoordinator": "快递 / 快运服务商",
      "parcel": true,
      "segments": [
        "揽收",
        "集货转运",
        "公路干线",
        "末端转运",
        "派送"
      ]
    },
    {
      "id": "domestic-air",
      "scene": "express",
      "title": "本土快递 / 航空干线",
      "path": [
        "merchant",
        "origin",
        "sortA",
        "airA",
        "airC",
        "sortB",
        "station",
        "consumer"
      ],
      "summary": "寄递网络以境内航班衔接两侧地面分拣与派送。",
      "guide": "顺丰航空官方说明航空基地与本地分拣网络衔接。本图用一段境内飞行示意，实际可能经航空枢纽中转；本土快递产品不一定每票走航空。",
      "capabilities": [
        "收寄、航空货站与境内飞行",
        "到达分拣与末端派送"
      ],
      "sources": [
        "sfAirHubs",
        "accDomestic",
        "upu"
      ],
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "intercept",
        "interceptFail",
        "reroute",
        "redelivery",
        "refuse",
        "pickup",
        "unclaimed",
        "discrepancy"
      ],
      "resourceCoordinator": "快递 / 快运服务商",
      "settlement": {
        "basis": "按所选快递产品的重量、体积与区域报价核对运费；不把航空公司的机场到机场运价套用为门到门快递价。",
        "payment": "顺丰企业平台的寄件例子支持寄付现结、寄付月结和到付；是否可用以产品、账号和下单页面为准。",
        "sources": [
          "sfAirHubs",
          "accDomestic",
          "upu"
        ]
      },
      "operationOverrides": {
        "airC": "airDomesticIn"
      },
      "labels": {
        "airA": "境内始发航空货站"
      },
      "segments": [
        "揽收",
        "集货转运",
        "航空交运",
        "境内空运",
        "到达转运",
        "末端转运",
        "派送"
      ]
    },
    {
      "id": "ltl",
      "title": "本土快运 / 零担网络",
      "path": [
        "merchant",
        "freightA",
        "freightB",
        "business"
      ],
      "summary": "大件与批量货物通过集拼、干线和拆零交付。",
      "guide": "零担是承运产品的组织方式；实际中转数量、是否送到库位等需核对具体服务。",
      "sources": [
        "sfltl",
        "gs1"
      ],
      "scene": "express",
      "capabilities": [
        "重货与批量件托运",
        "场站集拼、运输及企业交接"
      ],
      "settlement": {
        "basis": "顺丰标准零担公开页采用单公斤报价；实际计费重量、最低收费和附加作业需核对报价，不能推广为所有零担产品。",
        "payment": "该产品页未公开统一付款方及结算周期，需在托运报价或合同中确认。",
        "sources": [
          "sfltl"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "快递 / 快运服务商",
      "resourceRoles": {
        "freightA": "快运场站运营方",
        "freightB": "快运场站运营方"
      },
      "segments": [
        "提货集运",
        "零担干线",
        "到货配送"
      ]
    },
    {
      "id": "local",
      "title": "本土同城 / 点到点配送",
      "path": [
        "person",
        "consumer"
      ],
      "summary": "以顺丰同城急送说明点到点交付服务。",
      "guide": "图示没有分拣中心，是该点到点模式的路径选择；不据此推导所有同城产品都直送。",
      "sources": [
        "samecity"
      ],
      "scene": "express",
      "capabilities": [
        "同城取送与直接交接"
      ],
      "settlement": {
        "basis": "公开介绍页未给出统一费率，实际费用核对下单报价。",
        "payment": "付款方与付款时点按所选服务确认；不将快递企业月结选项自动套用到同城订单。",
        "sources": [
          "samecity"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "delay"
      ],
      "resourceCoordinator": "快递 / 快运服务商",
      "segments": [
        "同城取送"
      ]
    },
    {
      "id": "cross-express",
      "title": "跨境快递 / 航空寄递",
      "path": [
        "merchant",
        "origin",
        "sortA",
        "airA",
        "airB",
        "foreignStation",
        "foreignConsumer"
      ],
      "summary": "以顺丰国际标快说明门到门跨境快件。",
      "guide": "航空货站、清关作业和当地配送分开理解；路由及可选服务按起讫地和承运产品确认。",
      "sources": [
        "sfintl",
        "upu"
      ],
      "scene": "express",
      "capabilities": [
        "收寄、中转和航空运输",
        "清关衔接与目的侧派送"
      ],
      "settlement": {
        "basis": "顺丰国际标快按实重与体积重较大者计费；公开产品页另列适用附加服务，核对当地费表。",
        "payment": "付款方、币种和账期核对国际产品下单页面或合同；不直接套用本土寄件规则。",
        "sources": [
          "sfintl"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy",
        "customsHold"
      ],
      "resourceCoordinator": "快递 / 快运服务商",
      "crossborder": true,
      "customsNode": "airB",
      "segments": [
        "揽收",
        "集货转运",
        "航空交运",
        "跨境空运",
        "到达转运",
        "当地派送"
      ]
    },
    {
      "id": "road-ftl",
      "title": "陆运代理 / 整车",
      "path": [
        "factory",
        "business"
      ],
      "summary": "货代或运输组织方协调道路承运资源完成运输。",
      "guide": "地图显示货物路线；服务组织方与实际车辆承运方可能是不同主体。",
      "sources": [
        "fiata",
        "inland",
        "dgfmodel"
      ],
      "scene": "forwarding",
      "capabilities": [
        "组织道路承运资源",
        "约定提货与到达交接"
      ],
      "settlement": {
        "basis": "整车询价需说明线路、车型、货物与装卸条件；公开资料没有本模式统一计价表。",
        "payment": "付款主体、币种与账期核对当地报价和运输合同。资料中的比利时即时付款条款仅是地区案例，不能视为统一月结或现结规则。",
        "sources": [
          "inland",
          "dgfterms"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "货运代理服务商",
      "segments": [
        "整车直运"
      ]
    },
    {
      "id": "road-ltl",
      "title": "陆运代理 / 拼载",
      "path": [
        "merchant",
        "freightA",
        "freightB",
        "business"
      ],
      "summary": "代理组织集拼运输资源及两端交接。",
      "guide": "与快运产品比较时看谁接受服务委托、谁提供实际运输；同一设施可以参与不同服务组织。",
      "sources": [
        "fiata",
        "inland"
      ],
      "scene": "forwarding",
      "capabilities": [
        "承运资源组合",
        "集拼运输与前后程衔接"
      ],
      "settlement": {
        "basis": "公路轻泡货折算因地区与承运人变化；按询价确认计费重量、线路与附加作业。",
        "payment": "付款主体、币种与账期核对当地报价和运输合同。资料中的比利时即时付款条款仅是地区案例，不能视为统一月结或现结规则。",
        "sources": [
          "weight",
          "dgfterms"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "货运代理服务商",
      "segments": [
        "提货集运",
        "拼载干线",
        "到货配送"
      ]
    },
    {
      "id": "air-domestic",
      "scene": "forwarding",
      "title": "国内空运代理",
      "path": [
        "merchant",
        "airA",
        "airC",
        "business"
      ],
      "summary": "组织境内航空货站和航班，衔接提货与到达交付。",
      "guide": "国内航空货运与国际空运分别展示；境内到达货站核对接收和提货条件，不添加进口清关。航空干线之外的地面提送范围按委托确认。",
      "capabilities": [
        "境内航空承运人与货站衔接",
        "地面提送与运输资料管理"
      ],
      "sources": [
        "accDomestic",
        "sfAirHubs",
        "fiata"
      ],
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "货运代理服务商",
      "settlement": {
        "basis": "运费及货站作业、地面提送费用按实际承运人和代理报价核对；不使用国际航空示例的体积折算作为国内统一规则。",
        "payment": "付款主体、对账项目与付款时点按所选服务合同确认；不推定统一现结或月结。",
        "sources": [
          "accDomestic",
          "sfAirHubs",
          "fiata"
        ]
      },
      "operationOverrides": {
        "airC": "airDomesticIn"
      },
      "labels": {
        "airA": "境内始发航空货站"
      },
      "segments": [
        "航空提货",
        "境内空运",
        "到货配送"
      ]
    },
    {
      "id": "air",
      "title": "国际空运代理 / 出口",
      "path": [
        "merchant",
        "airA",
        "airB",
        "foreignBusiness"
      ],
      "summary": "货代衔接提货、航空货站、航班与目的侧交付。",
      "guide": "航空公司提供飞行运力，货代组织服务与地面衔接；实际航线可中转，本图采用一段飞行示例。",
      "sources": [
        "air",
        "fiata"
      ],
      "scene": "forwarding",
      "capabilities": [
        "航空承运资源与货站交接",
        "清关及门到门服务可选衔接"
      ],
      "settlement": {
        "basis": "DHL 计费说明比较实际重量与体积重量；适用折算、运价及附加服务核对报价。",
        "payment": "付款主体、币种与账期核对当地报价和运输合同。资料中的比利时即时付款条款仅是地区案例，不能视为统一月结或现结规则。",
        "sources": [
          "weight",
          "freightquote",
          "dgfterms"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy",
        "customsHold"
      ],
      "resourceCoordinator": "货运代理服务商",
      "crossborder": true,
      "customsNode": "airB",
      "segments": [
        "航空提货",
        "跨境空运",
        "目的地配送"
      ]
    },
    {
      "id": "air-import",
      "scene": "forwarding",
      "title": "国际空运代理 / 进口",
      "path": [
        "foreignFactory",
        "airB",
        "airA",
        "business"
      ],
      "summary": "从境外起运，经境内航空货站完成进口衔接和交付。",
      "guide": "方向与出口相反：境外货站起运，境内货站到达。按进口要求完成申报与适用监管后安排提货，不把运输到达等同于已放行。",
      "capabilities": [
        "进口航空运输与监管衔接",
        "境内提货和后续交付"
      ],
      "sources": [
        "air",
        "airDocs",
        "fiata"
      ],
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy",
        "customsHold"
      ],
      "resourceCoordinator": "货运代理服务商",
      "settlement": {
        "basis": "按所选运输方案核对干线运费、货站或港站作业、适用监管代理与地面提送费用；是否包含附加费及其计费口径以报价为准。",
        "payment": "付款主体、对账项目与付款时点按所选服务合同确认；不推定统一现结或月结。",
        "sources": [
          "air",
          "airDocs",
          "fiata"
        ]
      },
      "crossborder": true,
      "customsNode": "airA",
      "labels": {
        "airB": "境外始发航空货站",
        "airA": "境内到达航空货站"
      },
      "segments": [
        "航空提货",
        "跨境空运",
        "进口提送"
      ]
    },
    {
      "id": "ocean",
      "title": "国际海运代理 / 出口整箱",
      "path": [
        "factory",
        "portA",
        "portB",
        "foreignBusiness"
      ],
      "summary": "整箱运输衔接两端道路运输与海港作业。",
      "guide": "整箱与拼箱的作业和计费不同；箱装货物不需要走本图的独立拼箱作业点。",
      "sources": [
        "ocean",
        "fiata"
      ],
      "scene": "forwarding",
      "capabilities": [
        "整箱海运组织",
        "门到门运输与可选清关服务"
      ],
      "settlement": {
        "basis": "DHL 计费说明中，FCL 海运按箱计费；前后程、当地操作与附加服务是否包含需核对报价。",
        "payment": "付款主体、币种与账期核对当地报价和运输合同。资料中的比利时即时付款条款仅是地区案例，不能视为统一月结或现结规则。",
        "sources": [
          "weight",
          "freightquote",
          "dgfterms"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy",
        "customsHold"
      ],
      "resourceCoordinator": "货运代理服务商",
      "crossborder": true,
      "customsNode": "portB",
      "segments": [
        "出运集港",
        "跨境海运",
        "目的地提送"
      ]
    },
    {
      "id": "ocean-import",
      "scene": "forwarding",
      "title": "国际海运代理 / 进口整箱",
      "path": [
        "foreignFactory",
        "portB",
        "portA",
        "business"
      ],
      "summary": "境外装船运输，境内港口卸船后衔接提箱交付。",
      "guide": "进口卸船、监管放行和提箱交接分别确认；目的港费用与内陆提送是否包含在报价中需逐项核对。",
      "capabilities": [
        "进口整箱运输与口岸衔接",
        "卸船提箱与内陆交付"
      ],
      "sources": [
        "ocean",
        "fiata"
      ],
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy",
        "customsHold"
      ],
      "resourceCoordinator": "货运代理服务商",
      "settlement": {
        "basis": "按所选运输方案核对干线运费、货站或港站作业、适用监管代理与地面提送费用；是否包含附加费及其计费口径以报价为准。",
        "payment": "付款主体、对账项目与付款时点按所选服务合同确认；不推定统一现结或月结。",
        "sources": [
          "ocean",
          "fiata"
        ]
      },
      "crossborder": true,
      "customsNode": "portA",
      "labels": {
        "portB": "境外始发海港",
        "portA": "境内到达海港"
      },
      "segments": [
        "出运集港",
        "跨境海运",
        "进口提送"
      ]
    },
    {
      "id": "ocean-lcl",
      "title": "国际海运代理 / 出口拼箱",
      "path": [
        "merchant",
        "cfsA",
        "portA",
        "portB",
        "cfsB",
        "foreignBusiness"
      ],
      "summary": "小批量货物集拼装箱，到达后拆箱分拨。",
      "guide": "拼箱作业点与海港分开显示；实际可合设。只显示本票货物，不画其他客户的货物去向。",
      "sources": [
        "lcl",
        "fiata"
      ],
      "scene": "forwarding",
      "capabilities": [
        "拼箱与拆箱作业组织",
        "海运及两端交接衔接"
      ],
      "settlement": {
        "basis": "DHL 拼箱产品按立方米或吨报价；核对适用计费重量、集拼拆箱和当地费用是否包含。",
        "payment": "付款主体、币种与账期核对当地报价和运输合同。资料中的比利时即时付款条款仅是地区案例，不能视为统一月结或现结规则。",
        "sources": [
          "lcl",
          "weight",
          "dgfterms"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy",
        "customsHold"
      ],
      "resourceCoordinator": "货运代理服务商",
      "crossborder": true,
      "customsNode": "portB",
      "segments": [
        "拼箱集货",
        "集港短驳",
        "跨境海运",
        "提箱短驳",
        "拆箱后配送"
      ]
    },
    {
      "id": "ocean-domestic",
      "scene": "forwarding",
      "title": "内贸沿海运输代理",
      "path": [
        "factory",
        "portA",
        "portC",
        "business"
      ],
      "summary": "境内沿海运输衔接两端港口和陆路提送。",
      "guide": "采用中远海控公开内贸业务归纳结构。两端均为境内港口，不能把沿海运输自动解释为跨境；内贸单证和接收要求按业务办理。",
      "capabilities": [
        "沿海船舶与港口资源衔接",
        "两端陆路提送与交接"
      ],
      "sources": [
        "coscoDomestic",
        "fiata"
      ],
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "货运代理服务商",
      "settlement": {
        "basis": "按所选运输方案核对干线运费、货站或港站作业、适用监管代理与地面提送费用；是否包含附加费及其计费口径以报价为准。",
        "payment": "付款主体、对账项目与付款时点按所选服务合同确认；不推定统一现结或月结。",
        "sources": [
          "coscoDomestic",
          "fiata"
        ]
      },
      "operationOverrides": {
        "portC": "seaDomesticIn"
      },
      "labels": {
        "portA": "境内始发海港"
      },
      "segments": [
        "出运集港",
        "沿海运输",
        "到港提送"
      ]
    },
    {
      "id": "multimodal",
      "title": "多式联运 / 公路—铁路",
      "path": [
        "factory",
        "railA",
        "railB",
        "business"
      ],
      "summary": "一个服务方案衔接道路前后程与铁路干线。",
      "guide": "联运要同时看运输方式衔接和服务责任范围；本图是结构示例，不指定真实国家、线路或统一承运责任。",
      "sources": [
        "rail",
        "fiata"
      ],
      "scene": "forwarding",
      "capabilities": [
        "铁路运输与道路接驳",
        "场站换装及状态追踪"
      ],
      "settlement": {
        "basis": "铁路及道路接驳分别核对所选方案的计费口径和报价覆盖，不使用统一折算系数。",
        "payment": "付款主体、币种与账期核对当地报价和运输合同。资料中的比利时即时付款条款仅是地区案例，不能视为统一月结或现结规则。",
        "sources": [
          "rail",
          "weight",
          "dgfterms"
        ]
      },
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy"
      ],
      "resourceCoordinator": "货运代理服务商",
      "segments": [
        "铁路接驳",
        "铁路干线",
        "到站接驳"
      ]
    },
    {
      "id": "sea-rail",
      "scene": "forwarding",
      "title": "多式联运 / 海铁衔接",
      "path": [
        "factory",
        "railA",
        "railB",
        "portA",
        "portB",
        "foreignBusiness"
      ],
      "summary": "铁路集运衔接出运海港、海运干线和目的地交付。",
      "guide": "中远海控公开资料包含海铁联运通道。本图归纳铁路到港后衔接海运的结构；港站可合设或需短驳，责任范围以实际合同确认。",
      "capabilities": [
        "铁路与海运衔接",
        "港站短驳、箱货交接与目的地提送"
      ],
      "sources": [
        "coscoDomestic",
        "inland",
        "fiata"
      ],
      "scenarios": [
        "normal",
        "cancel",
        "damage",
        "delay",
        "discrepancy",
        "customsHold"
      ],
      "resourceCoordinator": "货运代理服务商",
      "settlement": {
        "basis": "按所选运输方案核对干线运费、货站或港站作业、适用监管代理与地面提送费用；是否包含附加费及其计费口径以报价为准。",
        "payment": "付款主体、对账项目与付款时点按所选服务合同确认；不推定统一现结或月结。",
        "sources": [
          "coscoDomestic",
          "inland",
          "fiata"
        ]
      },
      "crossborder": true,
      "customsNode": "portB",
      "segments": [
        "铁路接驳",
        "铁路集运",
        "港站衔接",
        "跨境海运",
        "目的地提送"
      ]
    }
  ],
  "scenes": [
    {
      "id": "supplychain",
      "title": "供应链",
      "sub": "仓储、履约、生产与逆向服务",
      "intro": "从库存与业务作业出发，比较仓配、店配、入厂和售后服务。先确认是否需要管理库存，再看仓内作业与运输如何衔接。"
    },
    {
      "id": "express",
      "title": "快递快运",
      "sub": "本土快递、零担、同城与跨境寄递",
      "intro": "从一票寄递或托运服务出发，比较揽收、网络运输和交付。快递与快运的产品范围、计费和可选服务需分别确认。"
    },
    {
      "id": "forwarding",
      "title": "货代",
      "sub": "陆运、空运、海运与多式联运",
      "intro": "从运输委托出发，理解货代怎样组织承运人、场站和清关等资源。货代是服务组织方，图上的节点表示实物经过的地点。"
    }
  ],
  "operationProfiles": {
    "ship": {
      "steps": [
        "按发运指令备货",
        "核对货物、包装与标识",
        "装载交接，记录发运"
      ],
      "sources": [
        "gs1",
        "warehouseOps"
      ]
    },
    "receive": {
      "steps": [
        "核对来货与交接资料",
        "检查数量、包装与差异",
        "确认接收，登记结果"
      ],
      "sources": [
        "gs1"
      ]
    },
    "warehouseIn": {
      "steps": [
        "核对来货，登记收货",
        "按要求验收、确认状态",
        "合格货上架，更新库存"
      ],
      "sources": [
        "warehouseOps",
        "dhl"
      ]
    },
    "warehouseOut": {
      "steps": [
        "按指令拣货",
        "复核、包装并标识",
        "出库交接，更新库存"
      ],
      "sources": [
        "warehouseOps",
        "dhl"
      ]
    },
    "warehouseThrough": {
      "steps": [
        "核验收货、登记上架",
        "按出库指令拣货、复核",
        "包装交接，更新库存"
      ],
      "sources": [
        "warehouseOps",
        "dhl"
      ]
    },
    "material": {
      "steps": [
        "核验物料、登记入库",
        "按库位存放、维护库存",
        "按领料指令备料交接"
      ],
      "sources": [
        "warehouseOps",
        "manufacture"
      ]
    },
    "productionIn": {
      "steps": [
        "核对到厂物料",
        "按要求验收、登记接收",
        "按生产计划衔接领用"
      ],
      "sources": [
        "gs1",
        "manufacture"
      ]
    },
    "coldOut": {
      "steps": [
        "按货品温控要求拣货",
        "复核、包装并记录温控",
        "按温控要求交接发运"
      ],
      "sources": [
        "cold"
      ]
    },
    "coldIn": {
      "steps": [
        "核验货物与温控记录",
        "按货品要求验收入库",
        "温控储存、记录库存"
      ],
      "sources": [
        "cold"
      ]
    },
    "coldThrough": {
      "steps": [
        "核验收货与温控要求",
        "温控储存、按指令拣货",
        "复核包装、温控交接"
      ],
      "sources": [
        "cold"
      ]
    },
    "postalOrigin": {
      "steps": [
        "核对寄件信息与货物",
        "登记收寄、归集快件",
        "交接至下一处理点"
      ],
      "sources": [
        "upu"
      ]
    },
    "sort": {
      "steps": [
        "登记接收、核对快件",
        "按下一目的节点分拣",
        "归集交接、记录发运"
      ],
      "sources": [
        "upu"
      ]
    },
    "delivery": {
      "steps": [
        "核对到件、分派任务",
        "按收件地址组织派送",
        "记录交付或未妥投结果"
      ],
      "sources": [
        "upu",
        "fedex"
      ]
    },
    "reverseStation": {
      "steps": [
        "核对退回指令与快件",
        "登记接收、按去向归集",
        "交接返运、更新状态"
      ],
      "sources": [
        "upu",
        "refusal"
      ]
    },
    "reschedule": {
      "steps": [
        "核对未妥投快件",
        "确认后续派送安排",
        "交接再投、更新状态"
      ],
      "sources": [
        "fedex"
      ]
    },
    "pickup": {
      "steps": [
        "登记到点、暂存快件",
        "通知取件，核验领取信息",
        "交件并登记领取结果"
      ],
      "sources": [
        "hold"
      ]
    },
    "unclaimed": {
      "steps": [
        "登记到点、通知取件",
        "核查期限内未领取状态",
        "按服务指令交接退回"
      ],
      "sources": [
        "hold"
      ]
    },
    "homeShip": {
      "steps": [
        "核对已受理寄件委托",
        "准备物品与寄件资料",
        "按约定向承运方交件"
      ],
      "sources": [
        "upu",
        "parts"
      ]
    },
    "homeReceive": {
      "steps": [
        "按服务要求核验交付",
        "接收物品，确认交接",
        "承运方记录交付结果"
      ],
      "sources": [
        "upu"
      ]
    },
    "refuse": {
      "steps": [
        "交付时确认拒收",
        "记录拒收与交接结果",
        "按返运指令交回承运方"
      ],
      "sources": [
        "refusal"
      ]
    },
    "failedDelivery": {
      "steps": [
        "尝试按地址交付",
        "记录未妥投结果",
        "按服务安排交回站点"
      ],
      "sources": [
        "fedex"
      ]
    },
    "freightOut": {
      "steps": [
        "核验收货与托运资料",
        "按目的地集货、配载",
        "装车交接、记录发运"
      ],
      "sources": [
        "gs1",
        "sfltl"
      ]
    },
    "freightIn": {
      "steps": [
        "卸货接收、核对交接",
        "按交付去向分拨",
        "交接配送、记录发运"
      ],
      "sources": [
        "gs1",
        "sfltl"
      ]
    },
    "crossdock": {
      "steps": [
        "核对来货与分配指令",
        "按去向分流或集配",
        "装载交接，登记发运"
      ],
      "sources": [
        "gs1",
        "cross"
      ]
    },
    "cfsOut": {
      "steps": [
        "核验拼箱货与交接资料",
        "按拼箱安排集拼、装箱",
        "交接整箱至海港"
      ],
      "sources": [
        "lcl"
      ]
    },
    "cfsIn": {
      "steps": [
        "接箱、拆箱并核对货物",
        "按各票货物分拨",
        "满足提货条件后交接"
      ],
      "sources": [
        "lcl"
      ]
    },
    "seaOut": {
      "steps": [
        "核对进港箱货与资料",
        "满足装船条件后装船",
        "记录装船、衔接海运"
      ],
      "sources": [
        "ocean",
        "lcl"
      ]
    },
    "seaIn": {
      "steps": [
        "卸船、接收箱货",
        "核对放行与提货条件",
        "满足条件后提货交接"
      ],
      "sources": [
        "ocean",
        "lcl"
      ]
    },
    "airOut": {
      "steps": [
        "核对航空货物与资料",
        "完成适用检查、交接",
        "按航班安排装机发运"
      ],
      "sources": [
        "air",
        "airDocs"
      ]
    },
    "airIn": {
      "steps": [
        "卸机接货、核对交接",
        "核对放行与提货条件",
        "满足条件后提货交接"
      ],
      "sources": [
        "air",
        "airDocs"
      ]
    },
    "railOut": {
      "steps": [
        "核对受理货物与资料",
        "按运输安排装载交接",
        "记录发运、衔接铁路"
      ],
      "sources": [
        "rail"
      ]
    },
    "railIn": {
      "steps": [
        "卸载接货、核对交接",
        "按后续交付安排备货",
        "交接公路接驳或提货"
      ],
      "sources": [
        "rail"
      ]
    },
    "bonded": {
      "steps": [
        "按监管要求接收入库",
        "管理库存、按订单备货",
        "完成适用手续后出库"
      ],
      "sources": [
        "cainiao",
        "customs"
      ]
    },
    "returnProcess": {
      "steps": [
        "核对退回货与业务指令",
        "检查、分类并记录状态",
        "按确认指令衔接处置"
      ],
      "sources": [
        "dhl",
        "parts"
      ]
    },
    "repair": {
      "steps": [
        "核对送修货与服务委托",
        "按委托检测、安排维修",
        "记录处理结果与后续安排"
      ],
      "sources": [
        "parts"
      ]
    },
    "recovery": {
      "steps": [
        "核对回收品类与状态",
        "分类暂存、衔接评估",
        "按适用要求转交处理"
      ],
      "sources": [
        "recovery"
      ]
    },
    "reuse": {
      "steps": [
        "核对载具标识与数量",
        "记录状态、分类管理",
        "按周转安排交接再用"
      ],
      "sources": [
        "rti",
        "gs1"
      ]
    },
    "cancel": {
      "steps": [
        "核对货物尚未交承运方",
        "撤销相关发运任务",
        "记录取消、确认货物状态"
      ],
      "sources": [
        "gs1",
        "ups"
      ]
    },
    "damage": {
      "steps": [
        "登记货损与交接信息",
        "保留记录、核查情况",
        "等待确认后的处置指令"
      ],
      "sources": [
        "gs1"
      ]
    },
    "delay": {
      "steps": [
        "核查货物与运输状态",
        "确认延误及后续衔接",
        "等待或执行确认的安排"
      ],
      "sources": [
        "gs1"
      ]
    },
    "discrepancy": {
      "steps": [
        "核对实际到货与资料",
        "登记数量、包装等差异",
        "等待复核与接收决定"
      ],
      "sources": [
        "gs1"
      ]
    },
    "customsHold": {
      "steps": [
        "核对申报资料与当前状态",
        "按要求补资料或配合查验",
        "等待放行或其他处理决定"
      ],
      "sources": [
        "airDocs",
        "fiata"
      ]
    },
    "intercept": {
      "steps": [
        "核查并确认拦截已执行",
        "按确认的返运指令归集",
        "交接返运、更新状态"
      ],
      "sources": [
        "ups"
      ]
    },
    "milkrun": {
      "steps": [
        "准备本供应商待取货物",
        "按取货清单核对装载",
        "交接本批货物、记录取货"
      ],
      "sources": [
        "manufacture",
        "milkrun"
      ]
    },
    "airDomesticIn": {
      "steps": [
        "卸机接货、核对交接",
        "核对提货资料与接收条件",
        "满足条件后提货交接"
      ],
      "sources": [
        "accDomestic"
      ]
    },
    "seaDomesticIn": {
      "steps": [
        "卸船、接收箱货",
        "核对提箱资料与交接条件",
        "按内陆运输安排交接"
      ],
      "sources": [
        "coscoDomestic"
      ]
    },
    "storePickup": {
      "steps": [
        "核对补货、登记库存",
        "按订单预留、拣选备货",
        "核验领取信息后交货"
      ],
      "sources": [
        "storeFulfill",
        "warehouseOps"
      ]
    },
    "rtiOut": {
      "steps": [
        "核对待回收载具标识",
        "按数量与状态登记",
        "按回收安排交接载具"
      ],
      "sources": [
        "rti",
        "gs1"
      ]
    },
    "rtiIn": {
      "steps": [
        "核对载具标识与数量",
        "登记接收与载具状态",
        "按计划衔接再次周转"
      ],
      "sources": [
        "rti",
        "gs1"
      ]
    },
    "recoveryOut": {
      "steps": [
        "核对已受理回收委托",
        "准备约定品类的回收物",
        "按约定向回收方交接"
      ],
      "sources": [
        "recovery"
      ]
    },
    "repairShip": {
      "steps": [
        "核对维修结果与返送指令",
        "复核包装与收件信息",
        "按返送安排交接发运"
      ],
      "sources": [
        "parts"
      ]
    }
  }
};
