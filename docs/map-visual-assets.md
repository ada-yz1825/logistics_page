# 地图场景素材

2026-10-10。保留原流程页的 PNG 图标，为独立地图新增 7 个立体场景，使用内置 imagegen 生成。用户提供的海报用于判断空间直观程度；生成时以本项目 warehouse.png、station.png 为材质、配色和视角参考。

## 统一提示词

Use case: stylized-concept. Asset type: transparent PNG for an interactive logistics world map. Generate a single compact isometric 3D miniature scene matching the reference warehouse/station images: polished rounded navy blue, cool white, teal accents, restrained warm amber, high quality soft product render, elevated front-left isometric viewpoint. Real-world recognizable objects rather than abstract symbols. Genuine transparent background. Entire scene fully visible with generous transparent margin. No text, logo, watermark, border, surrounding map or arrows. Reference images are style/color/material references only, not edit targets.

## 场景主体

| 文件 | 主体补充 |
| --- | --- |
| factory.png | Industrial factory compound, sawtooth hall, chimney, loading bay, pallets/cartons and a tiny truck. |
| residence.png | Two apartment buildings, entry path, tiny courier handing a carton to a resident and parcel cart. |
| shop.png | Neighborhood retail store, teal awning, shelves, carton stack and worker. |
| repair.png | Cutaway electronics workshop, technician, bench, circuit board, tools, parts and carton. |
| seaport.png | Quay crane, containers, cargo vessel and yard tractor. |
| rail.png | Rail track, container wagon, gantry, containers and truck. |
| airport.png | Air cargo terminal, cargo aircraft, apron, pallet loader and dollies. |

场景保存在 assets/map/scenes/，发布用素材缩至 640 像素，保留透明通道。原生成文件留在 Codex 默认生成目录。道路、地块、树木、标签和箭头由页面绘制；设施位置按教学关系安排，并非真实园区的地理位置。链路上的车辆用于提示运输，不表达实时定位或指定运输产品。
