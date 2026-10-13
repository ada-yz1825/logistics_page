# 物流行业全链路流程图

## 在线访问与自动发布

- 地图版首页：https://ada-yz1825.github.io/logistics_page/
- 地图版兼容地址：https://ada-yz1825.github.io/logistics_page/map.html
- 原流程图仅保留在仓库的 `index.html`，不发布到网站。

推送到 `main` 后，`.github/workflows/pages.yml` 自动检查页面及素材、打包静态文件并发布到 GitHub Pages。也可在 GitHub 的 Actions 页面选择 `Publish logistics website`，点击 `Run workflow` 手动发布。发布状态和记录见 https://github.com/ada-yz1825/logistics_page/actions 。

本地可运行 `python3 scripts/validate_site.py` 检查文件引用，再运行 `python3 scripts/build_site.py` 准备发布目录。仓库的 Settings → Pages → Source 应设为 GitHub Actions。发布内容仅包含地图网页及其所需素材；首页和 `map.html` 都显示地图，线上导航不提供原流程图入口。无需安装前端依赖。

面向物流新同事的静态交互网页，按 C2C、C2B、B2C、B2B 展示发运、业务回寄与异常退回的示例流程。

直接打开 `index.html` 即可浏览。页面引用 `assets/icons-3d/` 中的 15 枚环节 PNG 图标及 `assets/scenes/` 中的 4 枚业务场景 PNG 图标，因此请保留仓库目录结构。图标为 AI 绘制的环节示意，并非真实设施或设备照片。

流程图会根据窗口大小和当前节点数量调整卡片尺寸与间距，节点较多时收窄卡片以容纳更多内容。节点超出屏幕时，可用两侧悬浮按钮、键盘左右方向键、触控板或横向滚动逐步浏览；鼠标进入当前视口最右侧卡片时，流程向右移动约一个卡片的距离。点击卡片后，下方更新该环节的完整介绍、实际作业、上下游衔接和参考依据。下方不设置“读图要点”，相关概念解释直接融入正文。实物作业环节配有公开授权的实拍照片，保留完整画面并标注作者、拍摄场景、年份和授权。照片明细见 `docs/photo-credits.md`。

进入左侧 C2B 场景后，其下方显示“退货单”“回收单”“维修单”三个单据选项；选择后展示对应的申请、交件、运输、企业接收和处理链路，再次点击可回到常规交付。切到其他业务场景时开关隐藏。主图上方的“流程情境”需要点击切换：常规交付、揽收前取消、运输中拦截退回、拦截改址、未妥投再投、拒收退回、转站点自提、超期未取退回。选择“运输中拦截退回”后，右侧会展开“拦截未成功”分支；切换到其他情境时收起。运输路径选择显示在当前场景所属的个人发起或企业发起卡片内。C2B 隐藏运输组织选项，固定展示网点／分拣网络示例；其他场景的返运可展示直达或网络路径。业务场景也需要点击切换。卡片按事件发生的时间顺序排列，绿色卡片和回转箭头用于标识回寄或返运路径。异常分支保留原发运场景，回程接收方另按退回指令确认。拦截是否成功、可否改址、暂存期限和再次派送的次数以具体承运商服务规则为准。

环节图标以统一的提示词生成：`premium 3D isometric logistics icon, polished soft product render, navy blue, cool white, teal and restrained warm amber, transparent background, no text or logo`；每枚图标再指定对应物流对象。生成方式为内置 imagegen 工具。

业务场景图标也由内置 imagegen 生成，以现有图标为风格参照；通用提示词为 `premium 3D isometric logistics scenario selector icon, polished soft product render, rounded dimensional forms, navy blue, cool white, glossy teal, restrained warm amber, genuine transparent background, no text or logo`。四枚图标分别描绘个人交接包裹、个人向企业仓交件、企业仓向个人发货、企业仓之间移交货物。

左上角标识保存为 `assets/brand-logo.png`，同样使用内置 imagegen 生成。提示词为：`Premium 3D isometric logistics app logo icon, square composition. Navy rounded-square badge, dimensional cardboard parcel with teal stripe, one clear curved route arrow wrapping behind the parcel. Sophisticated soft studio lighting, glossy but restrained, strong legibility at 48 pixels. Genuine transparent background, no text, no letters, no watermark.`

页面中的参考资料可通过右上角“参考资料”查看；各环节详情也列出了对应依据。具体映射与模型边界见 `docs/source-map.md`。流程是跨行业示意模型，具体节点按运输产品与企业网络而变化。中文界面优先使用 Noto Sans SC，字体无法联网加载时回退至系统中文字体。

内容核验：2026-10-08。读图说明按“主线 → 场景比较 → 单据与实物状态 → 异常”组织。C2B 维修后的寄回属于另一次 B2C 发运；C2B 固定展示网络路径是界面示例，不是行业运输限制。

## 地图版：从业务场景认识物流服务

打开 `map.html` 使用地图；原 `index.html` 保留。左侧依次选择业务场景、服务模式和流程情景。

- 供应链：仓配、平台履约、库存补货、店配、越库、冷链、入厂、循环取货、跨区域与本地退货、备件维修、前置仓与门店履约、回收与载具周转、海外仓和保税仓配。
- 快递快运：本土公路与航空快递、本土零担快运、同城配送和跨境快递。
- 货代：整车、拼载、国内空运、国际海空进出口、海运拼箱、内贸沿海、公铁与海铁联运。

共 34 个服务模式、45 个设施节点。地图保留立体 PNG、园区、道路和运输动画；设施下方标明资源方角色，左上显示服务组织方及运力类型。航空货站与海港分开，增加拼箱/拆箱作业点和境外派送站点，按照生产、仓配、快递货运枢纽、服务园及海空口岸分布。

地图右上的链路介绍可切换服务能力与结算方式；结算分计费依据及付款与账期，各栏目附资料链接。公开资料没有披露的项目明确标注需询价或核对合同。企业产品与地区付款条款各自注明适用边界，具体映射见 `docs/map-source-map.md`。内容核对：2026-10-13。

点击设施更新右下介绍并平滑居中；底部卡片表示经过顺序，显示对应资源方及本次站内三步操作。服务模式最多显示六项，更多模式上下滚动。保留总览、聚焦、滚轮缩放、滑杆和拖动。非当前链路设施淡色显示，往返箭头沿道路两侧平行排列。地图仍是教学示意，不是实际地理位置、实时轨迹或统一行业收费规则。

页面不依赖前端框架。路径和桥梁几何缓存；点击设施只更新选中状态与介绍，复用链路与车辆动画。模式切换取消旧过渡动画；地图滚轮缩放以鼠标位置为中心，同一帧事件合并，右侧介绍支持独立滚动。
