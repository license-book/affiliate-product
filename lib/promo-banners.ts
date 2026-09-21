export type PromoBanner={id:string;eyebrow:string;title:string;description:string;href:string;tone:"budget"|"studio"|"digital"|"travel"};
export const promoBanners:PromoBanner[]=[
{id:"budget",eyebrow:"9HO PRICE PICK",title:"5천원으로 찾는 뜻밖의 발견",description:"부담 없는 가격부터 가볍게 둘러보세요",href:"/search?q=5000원이하",tone:"budget"},
{id:"studio",eyebrow:"SMALL SPACE",title:"작은 집을 더 편하게",description:"원룸·1인가구에 잘 맞는 생활 아이템",href:"/pick/appliances-for-small-studio",tone:"studio"},
{id:"digital",eyebrow:"DIGITAL PICK",title:"책상 위를 바꾸는 디지털",description:"노트북부터 모니터·주변기기까지",href:"/category/%EB%94%94%EC%A7%80%ED%84%B8/%EB%85%B8%ED%8A%B8%EB%B6%81%C2%B7PC",tone:"digital"},
{id:"travel",eyebrow:"TRAVEL READY",title:"여행 준비, 필요한 것부터",description:"짐은 가볍게 준비는 빠르게",href:"/pick/carry-on-travel-items",tone:"travel"}
];