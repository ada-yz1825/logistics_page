# 物流服务地图：场景、资源与结算依据

核对日期：2026-10-13。对应 `map.html`；原 `index.html` 继续保留。

## 内容组织

导航按业务场景 → 服务模式 → 流程情景组织，共 3 类场景、34 个服务模式。场景是教学导航，不是互斥行业分类；例如货代可以组织供应链头程，供应链服务商也可以使用快递网络。服务模式不能由一张单据的名称直接确定。

地图表示实物环节及资源方角色。设施下方列作业资源方，左上列服务组织方和该模式所需运力。货代、供应链服务商属于服务组织角色，不被画成每件货都必须经过的虚构设施。同一企业可能兼任多个角色；标注不代表设施或运力的所有权。

右上介绍采用服务能力 / 结算方式切换，模式切换保留当前栏目，方便比较。结算分别说明费用计价依据与付款主体、账期。公开资料未披露时明确标明需询价或核对合同；不补写统一费率、分成比例、佣金或账期。

航空货站与海港使用独立节点；拼箱收货、集拼与拆箱分拨使用独立作业点示例，实际可以合设。增加境外派送节点，避免把国际运输到港等同于最终交付。原有生产、仓配、寄递、货运、售后与口岸园区沿用相同立体地图形式，背景位置仅为教学布局。

## 适用范围与核验边界

- 公开企业产品用于说明服务能力，不扩大为全行业必备能力。FBA、AWD 为亚马逊产品实例；顺丰标准零担、国际标快的收费口径仅用于对应产品。
- DHL 各运输方式计费说明用于解释计费单位；体积重折算随产品、地区与承运人变化，不设全行业统一除数。
- DHL 比利时付款条款仅是地区案例，不推导所有货代即时付款或统一月结。
- 入库备货与订单履约、退货与退款、维修与寄回分别确认；展示一组服务的范围不表示货物连续移动或业务自动完成。
- 异常停留地点是教学示例，实际以扫描、交接记录及处置指令确认。快递拦截、改址、自提和未取退回引用 UPS / FedEx 的指定地区服务；页面明确不自动套用到其他承运产品。
- 资源方按职能归纳，承运、代理及附加服务责任最终须核对委托、运输单证和合同。

## 服务模式与字段来源

