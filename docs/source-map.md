# 流程依据与模型边界

本图供一般国内寄递和货运入门学习使用。中文环节名、路径组合和教学提示是本项目的归纳，不是一家承运商的操作规程。设施可以合并、省略或增加；信息记录、费用处理也可能与实物流动并行。跨境清关、危险品等专项流程不在图中展开。

## 资料用途与适用范围

| 内容 | 资料 | 本图如何使用 |
| --- | --- | --- |
| 委托、接货、运输、交付与仓库收货 | [GS1 LIM 1.1.1](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)，第 3.5、3.6 章及第 4.4.6 节 | 区分信息委托与实物交接、承运方交付与接收方收货。原文以企业间业务为范围；应用到个人场景属于教学归纳。 |
| 集货、多段运输与线路衔接 | GS1 LIM 第 4.5.2 节 | 说明可能的网络结构，不规定每票货都经过全部设施。 |
| 收寄、分拣、发运与投递 | [UPU Domestic Postal System](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) | 使用邮政网络作业作示例；各企业设施名称及功能划分可能不同。 |
| 履约、退回、检测及处置框架 | [ASCM SCOR Digital Standard 概览](https://www.ascm.org/corporate-solutions/standards-tools/scor-ds/) | 参考 Order、Fulfill、Return 的业务边界。回收与维修卡片是框架下的场景归纳，不是逐项照录的 SCOR 标准步骤。 |
| 交付前拦截与改址 | [UPS Delivery Intercept](https://www.ups.com/us/en/support/tracking-support/change-delivery-options/delivery-intercept) | 美国服务示例。区分申请、执行成功、未完成；收费与适用条件不推广为统一规则。 |
| 末端未交付、再投、自提与拒收 | [FedEx Delivery Manager FAQ](https://www.fedex.com/en-us/faq/delivery-manager.html) | 美国服务示例。图中拒收分支展示交付时拒收；再投次数、保管期限和通知方式依实际服务。 |
| 无法投递后的退回 | [UPU Convention Manual](https://www.upu.int/UPU/media/upu/files/aboutUpu/acts/06-manualsInThreeVolumes/actInThreeVolumesConventionManual202506En.pdf) | 国际邮政示例，仅说明无法投递后可能退回；不用于规定国内寄递期限。 |
| 揽收前取消 | [FedEx Shipping Label](https://www.fedex.com/en-us/shipping/create-shipping-label.html)、[USPS Labels API](https://developers.usps.com/domesticlabelsv3) | 特定服务下的未扫描发运或未用标签处理。实际接货与扫描可能有时间差，应先核查实物状态。 |
| 维修检测、费用评估与服务选择 | [Apple 维修服务](https://support.apple.com/zh-cn/iphone/repair) | 设备服务示例，支持先检测后确定具体方案及费用的区分，不把品牌保修条款推广到其他维修服务。 |
| 回收估价、检测后调整与去向 | [Apple 折抵与回收](https://www.apple.com.cn/shop/trade-in) | 设备服务示例，说明回收可能有价值折抵或免费处理，估价可能复核。其他品类还可能收费，具体约定不同。 |
| 物流活动范围 | [CSCMP 物流管理定义](https://cscmp.org/CSCMP/Educate/SCM_Definitions_and_Glossary_of_Terms.aspx) | 用于整体物流范围说明，不作为具体退款或维修操作的依据。 |

## 内容核验与教学边界（2026-10-08）

- **场景按实物发收双方划分。** 商家向个人发货是 B2C，个人回寄企业是另一程 C2B；平台代下单不改变这两个角色。异常退回分支仍保留原发运场景，回程送至指令指定的接收方。
- **单据与实物分开看。** 业务订单、退货／回收／维修单、物流委托、运单和实际揽收属于不同记录或事件。建立单据不代表已经接货，扫描也不一定与实物交接同步。
- **交付与业务处理分开看。** B2B 交付核对件数、外观后签署凭证；企业的入库、质量检验、退款或维修另行确认。退款和运费结算可能提前、延后或并行。
- **异常接收方按回程确认。** C2B 普通寄件在拒收或拦截退回后，可由原个人寄件人或指定方接收；C2B 退货单中的企业收货属于另一业务路径。
- **路径按示例解释。** 改址节点只确认新地址与路由，后续仍需运输交付。再投分支展示再次交付成功的路径，失败时需继续异常处理。整车／零担与直达／网络并非同一分类维度，B2B 两条路径是组合示例；C2B 固定展示网络路径是界面设计，不是行业限制。
- **维修返还另有一程。** 企业寄回个人的实物运输属于 B2C；维修完成、返还发运和个人收到物品分别确认。维修单结案时点以具体服务规则为准。
- **下方说明补充教学信息。** 每个环节用连续正文说明目的、实际作业、上下游衔接与概念边界，不设置“读图要点”栏目。实拍照片的来源与授权单列在 `photo-credits.md`。实际核查时先追踪货物，再对照交接记录和业务单据。

本次核验以 GS1、UPU、ASCM 和公开服务说明为依据，确认的是上述概念和模型边界；具体企业的政策、费用、授权、时限与单据名称需按其业务资料执行。
