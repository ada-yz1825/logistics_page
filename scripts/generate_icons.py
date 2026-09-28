"""Generate the matching PNG icon set used by the logistics flow page."""

from pathlib import Path
from PIL import Image, ImageDraw

OUT = Path(__file__).resolve().parents[1] / "assets" / "icons"
OUT.mkdir(parents=True, exist_ok=True)
S = 4
NAVY = "#174368"
TEAL = "#18a6a5"
PALE = "#cdeeea"
GOLD = "#ecb660"
WHITE = "#ffffff"


def box(d, xy, fill=WHITE, outline=NAVY, width=3, radius=7):
    x1, y1, x2, y2 = xy
    d.rounded_rectangle((x1*S, y1*S, x2*S, y2*S), radius=radius*S,
                        fill=fill, outline=outline, width=width*S)


def line(d, points, color=NAVY, width=3):
    pts = [(int(x*S), int(y*S)) for x, y in points]
    d.line(pts, fill=color, width=width*S, joint="curve")
    r = width*S/2
    for x, y in (pts[0], pts[-1]):
        d.ellipse((x-r, y-r, x+r, y+r), fill=color)


def circle(d, xy, fill=WHITE, outline=NAVY, width=3):
    x1, y1, x2, y2 = xy
    d.ellipse((x1*S, y1*S, x2*S, y2*S), fill=fill, outline=outline, width=width*S)


def parcel(d):
    box(d, (26, 34, 74, 72), PALE, radius=4)
    line(d, [(26, 45), (74, 45)])
    line(d, [(50, 35), (50, 72)], TEAL, 4)
    line(d, [(36, 27), (50, 20), (64, 27)], NAVY)


def truck(d):
    box(d, (17, 41, 62, 65), WHITE, radius=4)
    line(d, [(62, 48), (76, 48), (83, 56), (83, 65), (62, 65)], NAVY)
    line(d, [(67, 52), (75, 52)], TEAL)
    circle(d, (27, 60, 38, 71), NAVY, NAVY)
    circle(d, (66, 60, 77, 71), NAVY, NAVY)
    circle(d, (30, 63, 35, 68), WHITE, WHITE, 1)
    circle(d, (69, 63, 74, 68), WHITE, WHITE, 1)


def warehouse(d):
    line(d, [(17, 43), (50, 23), (83, 43)], NAVY, 4)
    box(d, (22, 42, 78, 77), WHITE, radius=2)
    box(d, (39, 53, 61, 77), PALE, radius=2)
    line(d, [(50, 53), (50, 77)], TEAL)


def order(d):
    box(d, (28, 20, 71, 78), WHITE)
    box(d, (40, 16, 59, 27), PALE, radius=3)
    for y in (41, 54, 67):
        circle(d, (37, y-3, 43, y+3), TEAL, TEAL, 1)
        line(d, [(49, y), (62, y)], NAVY, 2)


def handover(d):
    parcel(d)
    line(d, [(17, 66), (30, 78), (48, 78)], TEAL, 4)
    line(d, [(82, 66), (69, 78), (53, 78)], NAVY, 4)


def sort(d):
    line(d, [(50, 21), (50, 45), (26, 61)], NAVY, 4)
    line(d, [(50, 45), (74, 61)], NAVY, 4)
    box(d, (39, 16, 61, 34), PALE, radius=3)
    box(d, (15, 59, 37, 78), WHITE, radius=3)
    box(d, (63, 59, 85, 78), WHITE, radius=3)


def hub(d):
    circle(d, (35, 34, 65, 64), PALE)
    for x1, y1, x2, y2 in [(44, 12, 56, 24), (12, 44, 24, 56),
                            (76, 44, 88, 56), (44, 76, 56, 88)]:
        circle(d, (x1, y1, x2, y2), WHITE)
    for a, b in [((50, 35), (50, 24)), ((35, 50), (24, 50)),
                 ((65, 50), (76, 50)), ((50, 65), (50, 76))]:
        line(d, [a, b], TEAL, 3)


