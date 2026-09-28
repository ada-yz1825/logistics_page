# 流程依据与模型边界

本图是一份跨场景作业模型，并非任何一家承运商的标准操作规程。主图节点的顺序表示选定情境的一种可执行路径；网点、分拣设施、中转枢纽、再次派送等是否发生，取决于服务产品和承运网络。不同来源分别描述不同边界，本图对它们进行组合，组合关系属于模型整理，不应解读为原始资料规定了一条固定的全行业链路。

| 页面节点或情境 | 依据 | 适用边界 |
| --- | --- | --- |
| 业务委托、取件、运输、交付、退回交接 | [GS1 Logistics Interoperability Model 1.1.1](https://ref.gs1.org/standards/logistics-interoperability/1.1.1/)，第 3 章、第 4.4.6 节 | GS1 描述跨主体的信息和实物交接；页面中的中文阶段名是归纳。 |
| 拒收后直接退回、预先申请退回、接货运输、目的地交付与收货确认 | 同上，第 4.4.6 节 | 原文示例为零售商配送中心至制造商配送中心；页面将其作为其他关系的参考模型，具体退回责任依合同确定。 |
| 始发集货、主要运输段、目的地接驳与可选中转 | 同上，第 4.5.2 节 | 原文为货代集货与拆货案例；用于说明多段网络的可能组织方式，不表示每票退货都经过全部设施。 |
| 收寄、分拣、发运、投递网络作业 | [UPU Domestic Postal System](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) | 邮政网络示例；借此展示退回件在网络中也需要按目的地处理，但各运营商设施名称与颗粒度不同。 |
| 无法投递后的退回发件人 | [UPU Convention Manual](https://www.upu.int/UPU/media/upu/files/aboutUpu/acts/06-manualsInThreeVolumes/actInThreeVolumesConventionManual202506En.pdf)，Article 19-205 | 国际邮政规则示例；实际暂存期限、通知、退回费用等依适用服务规则确定。 |
| 退回申请、收货、诊断、处置 | [ASCM SCOR Digital Standard](https://scor.ascm.org/) 的 Return 流程 | SCOR 给出逆向业务框架；退款、维修、复售、报废不必在每种场景发生。 |
| 交付前拦截、退回发件人、改址、自提保管 | [UPS Delivery Intercept](https://www.ups.com/us/en/support/tracking-support/change-delivery-options/delivery-intercept) | 承运商产品示例；拦截是请求，不保证成功，页面分别展示成功退回与未成功继续运输。 |
| 未扫描发运取消、未使用标签取消 | [FedEx Shipping FAQ](https://www.fedex.com/en-us/shipping/faqs.html)、[USPS Labels API](https://developers.usps.com/domesticlabelsv3) | 仅支持“揽收前取消”示例；已经交运的货物需走拦截或退回流程。 |
| 未妥投、再投、拒收 | [FedEx Delivery Manager FAQ](https://www.fedex.com/en-us/faq/delivery-manager.html) | 再投次数、通知、自提和最终退回均按具体服务规则执行。 |

退回网络节点由 GS1 的运输交接模型和 UPU 的网络处理作业综合建模。直达返运与网络返运互为可选路径；“退回中转”明确标为可选。任何一个图上节点都不等同于统一规定的行业术语或强制操作步骤。

## 页面用语核验（2026-09-28）

- **交易订单、物流委托、运单、实物揽收**分开处理。GS1 第 3.6.3 节把运输指令及其响应、取件确认、运输状态、交付确认列为不同信息交换；页面的首张卡片将可能跨主体的需求、受理与委托动作归纳展示，但没有把生成运单视为已经接货。
- **C2B 常规路径**仅表示个人向企业寄件；“退货单”开关才加入退货申请和企业受理。退货受理、接货、收货、检查和处置参考 ASCM SCOR Return，细节因退货政策而异。原先把退货申请写入所有 C2B 寄件的做法已纠正。
- **网络设施**是 [UPU Domestic Postal System](https://www.upu.int/en/Postal-Solutions/Technical-Solutions/Products/DPS---Domestic-Postal-System) 的收寄、分拣、发运网络和 GS1 第 4.5.2 节货代集散案例的综合示意。始发网点、两个枢纽、目的地分拨、末端站点与返运目的地分拣均明确标为可选；实际线路可跳过、合并或增加节点。这里的中文设施名是便于读图的归纳，不能反推为所有承运商统一设置。
- **运输中拦截**参考 [UPS Delivery Intercept](https://www.ups.com/us/en/support/tracking-support/change-delivery-options/delivery-intercept)。它是交付前提出的请求，退回发件人、改址、延期、自提等只是可申请选项；主图因此区分“拦截退回”和“拦截未成功”。
- **揽收前取消**参考 [FedEx 发运取消说明](https://www.fedex.com/en-us/shipping/create-shipping-label.html) 与 [USPS Domestic Labels API](https://developers.usps.com/domesticlabelsv3)。两者只证明特定服务下可取消尚未扫描的发运或未用标签；运费、退款和标签处理必须依所选服务规则，不能推定所有运单都能即时撤销。
- **末端异常**参考 [FedEx Delivery Manager FAQ](https://www.fedex.com/en-us/faq/delivery-manager.html)、[UPS Delivery Notice](https://www.ups.com/us/en/support/tracking-support/where-is-my-package/how-to-use-infonotice) 及 UPU Convention Manual 的无法投递退回条款。再投、自提、拒收、超期未取互为条件分支；次数、暂存期限和退回安排不是全行业统一值。
- **可选财务与处置**：ASCM SCOR Return 涵盖申请、受理、接收、诊断或测试、转移等，GS1 返回场景包含退回运输和收货确认。页面中退款、换货、维修、开票、保价等并非每票必经。页面已用“按需”“按规则”等明确条件，且删除了缺乏跨行业依据的“售后时效开始”等定性步骤。