| 场景 | 服务模式 | 实物链路 | 服务能力依据 | 结算依据 |
| --- | --- | --- | --- | --- |
| 供应链 | 仓配一体 / 合同仓配 | 商家发货点 → 订单履约仓 → 末端配送站点 → 个人收件地址 | [DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)、[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[DHL Fulfillment Network：项目询价](https://www.dhl.com/global-en/microsites/supply-chain/fulfillment-network/get-a-quote.html) | [DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)、[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[DHL Fulfillment Network：项目询价](https://www.dhl.com/global-en/microsites/supply-chain/fulfillment-network/get-a-quote.html)、[DHL Fulfillment Network：项目询价](https://www.dhl.com/global-en/microsites/supply-chain/fulfillment-network/get-a-quote.html) |
| 供应链 | 平台仓履约 · FBA 案例 | 订单履约仓 → 目的地分拣中心 → 末端配送站点 → 个人收件地址 | [亚马逊 FBA](https://sell.amazon.com/fulfillment-by-amazon)、[万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) | [亚马逊 FBA](https://sell.amazon.com/fulfillment-by-amazon) |
| 供应链 | 储备仓补货 · AWD 案例 | 中心 / 储备仓 → 另一履约仓 | [亚马逊 AWD](https://sell.amazon.com/programs/warehousing?mons_sel_locale=en_US)、[亚马逊 FBA](https://sell.amazon.com/fulfillment-by-amazon) | [亚马逊 AWD](https://sell.amazon.com/programs/warehousing?mons_sel_locale=en_US) |
| 供应链 | 仓网分配与门店配送 | 工厂 → 中心 / 储备仓 → 区域配送仓 → 门店 / 经销商 | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf)、[DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html) | [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf)、[DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)、[DHL Fulfillment Network：项目询价](https://www.dhl.com/global-en/microsites/supply-chain/fulfillment-network/get-a-quote.html) |
| 供应链 | 区域补货与前置仓履约 | 区域配送仓 → 前置仓 → 个人收件地址 | [菜鸟：区域仓与前置仓规划](https://tech.cainiao.com/productv2/ProductIndex/269)、[GS1：仓内收存拣发](https://gs1.org.sg/transport-and-logistics/warehouse-management/)、[顺丰同城急送](https://www.sf-express.com/chn/sc/express/instant/rush) | [菜鸟：区域仓与前置仓规划](https://tech.cainiao.com/productv2/ProductIndex/269)、[GS1：仓内收存拣发](https://gs1.org.sg/transport-and-logistics/warehouse-management/)、[顺丰同城急送](https://www.sf-express.com/chn/sc/express/instant/rush) |
| 供应链 | 门店库存发货 | 门店 / 经销商 → 末端配送站点 → 个人收件地址 | [DHL：门店发货与到店自提](https://www.dhl.com/discover/en-in/b2b-advice/b2b-e-commerce-advice/omnichannel-logistics-store-website-fulfilment)、[DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf)、[万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) | [DHL：门店发货与到店自提](https://www.dhl.com/discover/en-in/b2b-advice/b2b-e-commerce-advice/omnichannel-logistics-store-website-fulfilment)、[DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf)、[万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) |
| 供应链 | 门店订单 / 到店自提 | 区域配送仓 → 门店 / 经销商 | [DHL：门店发货与到店自提](https://www.dhl.com/discover/en-in/b2b-advice/b2b-e-commerce-advice/omnichannel-logistics-store-website-fulfilment)、[DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf)、[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/) | [DHL：门店发货与到店自提](https://www.dhl.com/discover/en-in/b2b-advice/b2b-e-commerce-advice/omnichannel-logistics-store-website-fulfilment)、[DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf)、[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/) |
| 供应链 | 越库集配 | 工厂 → 越库 / 集配点 → 门店 / 经销商 | [DHL 越库说明](https://lot.dhl.com/how-cross-docking-is-transforming-last-mile-delivery-dynamics/)、[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/) | [DHL 越库说明](https://lot.dhl.com/how-cross-docking-is-transforming-last-mile-delivery-dynamics/)、[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[DHL Fulfillment Network：项目询价](https://www.dhl.com/global-en/microsites/supply-chain/fulfillment-network/get-a-quote.html) |
| 供应链 | 冷链仓配 | 冷链仓 → 末端配送站点 → 个人收件地址 | [顺丰冷运仓储](https://www.sf-express.com/chn/sc/express/cold/cold-warehousing) | [顺丰冷运仓储](https://www.sf-express.com/chn/sc/express/cold/cold-warehousing) |
| 供应链 | 生产入厂与线边供料 | 供应商 A → 原料 / 线边库 → 工厂 | [DHL 生产入厂物流](https://www.dhl.com/content/dam/dhl/global/csi/documents/pdf/csi-dhl-auto-mobility-inbound-to-manufacturing-domestic-transport.pdf.coredownload.pdf)、[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/) | [DHL 生产入厂物流](https://www.dhl.com/content/dam/dhl/global/csi/documents/pdf/csi-dhl-auto-mobility-inbound-to-manufacturing-domestic-transport.pdf.coredownload.pdf)、[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/) |
| 供应链 | 循环取货 / Milk run | 供应商 A → 供应商 B → 原料 / 线边库 | [DHL 生产入厂物流](https://www.dhl.com/content/dam/dhl/global/csi/documents/pdf/csi-dhl-auto-mobility-inbound-to-manufacturing-domestic-transport.pdf.coredownload.pdf)、[DHL 温控运输组织](https://dhlsupplychain.dhl.com/temperature-controlled-transport) | [DHL 生产入厂物流](https://www.dhl.com/content/dam/dhl/global/csi/documents/pdf/csi-dhl-auto-mobility-inbound-to-manufacturing-domestic-transport.pdf.coredownload.pdf)、[DHL 温控运输组织](https://dhlsupplychain.dhl.com/temperature-controlled-transport) |
| 供应链 | 跨区域退货 / 网络返运 | 退货交件地址 → 末端配送站点 → 退货始发分拣中心 → 退货接收侧分拣中心 → 退货处理中心 | [DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)、[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)、[DHL：退货与循环服务](https://www.dhl.com/us-en/home/supply-chain/solutions/returns-and-circularity.html) | [DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)、[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/) |
| 供应链 | 本地退货 / 直接退回 | 退货交件地址 → 退货处理中心 | [DHL：退货与循环服务](https://www.dhl.com/us-en/home/supply-chain/solutions/returns-and-circularity.html)、[顺丰同城急送](https://www.sf-express.com/chn/sc/express/instant/rush) | [DHL：退货与循环服务](https://www.dhl.com/us-en/home/supply-chain/solutions/returns-and-circularity.html)、[顺丰同城急送](https://www.sf-express.com/chn/sc/express/instant/rush) |
| 供应链 | 备件与维修服务物流 | 送修交件地址 → 末端配送站点 → 送修始发分拣中心 → 送修接收侧分拣中心 → 维修 / 服务中心 | [DHL 服务物流](https://www.dhl.com/gb-en/home/supply-chain/solutions/service-logistics.html)、[DHL：退货与循环服务](https://www.dhl.com/us-en/home/supply-chain/solutions/returns-and-circularity.html) | [DHL 服务物流](https://www.dhl.com/gb-en/home/supply-chain/solutions/service-logistics.html) |
| 供应链 | 废旧家电家具回收 | 个人收件地址 → 回收集散 / 处理点 | [商务部等九部门：回收体系](https://app.www.gov.cn/govdata/gov/202402/02/511741/article.html) | [商务部等九部门：回收体系](https://app.www.gov.cn/govdata/gov/202402/02/511741/article.html) |
| 供应链 | 托盘 / 周转箱回收再用 | 企业收货点 → 周转载具中心 → 工厂 | [GS1：可回收周转载具标识](https://www.gs1.org/standards/id-keys/grai)、[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/) | [GS1：可回收周转载具标识](https://www.gs1.org/standards/id-keys/grai)、[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/) |
| 供应链 | 海外仓备货与当地履约 | 工厂 → 境内海港 → 境外海港 → 海外仓 → 境外配送站点 → 境外收件方 | [菜鸟国际供应链](https://www.cainiao.com/global-supply-chain.html)、[DHL：海运 FCL / LCL](https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/ocean-freight.html) | [菜鸟国际供应链](https://www.cainiao.com/global-supply-chain.html)、[DHL：海运 FCL / LCL](https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/ocean-freight.html) |
| 供应链 | 保税仓配 / 进口履约 | 境外供货方 → 境外海港 → 境内海港 → 保税仓 → 目的地分拣中心 → 末端配送站点 → 个人收件地址 | [菜鸟国际供应链](https://www.cainiao.com/global-supply-chain.html)、[海关跨境电商办事指南](https://online.customs.gov.cn/static/pages/guides/000629020000/000629020000.html) | [菜鸟国际供应链](https://www.cainiao.com/global-supply-chain.html)、[海关跨境电商办事指南](https://online.customs.gov.cn/static/pages/guides/000629020000/000629020000.html) |
| 快递快运 | 本土快递 / 公路网络 | 商家发货点 → 始发站点 → 始发分拣中心 → 目的地分拣中心 → 末端配送站点 → 个人收件地址 | [万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System)、[顺丰企业平台：付款方式](https://v.sf-express.com/web/laas/help-center) | [顺丰企业平台：付款方式](https://v.sf-express.com/web/laas/help-center) |
| 快递快运 | 本土快递 / 航空干线 | 商家发货点 → 始发站点 → 始发分拣中心 → 境内始发航空货站 → 境内到达航空货站 → 目的地分拣中心 → 末端配送站点 → 个人收件地址 | [顺丰航空：航空与分拣网络](https://www.sf-airlines.com/en/capability/hubs/index.html)、[国货航：国内与国际货站作业](https://www.airchinacargo.com/cargo/tzzgx/jbxx/xxpl/0714/2c9865b6-97f43e60-0198-079a6220-0d11.pdf)、[万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) | [顺丰航空：航空与分拣网络](https://www.sf-airlines.com/en/capability/hubs/index.html)、[国货航：国内与国际货站作业](https://www.airchinacargo.com/cargo/tzzgx/jbxx/xxpl/0714/2c9865b6-97f43e60-0198-079a6220-0d11.pdf)、[万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) |
| 快递快运 | 本土快运 / 零担网络 | 商家发货点 → 始发货运场站 → 目的地货运场站 → 企业收货点 | [顺丰快运：标准零担](https://www.sf-freight.com/mobile/smLoad.html)、[GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/) | [顺丰快运：标准零担](https://www.sf-freight.com/mobile/smLoad.html) |
| 快递快运 | 本土同城 / 点到点配送 | 个人寄件地址 → 个人收件地址 | [顺丰同城急送](https://www.sf-express.com/chn/sc/express/instant/rush) | [顺丰同城急送](https://www.sf-express.com/chn/sc/express/instant/rush) |
| 快递快运 | 跨境快递 / 航空寄递 | 商家发货点 → 始发站点 → 始发分拣中心 → 境内航空货站 → 境外航空货站 → 境外配送站点 → 境外收件方 | [顺丰：国际标快](https://www.sf-express.com/chn/sc/express/intl/int-standard)、[万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) | [顺丰：国际标快](https://www.sf-express.com/chn/sc/express/intl/int-standard) |
| 货代 | 陆运代理 / 整车 | 工厂 → 企业收货点 | [FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/)、[马士基内陆运输](https://www.maersk.com/transportation-services/inland-services)、[DHL Group：货代业务模式](https://group.dhl.com/en/about-us/corporate-divisions/global-forwarding-freight.html) | [马士基内陆运输](https://www.maersk.com/transportation-services/inland-services)、[DHL 比利时：费用与付款条款案例](https://www.dhl.com/content/dam/dhl/local/be/dhl-global-forwarding/documents/be-en-dgf-terms-and-conditions.pdf) |
| 货代 | 陆运代理 / 拼载 | 商家发货点 → 始发货运场站 → 目的地货运场站 → 企业收货点 | [FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/)、[马士基内陆运输](https://www.maersk.com/transportation-services/inland-services) | [DHL：各运输方式计费重量](https://www.dhl.com/gb-en/home/global-forwarding/freight-forwarding-education-center/calculating-chargeable-weights.html)、[DHL 比利时：费用与付款条款案例](https://www.dhl.com/content/dam/dhl/local/be/dhl-global-forwarding/documents/be-en-dgf-terms-and-conditions.pdf) |
| 货代 | 国内空运代理 | 商家发货点 → 境内始发航空货站 → 境内到达航空货站 → 企业收货点 | [国货航：国内与国际货站作业](https://www.airchinacargo.com/cargo/tzzgx/jbxx/xxpl/0714/2c9865b6-97f43e60-0198-079a6220-0d11.pdf)、[顺丰航空：航空与分拣网络](https://www.sf-airlines.com/en/capability/hubs/index.html)、[FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/) | [国货航：国内与国际货站作业](https://www.airchinacargo.com/cargo/tzzgx/jbxx/xxpl/0714/2c9865b6-97f43e60-0198-079a6220-0d11.pdf)、[顺丰航空：航空与分拣网络](https://www.sf-airlines.com/en/capability/hubs/index.html)、[FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/) |
| 货代 | 国际空运代理 / 出口 | 商家发货点 → 境内航空货站 → 境外航空货站 → 境外企业收货点 | [DHL 航空货运](https://www.dhl.com/gb-en/home/global-forwarding/products-and-solutions/air-freight.html)、[FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/) | [DHL：各运输方式计费重量](https://www.dhl.com/gb-en/home/global-forwarding/freight-forwarding-education-center/calculating-chargeable-weights.html)、[DHL：货代报价与订舱](https://www.dhl.com/us-en/home/global-forwarding/mydhli/discover-quote-and-book.html)、[DHL 比利时：费用与付款条款案例](https://www.dhl.com/content/dam/dhl/local/be/dhl-global-forwarding/documents/be-en-dgf-terms-and-conditions.pdf) |
| 货代 | 国际空运代理 / 进口 | 境外供货方 → 境外始发航空货站 → 境内到达航空货站 → 企业收货点 | [DHL 航空货运](https://www.dhl.com/gb-en/home/global-forwarding/products-and-solutions/air-freight.html)、[DHL：航空货物与运输资料](https://www.dhl.com/ch-en/home/global-forwarding/freight-forwarding-education-center/air-cargo-documentation.html)、[FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/) | [DHL 航空货运](https://www.dhl.com/gb-en/home/global-forwarding/products-and-solutions/air-freight.html)、[DHL：航空货物与运输资料](https://www.dhl.com/ch-en/home/global-forwarding/freight-forwarding-education-center/air-cargo-documentation.html)、[FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/) |
| 货代 | 国际海运代理 / 出口整箱 | 工厂 → 境内海港 → 境外海港 → 境外企业收货点 | [DHL：海运 FCL / LCL](https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/ocean-freight.html)、[FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/) | [DHL：各运输方式计费重量](https://www.dhl.com/gb-en/home/global-forwarding/freight-forwarding-education-center/calculating-chargeable-weights.html)、[DHL：货代报价与订舱](https://www.dhl.com/us-en/home/global-forwarding/mydhli/discover-quote-and-book.html)、[DHL 比利时：费用与付款条款案例](https://www.dhl.com/content/dam/dhl/local/be/dhl-global-forwarding/documents/be-en-dgf-terms-and-conditions.pdf) |
| 货代 | 国际海运代理 / 进口整箱 | 境外供货方 → 境外始发海港 → 境内到达海港 → 企业收货点 | [DHL：海运 FCL / LCL](https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/ocean-freight.html)、[FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/) | [DHL：海运 FCL / LCL](https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/ocean-freight.html)、[FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/) |
| 货代 | 国际海运代理 / 出口拼箱 | 商家发货点 → 始发拼箱作业点 → 境内海港 → 境外海港 → 目的地拆箱作业点 → 境外企业收货点 | [DHL：拼箱作业与计价](https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/ocean-freight/less-than-container-load.html)、[FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/) | [DHL：拼箱作业与计价](https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/ocean-freight/less-than-container-load.html)、[DHL：各运输方式计费重量](https://www.dhl.com/gb-en/home/global-forwarding/freight-forwarding-education-center/calculating-chargeable-weights.html)、[DHL 比利时：费用与付款条款案例](https://www.dhl.com/content/dam/dhl/local/be/dhl-global-forwarding/documents/be-en-dgf-terms-and-conditions.pdf) |
| 货代 | 内贸沿海运输代理 | 工厂 → 境内始发海港 → 境内到达海港 → 企业收货点 | [中远海控：内贸沿海与海铁联运](https://hold.coscoshipping.com/cms_files/filemanager/1631/attach/20248/65FC76FE0F54CDED993C5161A6D8E9D8.pdf)、[FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/) | [中远海控：内贸沿海与海铁联运](https://hold.coscoshipping.com/cms_files/filemanager/1631/attach/20248/65FC76FE0F54CDED993C5161A6D8E9D8.pdf)、[FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/) |
| 货代 | 多式联运 / 公路—铁路 | 工厂 → 始发铁路场站 → 目的地铁路场站 → 企业收货点 | [DHL：铁路与多式联运](https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/rail-freight.html)、[FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/) | [DHL：铁路与多式联运](https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/rail-freight.html)、[DHL：各运输方式计费重量](https://www.dhl.com/gb-en/home/global-forwarding/freight-forwarding-education-center/calculating-chargeable-weights.html)、[DHL 比利时：费用与付款条款案例](https://www.dhl.com/content/dam/dhl/local/be/dhl-global-forwarding/documents/be-en-dgf-terms-and-conditions.pdf) |
| 货代 | 多式联运 / 海铁衔接 | 工厂 → 始发铁路场站 → 目的地铁路场站 → 境内海港 → 境外海港 → 境外企业收货点 | [中远海控：内贸沿海与海铁联运](https://hold.coscoshipping.com/cms_files/filemanager/1631/attach/20248/65FC76FE0F54CDED993C5161A6D8E9D8.pdf)、[马士基内陆运输](https://www.maersk.com/transportation-services/inland-services)、[FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/) | [中远海控：内贸沿海与海铁联运](https://hold.coscoshipping.com/cms_files/filemanager/1631/attach/20248/65FC76FE0F54CDED993C5161A6D8E9D8.pdf)、[马士基内陆运输](https://www.maersk.com/transportation-services/inland-services)、[FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/) |

## 资料清单

- [GS1 物流互操作模型](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)：第 3.5、3.6 节区分仓储与运输；第 4.2—4.5 节覆盖采购、工厂到仓、直送、越库及集货拆零。原文范围为 B2B。
- [万国邮联 DPS](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System)：邮政收寄、分拣、运输与投递功能；用于归纳寄递网络，不要求每票经过全部节点。
- [DHL 仓储服务](https://www.dhl.com/us-en/home/supply-chain/solutions/warehousing.html)：储存、拣选、包装、发运、退货管理及越库；支持自有、外包、共用仓的功能比较。
- [DHL 越库说明](https://lot.dhl.com/how-cross-docking-is-transforming-last-mile-delivery-dynamics/)：越库以快速衔接入站与出站货物为目标，减少中间储存；不等于没有卸货、分流或复核。
- [DHL 全渠道物流报告](https://www.dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-omni-channel-logistics-trend-report.pdf)：全渠道共享库存、B2B 与 B2C 仓内履约。地图分别展示每笔订单的去向。
- [DHL 服务物流](https://www.dhl.com/gb-en/home/supply-chain/solutions/service-logistics.html)：备件、正逆向运输、维修与部件回收。备件供应与客户送修品是不同货物流。
- [DHL 生产入厂物流](https://www.dhl.com/content/dam/dhl/global/csi/documents/pdf/csi-dhl-auto-mobility-inbound-to-manufacturing-domestic-transport.pdf.coredownload.pdf)：供应商到工厂的运输、生产需求衔接。循环取货是车辆组织示例，不表示单件货经过所有供应商。
- [马士基内陆运输](https://www.maersk.com/transportation-services/inland-services)：整车、拼载、公路、铁路、驳船与海运衔接；节点间不固定采用一种运力。
- [DHL 航空货运](https://www.dhl.com/gb-en/home/global-forwarding/products-and-solutions/air-freight.html)：机场操作、航空货运及门到门衔接；图中简化承运人和代理人之间的信息协同。
- [顺丰同城急送](https://www.sf-express.com/chn/sc/express/instant/rush)：点到点同城直送产品示例；同城并不意味着所有产品都不用中转。
- [顺丰冷运仓储](https://www.sf-express.com/chn/sc/express/cold/cold-warehousing)：多温区仓储、分拣、包装、配送与追溯；按项目报价，列出出入库、存储、分拣及包装费用；顺丰该产品仅限月结客户并需签订合同。
- [菜鸟国际供应链](https://www.cainiao.com/global-supply-chain.html)：海外仓、保税仓、货运、进口头程、调拨及逆向物流。
- [海关跨境电商办事指南](https://online.customs.gov.cn/static/pages/guides/000629020000/000629020000.html)：跨境电商直购与网购保税、交易支付物流数据等办理要求；本图仅解释物理路径差异。
- [亚马逊 FBA](https://sell.amazon.com/fulfillment-by-amazon)：平台履约中心储存、拣选、包装、发运及退货服务；为平台仓配模式实例。
- [亚马逊 AWD](https://sell.amazon.com/programs/warehousing?mons_sel_locale=en_US)：批量库存储存、向 FBA 自动补货与多渠道分配；备货与消费者订单履约分开。
- [UPS 交付前拦截](https://www.ups.com/us/en/support/tracking-support/change-delivery-options/delivery-intercept)：美国服务的退回、改址、延后与自提选项；资格、执行位置与是否成功需按服务确认。
- [FedEx 末端交付 FAQ](https://www.fedex.com/en-us/faq/delivery-manager.html)：配送调整、未交付与自提服务示例；具体可用选项、期限和次数依承运产品。
- [DHL 温控运输组织](https://dhlsupplychain.dhl.com/temperature-controlled-transport)：官方列出整车、循环取送（Milk run）及拼载等组织方式。结合生产入厂资料，地图归纳为多供应商取货的车辆行程示例。
- [FedEx 自提保管与退回](https://www.fedex.com/en-us/shipping/hold-at-location.html)：美国自提保管后未取的退回示例。本图不使用该服务期限作为行业统一期限。
- [FedEx 停止投递与退回](https://shipnow.gb.fedex.com/help-centre/parcels/question/delivery/how-do-i-request-that-my-parcel-is-stopped-and-returned-to-me)：英国服务的停止投递、退回请求与交付时拒收示例。不把申请等同于执行完成。
- [FIATA：货代服务定义](https://fiata.org/about-freight-forwarding/)：货代组织单式或多式运输、集拼、仓储及相关代理服务；组织方与实际承运资源按职能区分。
- [DHL Group：货代业务模式](https://group.dhl.com/en/about-us/corporate-divisions/global-forwarding-freight.html)：货代在客户与承运人之间组织运输，提供海空陆及多式联运；不等于必须自有车辆、飞机或船舶。
- [DHL：海运 FCL / LCL](https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/ocean-freight.html)：整箱、拼箱与门到门海运服务；作为服务模式实例，不推导所有航线的固定时效。
- [DHL：铁路与多式联运](https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/rail-freight.html)：铁路货运及公路前后程衔接；包括欧亚整箱/拼箱和国内铁路方案，各产品范围不同。
- [DHL：各运输方式计费重量](https://www.dhl.com/gb-en/home/global-forwarding/freight-forwarding-education-center/calculating-chargeable-weights.html)：航空、拼箱货运比较实重与体积重；整箱按箱计费；公路体积折算随地区与承运人变化。示例折算不能作为行业统一标准。
- [DHL：货代报价与订舱](https://www.dhl.com/us-en/home/global-forwarding/mydhli/discover-quote-and-book.html)：航空、海运整箱和拼箱报价订舱；可选清关、货值保护等服务，须核对报价覆盖范围。
- [DHL 比利时：费用与付款条款案例](https://www.dhl.com/content/dam/dhl/local/be/dhl-global-forwarding/documents/be-en-dgf-terms-and-conditions.pdf)：地区条款实例：未列明服务可另收费，附加费按条款调整，发票原则上立即付款。仅适用于该地区/合同，不推广为所有货代统一账期。
- [顺丰企业平台：付款方式](https://v.sf-express.com/web/laas/help-center)：企业寄件操作列出寄付现结、寄付月结、到付；可选方式和月结资格以实际产品与账号为准。
- [顺丰快运：标准零担](https://www.sf-freight.com/mobile/smLoad.html)：标准零担面向批量/大件托运，公开页采用单公斤报价；是该产品实例，不代表所有零担产品都采用相同计费规则。
- [顺丰：国际标快](https://www.sf-express.com/chn/sc/express/intl/int-standard)：门到门国际快件、航空运输及清关；按实重与体积重较大者计费，覆盖、附加服务和时效因起讫地变化。
- [DHL Fulfillment Network：项目询价](https://www.dhl.com/global-en/microsites/supply-chain/fulfillment-network/get-a-quote.html)：仓配项目通过需求询价；该页未公布统一付款方、费用清单或结算周期。
- [DHL：拼箱作业与计价](https://www.dhl.com/us-en/home/global-forwarding/products-and-solutions/ocean-freight/less-than-container-load.html)：拼箱货在始发集拼、目的侧拆分；DHL 产品示例按立方米或吨报价，仓库/作业点和海港可以衔接或合设。

## 补充设施依据

设施详情也提供作业依据链接，覆盖当前模式以外的设施。

- [商务部等九部门：回收体系](https://app.www.gov.cn/govdata/gov/202402/02/511741/article.html)：废旧家电家具的回收网点、储运集散和规范处理；仅用于相关品类回收设施说明，不推广为所有物品处置规程。
- [GS1：可回收周转载具标识](https://www.gs1.org/standards/id-keys/grai)：可重复使用的运输载具、设备的跟踪和分类；用于载具节点说明，不确定统一回收路径或服务价格。


## 逐站卡片：节点内部操作

卡片按本次经过顺序展示三个作业步骤。以下为基于公开资料的教学归纳，并非任何企业完整的现场操作规程；检验项目、监管手续、系统操作和具体顺序需按货类、场站及服务要求确认。资料未给出统一顺序的内容采用条件式表达，不把等待处理写成完成。

| 作业类型 | 归纳依据与适用边界 |
| --- | --- |
| 仓内收货、存储、拣货和发运 | [GS1 仓库管理](https://gs1.org.sg/transport-and-logistics/warehouse-management/)明确收、存、拣、发和标识核验；结合 GS1 物流互操作标准的交接、数量差异和出入库。起点写出库，终点写入库，中间仓写收存后按指令出库，不重复无关作业。 |
| 物料入厂、循环取货 | DHL 生产入厂资料及循环取货服务。供应商 B 仅装载自己的待取货，车辆经过不表示卸入供应商 A 的货物。 |
| 快件收寄、分拣和投递 | UPU DPS 的收集、分拣、运输、交付；记录接收、按去向分拣和交接为教学归纳，不虚构统一扫描次数。 |
| 海港、拼箱与拆箱 | DHL 海运及拼箱官方说明：始发集拼、装箱衔接海运、目的侧拆分交付。进出海港按运输方向区分；提货与装船均以满足相应条件为前提。 |
| 航空货站 | DHL 航空货运及[航空运输资料说明](https://www.dhl.com/ch-en/home/global-forwarding/freight-forwarding-education-center/air-cargo-documentation.html)：货物和资料核对、适用检查、航班运输衔接。检查不意味着所有货物采用同一安检/申报流程。 |
| 铁路场站 | DHL 铁路服务的货物装卸、铁路运输及公路接驳；不规定所有场站同一装载方式。 |
| 退货与维修 | DHL 仓储及服务物流的逆向接收、分类、处置和维修能力。按委托安排处理，不自动认定退款、重新销售或维修成功。 |
| 冷链、保税及回收 | 沿用顺丰冷链、菜鸟/海关和商务部资料的适用范围，温控、监管和回收处置均按适用要求表述。 |
| 异常与重复经过 | GS1 交接状态、差异记录，以及 UPS / FedEx 已列来源。拒收、未妥投、自提未取、成功拦截和退回接收分别显示；货损、延误、到货差异及通关待处理的终点不写完成发运/入库。取消只归纳撤销任务与核对货物状态，不虚构实物移动。 |

每个操作序列在数据中绑定来源；点击卡片后，地点介绍的依据链接同时包含该次作业的资料。卡片悬停可查看完整步骤和依据名称。


## 2026-10-13 场景覆盖与链路复查

### 已修正的错误或过度简化

- 退货原来只画接收侧一个分拣点。现提供“跨区域退货 / 网络返运”和“本地退货 / 直接退回”：前者用两个分拣点示意两侧网络衔接，后者直接交接。**数量不是退货的固定业务规则**，承运路由也可能仅经过一个或更多处理点。两个节点的设施角色按本次退货方向命名。
- 境内航空原来缺席。新增境内到达航空货站，分别提供航空快递与国内空运代理；实际起讫货站决定飞行曲线，不再写死仅境内—境外可飞行。
- 国内到达航空、内贸沿海到港作业不使用进口放行流程；国际进口按相反方向选择起运与到达作业。
- 维修完成后返送是新发运任务，站点不再使用逆向收寄流程；返供应商按退回接收处理，不假定原物品马上投入生产。
- 货损或延误路径中没有中转设施时，示例停在接收地点等待核查，避免一律退化为只有发货起点。
- 部分新增来源缺少范围说明，资料对话框曾可能显示空值。现补齐说明并加入校验。

### 模式覆盖矩阵

| 场景 | 已覆盖服务结构 | 本次新增 |
| --- | --- | --- |
| 供应链 | 合同仓配、FBA 履约案例、AWD 补货案例、仓网店配、越库、冷链、生产入厂、循环取货、退货、维修、海外仓、保税仓 | 本地直接退货、前置仓履约、门店库存发货、到店自提、废旧家电家具回收、托盘/周转箱回收再用；增加检验合格后入库、返供应商和维修完成后返送情景 |
| 快递快运 | 本土公路快递、境内航空快递、零担快运、同城点到点、跨境航空快递 | 境内航空快递；本土快递补充到货差异 |
| 货代 | 整车与拼载陆运、国内空运、国际空运进出口、国际海运出口整箱/拼箱与进口整箱、内贸沿海、公铁联运、海铁衔接 | 国内空运、进口空运、进口整箱海运、内贸沿海、海铁衔接 |

### 新增归纳依据

- [顺丰航空基地](https://www.sf-airlines.com/en/capability/hubs/index.html)：境内航空网络、航空基地与本地分拣网络衔接。不是所有快件必须走航空或固定经过同一枢纽。
- [国货航 2024 年报告](https://www.airchinacargo.com/cargo/tzzgx/jbxx/xxpl/0714/2c9865b6-97f43e60-0198-079a6220-0d11.pdf)：航空货站服务覆盖国内、国际进出港的收运、交接、计重、仓储、操作、交付、中转及文件/信息处理。国内航空结算不推定统一折算或价格。
- [DHL 退货与循环服务](https://www.dhl.com/us-en/home/supply-chain/solutions/returns-and-circularity.html)：退货收集运输、接收检查分类、按指令入库/返供应商/维修/回收。结合 UPU 网络结构和同城直送服务分别归纳代表性路径；该资料不指定分拣中心数量。
- [DHL 门店履约介绍](https://www.dhl.com/discover/en-in/b2b-advice/b2b-e-commerce-advice/omnichannel-logistics-store-website-fulfilment)：门店库存拣包交运及到店领取。市场实例用于解释结构，不推广印度时效或费用。
- [菜鸟仓网规划](https://tech.cainiao.com/productv2/ProductIndex/269)：区域仓、前置仓选址、库存及配送需求协同。补货和订单履约分别需要作业指令。
- [中远海控 2024 年中期材料](https://hold.coscoshipping.com/cms_files/filemanager/1631/attach/20248/65FC76FE0F54CDED993C5161A6D8E9D8.pdf)：内贸与海铁联运服务，归纳沿海和铁路到港后衔接海运的模式，不引用历史业务规模为现行数据。

### 未展开的边界

跨境陆路口岸、跨境铁路、内河驳船、海空联运及散杂货/大宗专用设施目前没有独立展开。医药、危险品、超限及工程等专用物流需补充相应法规、资质和设施，不能用普通货物示例代替。网页的“资料依据”同步说明这些范围；当前矩阵表示已覆盖的代表性服务，不宣称穷尽行业业务。


## 节点间移动名称

每种模式将节点间移动按上下游关系命名，显示在顺序卡片的箭头上方及地图路径旁。例如收寄点衔接叫揽收、分拣中心间叫干线运输、配送站点至地址叫派送、库存节点间按任务叫补货或调拨。名称是依据 UPU / GS1 等已有资料及所选模式的教学归纳，指实物移动用途，不表示新增加的必经设施或站内作业。

航空、海运和铁路干线分别标注；退回、改址、未妥投再投、转自提和维修后返送随本次方向更新。循环取货的供应商间段写“前往下一取货点”，表示车辆行程，避免误认为供应商间互相交货。自提模式只标货物送至自提点，不把顾客到店出行当成物流派送。蓝色独立配件线标“备件配送”。总览保持弱线示意，选择具体模式才显示这些名称。


## 地理布局调整

境内航空两端分置于始发、到达分拣节点的南侧，飞行横向连接两侧腹地；到达货站再向对应分拣节点和末端配送区域交接。库存与生产位于北部，快递/货运衔接设施分布在两侧中部，铁路走廊经过运输设施南侧，海港及拼拆箱作业沿岸配置。河道以南集中退货、维修、回收和载具设施；境外地区分别安排航空、库存交付、生产及沿海港区。

设施、地面环境、海运入口、铁路走廊和跨河桥的位置同步更新。坐标仅用于教学布局，不代表现实距离、行政区或既定企业路由；本次调整不改变所选服务的业务环节及结算依据。
