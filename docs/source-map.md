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
