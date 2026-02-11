const PRODUCTS_CSV_DATA = `id,group_id,product_name,variant_label,thickness,price,image,is_default
1,knauf_unifit,Knauf Unifit,UNIFIT 032,60,"40,1",images/product-image.webp,1
2,knauf_unifit,Knauf Unifit,UNIFIT 032,80,"53,3",images/product-image.webp,0
3,knauf_unifit,Knauf Unifit,UNIFIT 032,100,"66,5",images/product-image.webp,0
4,knauf_unifit,Knauf Unifit,UNIFIT 032,120,"79,9",images/product-image.webp,0
5,knauf_unifit,Knauf Unifit,UNIFIT 032,140,"93,4",images/product-image.webp,0
6,knauf_unifit,Knauf Unifit,UNIFIT 032,150,"99,8",images/product-image.webp,0
7,knauf_unifit,Knauf Unifit,UNIFIT 032,160,"106,6",images/product-image.webp,0
8,knauf_unifit,Knauf Unifit,UNIFIT 032,180,"119,7",images/product-image.webp,0
9,knauf_unifit,Knauf Unifit,UNIFIT 032,200,"133,4",images/product-image.webp,0
10,knauf_unifit,Knauf Unifit,UNIFIT 033,50,"28,7",images/product-image.webp,0
11,knauf_unifit,Knauf Unifit,UNIFIT 033,80,"45,7",images/product-image.webp,0
12,knauf_unifit,Knauf Unifit,UNIFIT 033,100,"57,4",images/product-image.webp,0
13,knauf_unifit,Knauf Unifit,UNIFIT 033,120,"68,9",images/product-image.webp,0
14,knauf_unifit,Knauf Unifit,UNIFIT 033,140,"80,2",images/product-image.webp,0
15,knauf_unifit,Knauf Unifit,UNIFIT 033,150,"86,1",images/product-image.webp,0
16,knauf_unifit,Knauf Unifit,UNIFIT 033,160,"91,8",images/product-image.webp,0
17,knauf_unifit,Knauf Unifit,UNIFIT 033,180,"103,1",images/product-image.webp,0
18,knauf_unifit,Knauf Unifit,UNIFIT 033,200,"114,8",images/product-image.webp,0
19,knauf_unifit,Knauf Unifit,UNIFIT 035,50,"22,4",images/product-image.webp,0
20,knauf_unifit,Knauf Unifit,UNIFIT 035,60,"26,6",images/product-image.webp,0
21,knauf_unifit,Knauf Unifit,UNIFIT 035,80,"35,7",images/product-image.webp,0
22,knauf_unifit,Knauf Unifit,UNIFIT 035,100,"44,5",images/product-image.webp,0
23,knauf_unifit,Knauf Unifit,UNIFIT 035,120,"53,7",images/product-image.webp,0
24,knauf_unifit,Knauf Unifit,UNIFIT 035,140,"62,4",images/product-image.webp,0
25,knauf_unifit,Knauf Unifit,UNIFIT 035,150,"67",images/product-image.webp,0
26,knauf_unifit,Knauf Unifit,UNIFIT 035,160,"71,2",images/product-image.webp,0
27,knauf_unifit,Knauf Unifit,UNIFIT 035,180,"80,2",images/product-image.webp,0
28,knauf_unifit,Knauf Unifit,UNIFIT 035,200,"89,4",images/product-image.webp,0
29,knauf_unifit,Knauf Unifit,UNIFIT 035,220,"98,4",images/product-image.webp,0
30,knauf_unifit,Knauf Unifit,UNIFIT 035,240,"107,1",images/product-image.webp,0
31,knauf_unifit,Knauf Unifit,UNIFIT 037,50,"18,2",images/product-image.webp,0
32,knauf_unifit,Knauf Unifit,UNIFIT 037,60,"21,6",images/product-image.webp,0
33,knauf_unifit,Knauf Unifit,UNIFIT 037,80,"29",images/product-image.webp,0
34,knauf_unifit,Knauf Unifit,UNIFIT 037,100,"35,9",images/product-image.webp,0
35,knauf_unifit,Knauf Unifit,UNIFIT 037,120,"43,4",images/product-image.webp,0
36,knauf_unifit,Knauf Unifit,UNIFIT 037,140,"50,4",images/product-image.webp,0
37,knauf_unifit,Knauf Unifit,UNIFIT 037,150,"54,3",images/product-image.webp,0
38,knauf_unifit,Knauf Unifit,UNIFIT 037,160,"57,8",images/product-image.webp,0
39,knauf_unifit,Knauf Unifit,UNIFIT 037,180,"64,7",images/product-image.webp,0
40,knauf_unifit,Knauf Unifit,UNIFIT 037,200,"72,2",images/product-image.webp,0
41,knauf_naturoll,Knauf Naturoll,NORMAL,50,"13,4",images/product-image.webp,1
42,knauf_naturoll,Knauf Naturoll,NORMAL,100,"27,3",images/product-image.webp,0
43,knauf_naturoll,Knauf Naturoll,PRO,50,"15,3",images/product-image.webp,0
44,knauf_naturoll,Knauf Naturoll,PRO,60,"18,7",images/product-image.webp,0
45,knauf_naturoll,Knauf Naturoll,PRO,80,"24,7",images/product-image.webp,0
46,knauf_naturoll,Knauf Naturoll,PRO,100,"31",images/product-image.webp,0
47,knauf_naturoll,Knauf Naturoll,PRO,120,"37,2",images/product-image.webp,0
48,knauf_naturoll,Knauf Naturoll,PRO,140,"43,4",images/product-image.webp,0
49,knauf_naturoll,Knauf Naturoll,PRO,150,"46,5",images/product-image.webp,0
50,knauf_naturoll,Knauf Naturoll,PRO,160,"49,4",images/product-image.webp,0
51,knauf_naturoll,Knauf Naturoll,PRO,180,"55,7",images/product-image.webp,0
52,knauf_naturoll,Knauf Naturoll,PRO,200,"61,9",images/product-image.webp,0
53,knauf_naturoll,Knauf Naturoll,PLUS,50,"14,5",images/product-image.webp,0
54,knauf_naturoll,Knauf Naturoll,PLUS,60,"17,3",images/product-image.webp,0
55,knauf_naturoll,Knauf Naturoll,PLUS,80,"22,9",images/product-image.webp,0
56,knauf_naturoll,Knauf Naturoll,PLUS,100,"29",images/product-image.webp,0
57,knauf_naturoll,Knauf Naturoll,PLUS,120,"34,9",images/product-image.webp,0
58,knauf_naturoll,Knauf Naturoll,PLUS,140,"40,3",images/product-image.webp,0
59,knauf_naturoll,Knauf Naturoll,PLUS,150,"43,4",images/product-image.webp,0
60,knauf_naturoll,Knauf Naturoll,PLUS,160,"46,2",images/product-image.webp,0
61,knauf_naturoll,Knauf Naturoll,PLUS,180,"52,1",images/product-image.webp,0
62,knauf_naturoll,Knauf Naturoll,PLUS,200,"57,8",images/product-image.webp,0
63,knauf_naturoll,Knauf Naturoll,PLUS,240,"69,1",images/product-image.webp,0
64,knauf_tp435b,Knauf TP 435 B,TP 435 B,100,"62,2",images/product-image.webp,1
65,knauf_tp435b,Knauf TP 435 B,TP 435 B,120,"74,6",images/product-image.webp,0
66,knauf_tp435b,Knauf TP 435 B,TP 435 B,160,"95,9",images/product-image.webp,0
67,knauf_tp435b,Knauf TP 435 B,TP 435 B,180,"105,1",images/product-image.webp,0
68,knauf_naturboard,Knauf Naturoboard,NATURBOARD,50,"22,4",images/product-image.webp,1
69,knauf_naturboard,Knauf Naturoboard,NATURBOARD,75,"35,7",images/product-image.webp,0
70,knauf_naturboard,Knauf Naturoboard,NATURBOARD,100,"44,5",images/product-image.webp,0
71,knauf_naturboard,Knauf Naturoboard,NATURBOARD,150,"67",images/product-image.webp,0
72,knauf_naturboard,Knauf Naturoboard,NATURBOARD,200,"89,4",images/product-image.webp,0
73,knauf_akustikboard,Knauf Akustik Board,AKUSTIK BOARD,50,"15,5",images/product-image.webp,1
74,knauf_akustikboard,Knauf Akustik Board,AKUSTIK BOARD,75,"23,3",images/product-image.webp,0
75,knauf_akustikboard,Knauf Akustik Board,AKUSTIK BOARD,100,"31,1",images/product-image.webp,0
76,knauf_akustikboard,Knauf Akustik Board,AKUSTIK BOARD,150,"46,6",images/product-image.webp,0
77,knauf_ekoboard,Knauf Ekoboard,Ekoboard,50,"13,3",images/product-image.webp,1
78,knauf_ekoboard,Knauf Ekoboard,Ekoboard,75,"19,9",images/product-image.webp,0
79,knauf_ekoboard,Knauf Ekoboard,Ekoboard,100,"26,6",images/product-image.webp,0`;
