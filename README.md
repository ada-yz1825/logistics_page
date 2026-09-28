# 物流行业全链路流程图

静态交互网页，展示 C2C、C2B、B2C、B2B 的正向履约与逆向订单流程。

直接打开 `index.html` 即可浏览。页面引用 `assets/icons-3d/` 中的 15 枚 PNG 图标，因此请保留仓库目录结构。图标为 AI 绘制的环节示意，并非真实设施或设备照片。

流程图会根据窗口大小和当前节点数量调整卡片尺寸与间距，节点较多时收窄卡片以容纳更多内容。节点超出屏幕时，可用两侧悬浮按钮、键盘左右方向键、触控板或横向滚动逐步浏览；鼠标进入当前视口最右侧卡片时，流程向右移动约一个卡片的距离。点击卡片后，下方才更新该节点的定义、边界、作业顺序及资料依据。

进入左侧 C2B 场景后，其下方显示“退货单”开关；打开后展示 C2B 退货回寄链路，关闭后回到常规交付。切到其他业务场景时开关隐藏。主图上方的“流程情境”需要点击切换：常规交付、揽收前取消、运输中拦截退回、拦截未成功、拦截改址、未妥投再投、拒收退回、转站点自提、超期未取退回。返运可以展示直达或经过网点、分拣、中转的网络示例。业务场景也需要点击切换。卡片按事件发生的时间顺序排列，绿色卡片和回转箭头表示货物开始回流。拦截是否成功、可否改址、暂存期限和再次派送的次数以具体承运商服务规则为准。

图标以统一的提示词生成：`premium 3D isometric logistics icon, polished soft product render, navy blue, cool white, teal and restrained warm amber, transparent background, no text or logo`；每枚图标再指定对应物流对象。生成方式为内置 imagegen 工具。

左上角标识保存为 `assets/brand-logo.png`，同样使用内置 imagegen 生成。提示词为：`Premium 3D isometric logistics app logo icon, square composition. Navy rounded-square badge, dimensional cardboard parcel with teal stripe, one clear curved route arrow wrapping behind the parcel. Sophisticated soft studio lighting, glossy but restrained, strong legibility at 48 pixels. Genuine transparent background, no text, no letters, no watermark.`

页面中的参考资料可通过右上角“参考资料”查看；各环节详情也列出了对应依据。具体映射与模型边界见 `docs/source-map.md`。流程是跨行业示意模型，具体节点按运输产品与企业网络而变化。中文界面优先使用 Noto Sans SC，字体无法联网加载时回退至系统中文字体。
