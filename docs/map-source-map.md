# 物流网络地图：依据、覆盖与路径映射

核对日期：2026-10-10。页面为 `map.html`；原 `index.html` 保留。

## 归纳方法

先按移动目的区分采购、生产供料、补货、销售履约和逆向服务，再将每次实物移动映射到功能地点。设施名称不是全国统一编码，企业服务资料也不被扩大为行业强制流程。

节点坐标仅用于固定布局，不表示真实地理距离。仓储库存节点、路由处理节点与交付节点分开解释；具体网络可以合设设施、增加层级或省略节点。信息委托、清关、支付和退款不是虚构的实物站点。

行业模式覆盖以 GS1、UPU 等机构资料为基础，结合 DHL、顺丰、菜鸟、亚马逊及京东公开服务与案例。京东稿件使用新浪转载且标注原发布方，未冒称直接访问官方原页。

## 资料清单

- **[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)**：第 3.5、3.6 节区分仓储与运输；第 4.2—4.5 节覆盖采购、工厂到仓、直送、越库及集货拆零。原文范围为 B2B。
- **[GS1 订单到收款](https://www.gs1.org/standards/edi/solutions)**：区分订单、发运通知、收货通知和结算等信息记录；单据名称与实物路径并非一一对应。
- **[万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System)**：邮政收寄、分拣、运输与投递功能；用于归纳寄递网络，不要求每票经过全部节点。
- **[DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)**：储存、拣选、包装、发运、退货管理及越库；支持自有、外包、共用仓的功能比较。
- **[DHL 越库说明](https://lot.dhl.com/how-cross-docking-is-transforming-last-mile-delivery-dynamics/)**：越库以快速衔接入站与出站货物为目标，减少中间储存；不等于没有卸货、分流或复核。
- **[DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf)**：全渠道共享库存、B2B 与 B2C 仓内履约。地图分别展示每笔订单的去向。
- **[DHL 服务物流](https://www.dhl.com/gb-en/home/supply-chain/solutions/service-logistics.html)**：备件、正逆向运输、维修与部件回收。备件供应与客户送修品是不同货物流。
- **[DHL 生产入厂物流](https://www.dhl.com/content/dam/dhl/global/csi/documents/pdf/csi-dhl-auto-mobility-inbound-to-manufacturing-domestic-transport.pdf.coredownload.pdf)**：供应商到工厂的运输、生产需求衔接。循环取货是车辆组织示例，不表示单件货经过所有供应商。
- **[马士基内陆运输](https://www.maersk.com/transportation-services/inland-services)**：整车、拼载、公路、铁路、驳船与海运衔接；节点间不固定采用一种运力。
- **[DHL 航空货运](https://www.dhl.com/gb-en/home/global-forwarding/products-and-solutions/air-freight.html)**：机场操作、航空货运及门到门衔接；图中简化承运人和代理人之间的信息协同。
- **[顺丰同城急送](https://www.sf-express.com/chn/sc/express/instant/rush)**：点到点同城直送产品示例；同城并不意味着所有产品都不用中转。
- **[顺丰冷运仓储](https://www.sf-express.com/chn/sc/express/cold/cold-warehousing)**：多温区储存、分拣、包装、配送和温度追溯；温控是贯穿链路的条件。
- **[菜鸟国际供应链](https://www.cainiao.com/global-supply-chain.html)**：海外仓、保税仓、货运、进口头程、调拨及逆向物流。
- **[海关跨境电商办事指南](https://online.customs.gov.cn/static/pages/guides/000629020000/000629020000.html)**：跨境电商直购与网购保税、交易支付物流数据等办理要求；本图仅解释物理路径差异。
- **[亚马逊 FBA](https://sell.amazon.com/fulfillment-by-amazon)**：平台履约中心储存、拣选、包装、发运及退货服务；为平台仓配模式实例。
- **[亚马逊 AWD](https://sell.amazon.com/programs/warehousing?mons_sel_locale=en_US)**：批量库存储存、向 FBA 自动补货与多渠道分配；备货与消费者订单履约分开。
- **[京东 BBCC 案例（官方稿转载）](https://finance.sina.com.cn/roll/2026-08-14/doc-ininhhrt9413108.shtml)**：新浪转载京东物流黑板报：B 仓集中备货、向 C 仓补货；名称属于该模式，不作为行业统一仓型。
- **[UPS 交付前拦截](https://www.ups.com/us/en/support/tracking-support/change-delivery-options/delivery-intercept)**：美国服务的退回、改址、延后与自提选项；资格、执行位置与是否成功需按服务确认。
- **[FedEx 末端交付 FAQ](https://www.fedex.com/en-us/faq/delivery-manager.html)**：配送调整、未交付与自提服务示例；具体可用选项、期限和次数依承运产品。
- **[商务部等九部门回收体系通知](https://app.www.gov.cn/govdata/gov/202402/02/511741/article.html)**：废旧家电家具回收渠道、集散与处理衔接；用于回收网络范围，不推广为全部品类的处置规程。
- **[顺丰大件仓配](https://www.sf-freight.com/warehouse.html)**：大件仓配、宅配与送装等服务；本图区分运输交付和安装服务完成。
- **[DHL 温控运输组织](https://dhlsupplychain.dhl.com/temperature-controlled-transport)**：官方列出整车、循环取送（Milk run）及拼载等组织方式。结合生产入厂资料，地图归纳为多供应商取货的车辆行程示例。

- **[FedEx 自提保管与退回](https://www.fedex.com/en-us/shipping/hold-at-location.html)**：美国保管后未取的退回示例；不将该产品期限推广到行业。
- **[FedEx 停止投递与退回](https://shipnow.gb.fedex.com/help-centre/parcels/question/delivery/how-do-i-request-that-my-parcel-is-stopped-and-returned-to-me)**：英国服务的停止投递与交付时拒收示例；不将申请等同于执行完成。

## 全部路径示例

| 单据范围 | 模式 | 物理链路 | 依据 |
| --- | --- | --- | --- |
| 采购 / 入厂 | 供应商 → 原料库 | 供应商 A → 原料 / 线边库 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[DHL 生产入厂物流](https://www.dhl.com/content/dam/dhl/global/csi/documents/pdf/csi-dhl-auto-mobility-inbound-to-manufacturing-domestic-transport.pdf.coredownload.pdf) |
| 采购 / 入厂 | 供应商直送工厂 | 供应商 A → 工厂 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[DHL 生产入厂物流](https://www.dhl.com/content/dam/dhl/global/csi/documents/pdf/csi-dhl-auto-mobility-inbound-to-manufacturing-domestic-transport.pdf.coredownload.pdf) |
| 采购 / 入厂 | 多供应商循环取货 | 供应商 A → 供应商 B → 原料 / 线边库 | [DHL 生产入厂物流](https://www.dhl.com/content/dam/dhl/global/csi/documents/pdf/csi-dhl-auto-mobility-inbound-to-manufacturing-domestic-transport.pdf.coredownload.pdf)、[DHL 温控运输组织](https://dhlsupplychain.dhl.com/temperature-controlled-transport) |
| 采购 / 入厂 | 原料库 → 生产线 | 原料 / 线边库 → 工厂 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[DHL 生产入厂物流](https://www.dhl.com/content/dam/dhl/global/csi/documents/pdf/csi-dhl-auto-mobility-inbound-to-manufacturing-domestic-transport.pdf.coredownload.pdf) |
| 补货 / 调拨 | 工厂 → 成品储备仓 | 工厂 → 中心 / 储备仓 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/) |
| 补货 / 调拨 | 中心仓 → 区域仓 | 中心 / 储备仓 → 区域配送仓 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html) |
| 补货 / 调拨 | B 仓 → C 仓补货 | B 仓 · 集货备货 → C 仓 · 订单履约 | [京东 BBCC 案例（官方稿转载）](https://finance.sina.com.cn/roll/2026-08-14/doc-ininhhrt9413108.shtml) |
| 补货 / 调拨 | 批量库存 → 平台履约仓 | AWD · 批量库存 → FBA · 平台履约仓 | [亚马逊 AWD](https://sell.amazon.com/programs/warehousing?mons_sel_locale=en_US)、[亚马逊 FBA](https://sell.amazon.com/fulfillment-by-amazon) |
| 补货 / 调拨 | 履约仓之间调拨 | 订单履约仓 → 另一履约仓 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)、[DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf) |
| 补货 / 调拨 | 区域仓 → 前置仓 | 区域配送仓 → 前置仓 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf) |
| 企业销售 / 店配 | 企业直达货运 | 工厂 → 企业收货点 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[马士基内陆运输](https://www.maersk.com/transportation-services/inland-services) |
| 企业销售 / 店配 | 零担集拼 / 拆零 | 商家发货点 → 始发货运场站 → 目的地货运场站 → 企业收货点 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[马士基内陆运输](https://www.maersk.com/transportation-services/inland-services) |
| 企业销售 / 店配 | 区域仓 → 门店店配 | 区域配送仓 → 门店 / 经销商 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf) |
| 企业销售 / 店配 | 工厂 / 供应商直送门店 | 工厂 → 门店 / 经销商 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/) |
| 企业销售 / 店配 | 越库集配到店 | 工厂 → 越库 / 集配点 → 门店 / 经销商 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[DHL 越库说明](https://lot.dhl.com/how-cross-docking-is-transforming-last-mile-delivery-dynamics/) |
| 消费者销售 | 商家仓 → 快递网络 | 商家发货点 → 始发站点 → 始发分拣中心 → 目的地分拣中心 → 末端配送站点 → 个人收件地址 | [DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)、[万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) |
| 消费者销售 | 平台 / 第三方仓履约 | 订单履约仓 → 目的地分拣中心 → 末端配送站点 → 个人收件地址 | [亚马逊 FBA](https://sell.amazon.com/fulfillment-by-amazon)、[DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)、[万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) |
| 消费者销售 | 仓配一体短链 | 订单履约仓 → 末端配送站点 → 个人收件地址 | [DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)、[DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf) |
| 消费者销售 | 供应商代发 | 供应商 A → 始发分拣中心 → 目的地分拣中心 → 末端配送站点 → 个人收件地址 | [GS1 订单到收款](https://www.gs1.org/standards/edi/solutions)、[DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)、[万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) |
| 消费者销售 | 工厂直发消费者 | 工厂 → 始发分拣中心 → 目的地分拣中心 → 末端配送站点 → 个人收件地址 | [DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)、[万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) |
| 消费者销售 | 前置仓即时配送 | 前置仓 → 个人收件地址 | [DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf)、[顺丰同城急送](https://www.sf-express.com/chn/sc/express/instant/rush) |
| 消费者销售 | 门店发货 / 同城直送 | 门店 / 经销商 → 个人收件地址 | [DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf)、[顺丰同城急送](https://www.sf-express.com/chn/sc/express/instant/rush) |
| 消费者销售 | 寄递至自提点 | 订单履约仓 → 目的地分拣中心 → 末端配送站点 → 自提点 / 柜 | [万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System)、[FedEx 末端交付 FAQ](https://www.fedex.com/en-us/faq/delivery-manager.html) |
| 消费者销售 | 冷链仓配 | 冷链仓 → 温控末端节点 → 个人收件地址 | [顺丰冷运仓储](https://www.sf-express.com/chn/sc/express/cold/cold-warehousing) |
| 消费者销售 | 大件送装 / 入户 | 订单履约仓 → 目的地货运场站 → 末端配送站点 → 个人收件地址 | [顺丰大件仓配](https://www.sf-freight.com/warehouse.html)、[马士基内陆运输](https://www.maersk.com/transportation-services/inland-services) |
| 个人寄件 | 个人寄件 C2C | 个人寄件地址 → 始发站点 → 始发分拣中心 → 目的地分拣中心 → 末端配送站点 → 个人收件地址 | [万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) |
| 个人寄件 | 个人寄企业 C2B | 个人寄件地址 → 始发站点 → 始发分拣中心 → 目的地分拣中心 → 末端配送站点 → 企业收货点 | [万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System)、[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/) |
| 个人寄件 | 个人同城直送 | 个人寄件地址 → 个人收件地址 | [顺丰同城急送](https://www.sf-express.com/chn/sc/express/instant/rush) |
| 国际 / 跨境 | 海运门到门 | 工厂 → 国内海港 → 境外海港 → 企业收货点 | [马士基内陆运输](https://www.maersk.com/transportation-services/inland-services)、[菜鸟国际供应链](https://www.cainiao.com/global-supply-chain.html) |
| 国际 / 跨境 | 公路—铁路联运 | 工厂 → 始发铁路场站 → 目的地铁路场站 → 企业收货点 | [马士基内陆运输](https://www.maersk.com/transportation-services/inland-services) |
| 国际 / 跨境 | 国际航空货运 | 商家发货点 → 始发航空货站 → 境外航空货站 → 境外收件方 | [DHL 航空货运](https://www.dhl.com/gb-en/home/global-forwarding/products-and-solutions/air-freight.html) |
| 国际 / 跨境 | 批量出口备货海外仓 | 工厂 → 国内口岸 → 境外口岸 / 货站 → 海外仓 | [菜鸟国际供应链](https://www.cainiao.com/global-supply-chain.html)、[马士基内陆运输](https://www.maersk.com/transportation-services/inland-services) |
| 国际 / 跨境 | 海外仓本地履约 | 海外仓 → 境外收件方 | [菜鸟国际供应链](https://www.cainiao.com/global-supply-chain.html) |
| 国际 / 跨境 | 进口商品保税备货 | 境外供货方 → 境外口岸 / 货站 → 国内口岸 → 保税仓 | [海关跨境电商办事指南](https://online.customs.gov.cn/static/pages/guides/000629020000/000629020000.html)、[菜鸟国际供应链](https://www.cainiao.com/global-supply-chain.html) |
| 国际 / 跨境 | 网购保税进口履约 | 保税仓 → 目的地分拣中心 → 末端配送站点 → 个人收件地址 | [海关跨境电商办事指南](https://online.customs.gov.cn/static/pages/guides/000629020000/000629020000.html)、[菜鸟国际供应链](https://www.cainiao.com/global-supply-chain.html) |
| 国际 / 跨境 | 跨境直购进口 | 境外供货方 → 境外口岸 / 货站 → 国内口岸 → 目的地分拣中心 → 末端配送站点 → 个人收件地址 | [海关跨境电商办事指南](https://online.customs.gov.cn/static/pages/guides/000629020000/000629020000.html)、[菜鸟国际供应链](https://www.cainiao.com/global-supply-chain.html) |
| 退货单 | 个人退货 → 退货中心 | 个人收件地址 → 末端配送站点 → 目的地分拣中心 → 退货处理中心 | [DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)、[DHL 服务物流](https://www.dhl.com/gb-en/home/supply-chain/solutions/service-logistics.html)、[万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) |
| 退货单 | 门店 / 网点退货交接 | 个人收件地址 → 门店 / 经销商 → 退货处理中心 | [DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf)、[DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html) |
| 退货单 | 企业退供 / 退货 | 区域配送仓 → 中心 / 储备仓 → 工厂 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/) |
| 退货单 | 检测合格 → 可售入库 | 退货处理中心 → 订单履约仓 | [DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)、[DHL 服务物流](https://www.dhl.com/gb-en/home/supply-chain/solutions/service-logistics.html) |
| 维修 / 配件单 | 寄修 → 维修中心 | 个人收件地址 → 末端配送站点 → 目的地分拣中心 → 维修 / 服务中心 | [DHL 服务物流](https://www.dhl.com/gb-en/home/supply-chain/solutions/service-logistics.html)、[万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) |
| 维修 / 配件单 | 维修完成 → 返还客户 | 维修 / 服务中心 → 目的地分拣中心 → 末端配送站点 → 个人收件地址 | [DHL 服务物流](https://www.dhl.com/gb-en/home/supply-chain/solutions/service-logistics.html)、[万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) |
| 维修 / 配件单 | 配件库 → 服务中心 | 配件库 → 维修 / 服务中心 | [DHL 服务物流](https://www.dhl.com/gb-en/home/supply-chain/solutions/service-logistics.html) |
| 维修 / 配件单 | 备件直送服务现场 | 配件库 → 个人收件地址 | [DHL 服务物流](https://www.dhl.com/gb-en/home/supply-chain/solutions/service-logistics.html) |
| 回收 / 载具单 | 上门 / 定点回收 | 个人收件地址 → 回收交接点 → 回收集散 / 处理点 | [商务部等九部门回收体系通知](https://app.www.gov.cn/govdata/gov/202402/02/511741/article.html)、[DHL 服务物流](https://www.dhl.com/gb-en/home/supply-chain/solutions/service-logistics.html) |
| 回收 / 载具单 | 处理后再生材料流转 | 回收集散 / 处理点 → 原料 / 线边库 → 工厂 | [商务部等九部门回收体系通知](https://app.www.gov.cn/govdata/gov/202402/02/511741/article.html)、[DHL 生产入厂物流](https://www.dhl.com/content/dam/dhl/global/csi/documents/pdf/csi-dhl-auto-mobility-inbound-to-manufacturing-domestic-transport.pdf.coredownload.pdf) |
| 回收 / 载具单 | 周转载具回收与再用 | 门店 / 经销商 → 周转载具中心 → 工厂 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/) |

## 情景建模与教学边界

- 常规路径是一个可采用的物流结构，不表示当前真实订单已经执行完毕。
- 交接前取消只突出原发运地点，画面不生成运输边。核查实物已交接时，需要其他处置，不能直接采用该示例。
- 寄递路径才提供交付前拦截、改址、再投与自提等选项。服务资格、次数、费用及期限不写成通用承诺。
- 拦截成功示例在指定处理点回转；未成功示例继续原交付。真实执行点不一定在地图示例位置。
- 拒收和超期退回明确返回本次原发运地点。回程按相同功能节点简化绘制，不表示必须沿原路返回。
- 货损、延误及通关待处理示例突出一个明确停留点，未自动续画退运、退款或补发；实际位置应核查交接与状态信息。
- 到货差异显示到货路径与等待核查，不自动判定合格入库或生成退货。
- 维修订单中的蓝色辅助线是另一笔备件货流，主线上经过顺序仅针对客户送修品。
- 循环取货的路径表示车辆依次服务多个供货点；各供货点装上车辆的是不同货物。
- 自提图在约定自提点结束，不将收件人的出行画成承运人配送。
- 备货入仓与消费者订单出仓分别提供模式，不把库存补货当作每笔消费者订单的前置实物运输。
- 全渠道、一盘货、共享库存属于库存与订单管理方式；页面分笔展示发往不同渠道的实际路径。
- 自营、平台、第三方是运营属性；冷链是贯穿作业的商品条件；海外是地理属性；保税涉及监管；B/C 仓名称在企业实例中解释。

## 覆盖范围与尚未展开的专项流程

页面提供 9 类范围、47 个路径和 39 个功能地点，覆盖一般采购与生产物流、库存分配、寄递与货运、仓配、海空铁运输、保税与海外仓，以及退货、寄修、备件、回收和周转载具。自营与第三方运营不因主体不同而虚构额外必经站点。

危险品、医药、超限项目、工程及其他专用物流需根据这些结构补充专用设施、资质、操作和监管要求；本页面未逐项展开，也不声称穷尽行业全部流程。

## 验证记录

- 核查 275 个模式与适用情景组合：节点和资料映射存在，路径边数与经过次数一致。
- 取消不产生运输边，拦截／拒收／超期退回的示例终点为本次原发运地点，寄修辅助配件线独立。
- 浏览器检查电脑、手机、资料窗口、模式切换，无脚本错误；手机无页面横向溢出。
- 对原 `index.html` 的内容摘要进行比对，确认新地图制作未修改原网页。

## 空间呈现更新（2026-10-10）

地域按始发、目的与境外示意，非真实国家、城市或设施选址。海运门到门的末端接收设施单列为境外企业收货点，避免空间图误画成海运到达后又经公路跨海。设施间公路段走道路与出入口，海运仅连接两侧海港，空运连接航空货站，铁路连接铁路场站。图上的运输动画只表达该段货物流向，不表达实际运输进度。