def transfer(d):
    box(d, (18, 32, 42, 56), PALE, radius=4)
    box(d, (58, 44, 82, 68), WHITE, radius=4)
    line(d, [(43, 42), (63, 42), (63, 35)], TEAL, 4)
    line(d, [(57, 35), (63, 29), (69, 35)], TEAL)
    line(d, [(57, 59), (37, 59), (37, 66)], NAVY, 4)
    line(d, [(31, 66), (37, 72), (43, 66)], NAVY)


def station(d):
    box(d, (20, 29, 80, 77), WHITE, radius=4)
    box(d, (29, 43, 45, 58), PALE, radius=2)
    box(d, (55, 43, 71, 58), PALE, radius=2)
    line(d, [(20, 37), (80, 37)], TEAL, 4)
    line(d, [(36, 63), (64, 63)], NAVY)


def delivery(d):
    box(d, (25, 29, 75, 76), WHITE, radius=4)
    line(d, [(25, 42), (75, 42)], NAVY)
    line(d, [(38, 54), (49, 65), (65, 48)], TEAL, 5)


def settlement(d):
    box(d, (27, 19, 73, 79), WHITE)
    line(d, [(37, 37), (63, 37)], TEAL)
    line(d, [(37, 48), (63, 48)], NAVY, 2)
    line(d, [(37, 59), (53, 59)], NAVY, 2)
    circle(d, (56, 58, 69, 71), PALE, TEAL, 2)


def reverse(d):
    d.arc((19*S, 19*S, 81*S, 81*S), start=50, end=310, fill=TEAL, width=5*S)
    line(d, [(19, 53), (21, 70), (36, 63)], TEAL, 5)
    box(d, (39, 40, 64, 62), PALE, radius=3)


def approval(d):
    box(d, (28, 21, 72, 79), WHITE)
    for y in (39, 50, 61):
        line(d, [(38, y), (62, y)], NAVY, 2)
    circle(d, (57, 56, 79, 78), PALE, TEAL, 3)
    line(d, [(62, 67), (67, 72), (75, 62)], TEAL, 3)


def calendar(d):
    box(d, (20, 28, 80, 77), WHITE)
    line(d, [(20, 42), (80, 42)], TEAL, 4)
    for x in (34, 66):
        line(d, [(x, 21), (x, 35)], NAVY, 4)
    circle(d, (39, 50, 50, 61), PALE, TEAL, 2)
    circle(d, (55, 50, 66, 61), PALE, TEAL, 2)


def inspect(d):
    box(d, (23, 29, 63, 67), WHITE, radius=4)
    circle(d, (49, 45, 72, 68), PALE, TEAL, 4)
    line(d, [(67, 64), (81, 78)], NAVY, 5)


def recycle(d):
    d.arc((20*S, 20*S, 80*S, 80*S), 210, 330, fill=TEAL, width=5*S)
    d.arc((20*S, 20*S, 80*S, 80*S), 30, 150, fill=NAVY, width=5*S)
    line(d, [(72, 25), (82, 25), (79, 38)], TEAL, 4)
    line(d, [(28, 75), (18, 75), (21, 62)], NAVY, 4)
    box(d, (39, 40, 61, 60), PALE, radius=3)


ICONS = {
    "order": order, "parcel": parcel, "handover": handover,
    "station": station, "sort": sort, "hub": hub,
    "truck": truck, "transfer": transfer, "warehouse": warehouse,
    "delivery": delivery, "settlement": settlement, "reverse": reverse,
    "approval": approval, "calendar": calendar, "inspect": inspect,
    "recycle": recycle,
}

for name, draw_icon in ICONS.items():
    image = Image.new("RGBA", (100*S, 100*S), (0, 0, 0, 0))
    draw_icon(ImageDraw.Draw(image))
    image.resize((100, 100), Image.Resampling.LANCZOS).save(OUT / f"{name}.png")

print(f"Generated {len(ICONS)} icons in {OUT}")
