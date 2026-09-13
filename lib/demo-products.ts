export type DemoProduct = {
  slug: string;
  category: string;
  name: string;
  model: string;
  price: number;
  sellers: { name: string; price: number }[];
  tone: string;
};

export const demoProducts: DemoProduct[] = [
  { slug: "galaxybook4-pro", category: "노트북", name: "삼성 갤럭시북4 프로", model: "NT940XGQ-A51A", price: 1590000, tone: "laptop", sellers: [{ name: "11번가", price: 1590000 }, { name: "쿠팡", price: 1598000 }, { name: "G마켓", price: 1610000 }, { name: "옥션", price: 1615000 }] },
  { slug: "lg-gram-17", category: "노트북", name: "LG 그램 17", model: "17ZD90S-GX56K", price: 1890000, tone: "laptop light", sellers: [{ name: "쿠팡", price: 1890000 }, { name: "11번가", price: 1898000 }, { name: "G마켓", price: 1910000 }, { name: "옥션", price: 1925000 }] },
  { slug: "robot-vacuum", category: "생활가전", name: "로봇청소기 S8 Pro", model: "S8-PRO", price: 1390000, tone: "vacuum", sellers: [{ name: "11번가", price: 1390000 }, { name: "쿠팡", price: 1405000 }, { name: "G마켓", price: 1419000 }] },
  { slug: "smartphone-16", category: "스마트폰", name: "스마트폰 16 256GB", model: "PHONE16-256", price: 1250000, tone: "phone", sellers: [{ name: "쿠팡", price: 1250000 }, { name: "11번가", price: 1269000 }, { name: "G마켓", price: 1280000 }] },
  { slug: "oled-tv-77", category: "TV·가전", name: "77인치 OLED TV", model: "OLED77-4K", price: 3490000, tone: "tv", sellers: [{ name: "11번가", price: 3490000 }, { name: "G마켓", price: 3520000 }, { name: "옥션", price: 3545000 }] },
  { slug: "air-purifier", category: "생활가전", name: "대용량 공기청정기", model: "AIR-360", price: 599000, tone: "appliance", sellers: [{ name: "쿠팡", price: 599000 }, { name: "11번가", price: 615000 }] },
  { slug: "monitor-32", category: "디지털", name: "32인치 4K 모니터", model: "MON32-4K", price: 469000, tone: "monitor", sellers: [{ name: "11번가", price: 469000 }, { name: "쿠팡", price: 479000 }, { name: "G마켓", price: 485000 }] },
  { slug: "earbuds-pro", category: "디지털", name: "무선 이어폰 Pro", model: "BUDS-PRO", price: 229000, tone: "audio", sellers: [{ name: "쿠팡", price: 229000 }, { name: "11번가", price: 235000 }] },
];

export const formatWon = (value: number) => new Intl.NumberFormat("ko-KR").format(value) + "원";
