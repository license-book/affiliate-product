import HeroCarousel from "../components/HeroCarousel";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import ProductFeed from "../components/ProductFeed";
import RecentlyViewed from "../components/RecentlyViewed";
import LongtailDiscovery from "../components/LongtailDiscovery";
import PromoBannerCard from "../components/PromoBannerCard";
import PurposeRecommendations from "../components/PurposeRecommendations";
import BestSellerSection from "../components/BestSellerSection";
import HotDealSection from "../components/HotDealSection";
import {promoBanners} from "../lib/promo-banners";
import {demoProducts} from "../lib/demo-products";
import {getProductPool} from "../lib/adpick-products";
import {categoryTree} from "../lib/category-tree";
const categories=Object.keys(categoryTree);
const categoryIcons:Record<string,React.ReactNode>={
"식품":<svg viewBox="0 0 24 24"><path d="M4 7h16M6 7l1 13h10l1-13M9 4h6M9 11h6M10 15h4"/></svg>,
"생활/주방":<svg viewBox="0 0 24 24"><path d="M5 5h14v14H5zM8 9h8M8 13h8M8 17h5"/></svg>,
"패션":<svg viewBox="0 0 24 24"><path d="m8 4 4 3 4-3 5 5-3 3v9H6v-9L3 9l5-5Z"/></svg>,
"뷰티":<svg viewBox="0 0 24 24"><path d="M9 3h6v5l2 3v10H7V11l2-3V3ZM9 8h6"/></svg>,
"디지털/가전":<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
"건강":<svg viewBox="0 0 24 24"><path d="M12 21S4 16 4 9a4 4 0 0 1 7-3l1 1 1-1a4 4 0 0 1 7 3c0 7-8 12-8 12Z"/></svg>,
"유아/키즈":<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M5 21c0-4 3-7 7-7s7 3 7 7"/></svg>,
"반려동물":<svg viewBox="0 0 24 24"><path d="M8 11c-2-3-5 0-3 2M16 11c2-3 5 0 3 2M8 18c0-5 8-5 8 0 0 4-8 4-8 0Z"/></svg>,
"스포츠/레저":<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M5 8c4 2 10 2 14 0M5 16c4-2 10-2 14 0"/></svg>,
"가구/인테리어":<svg viewBox="0 0 24 24"><path d="M4 12h16v7H4zM6 12V8h12v4M6 19v2M18 19v2"/></svg>,
"자동차용품":<svg viewBox="0 0 24 24"><path d="m5 9 2-5h10l2 5 2 3v6H3v-6zM6 14h3M15 14h3"/></svg>,
"취미/문구":<svg viewBox="0 0 24 24"><path d="M5 19 16 8l3 3L8 22H5zM14 6l2-2 4 4-2 2M4 5h7"/></svg>
};

const purposeIcons:Record<string,React.ReactNode>={
"혼자 살 때":<svg viewBox="0 0 24 24"><path d="M4 11 12 4l8 7v9H4zM9 20v-6h6v6"/></svg>,
"선물할 때":<svg viewBox="0 0 24 24"><path d="M4 10h16v11H4zM3 6h18v4H3zM12 6v15M12 6c-5 0-5-5-2-5 2 0 2 3 2 5Zm0 0c5 0 5-5 2-5-2 0-2 3-2 5Z"/></svg>,
"이사할 때":<svg viewBox="0 0 24 24"><path d="M3 11 12 4l9 7M5 10v10h14V10M8 20v-6h8v6M17 5h3v5"/></svg>,
"출산 준비":<svg viewBox="0 0 24 24"><path d="M8 10a4 4 0 0 1 8 0c0 5-4 9-4 9s-4-4-4-9ZM10 7h4M9 21h6"/></svg>,
"여행 갈 때":<svg viewBox="0 0 24 24"><path d="M7 6h10v15H7zM9 6V4h6v2M5 10h14M10 21v1M14 21v1"/></svg>,
"공부·업무":<svg viewBox="0 0 24 24"><path d="M4 5h16v12H4zM8 21h8M12 17v4M8 9h8M8 12h5"/></svg>,
"차량용":<svg viewBox="0 0 24 24"><path d="m5 9 2-5h10l2 5 2 3v6h-2v2h-3v-2H8v2H5v-2H3v-6zM6 13h3M15 13h3"/></svg>,
"취미생활":<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 0 18c2 0 2-3 4-3h2a3 3 0 0 0 3-3c0-7-4-12-9-12Z"/><circle cx="8" cy="9" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="10" r="1"/></svg>};
const slides:readonly (readonly [string,string,string,string,string,string])[]=[
["today","1 / 6","오늘 뭐 살지|고민된다면?","당신의 일상을 더 좋게, 오늘의 추천 상품","/search?q=오늘의추천","https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=82"],
["best","2 / 6","지금, 가장 인기있는|BEST 100","사람들이 많이 보는 상품만 모았어요","/#best","https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82"],
["under","3 / 6","지금 많이 찾는|상품을 한눈에","요즘 관심이 모이는 상품을 빠르게 둘러보세요","/search?q=인기상품","https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=82"],
["single","4 / 6","1인가구를 위한|스마트한 선택","작은 공간도 더 특별하게","/search?q=1인가구","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=82"],
["newly","5 / 6","신혼·이사 준비도|9호와 함께","새로운 시작을 더 설레게","/search?q=신혼가전","https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=82"],
["digital","6 / 6","디지털·PC로|더 넓은 가능성","일도, 취미도, 더 즐겁게","/search?q=디지털","https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82"]
];
export default async function Home(){const pool=await getProductPool();const use=(key:string,fallback=demoProducts)=>pool[key]?.length?pool[key]:fallback;return <main className="athlerHome"><SiteHeader/><HeroCarousel slides={slides}/><nav className="categoryIcons" id="categories">{categories.map((x)=><Link key={x} href={`/category?group=${encodeURIComponent(x)}`}><span>{categoryIcons[x]}</span><b>{x}</b></Link>)}</nav><div id="recent"><RecentlyViewed/></div><section className="feedSection" id="best"><div className="feedTitle"><div><h2>지금 많이 보는 상품</h2></div><Link href="/search?q=인기상품">더보기 ›</Link></div><ProductFeed limit={8} variant="showcase" products={use("popular")}/></section><LongtailDiscovery/><BestSellerSection pools={{BEST:use("bestseller"),"식품":use("food"),"디지털·가전":use("digital"),"패션·뷰티":use("fashion"),"리빙·육아":use("living"),"여행·레저":use("travel")}}/><HotDealSection products={use("deals")}/><section className="homeDiscovery"><div className="feedTitle"><div><h2>가격으로 골라보기</h2><p>예산과 혜택부터 정해보세요</p></div><Link href="/category">전체보기 ›</Link></div><div className="homePricePicks"><Link className="homePriceHero" href="/search?q=5000원이하"><small>RANDOM PICK</small><strong>5천원 이하<br/>뜻밖의 발견</strong><span>랜덤 상품 보기 →</span></Link><div className="homePriceChips">{["1만원 이하","3만원 이하","가성비","가격하락","쿠폰 상품","무료배송"].map(x=><Link href={`/search?q=${encodeURIComponent(x)}`} key={x}>{x}<span>›</span></Link>)}</div></div></section><section className="homePromoSlot"><PromoBannerCard banner={promoBanners[1]}/></section><section className="homePromoDuo"><PromoBannerCard banner={promoBanners[2]} compact/><PromoBannerCard banner={promoBanners[3]} compact/></section><section className="feedSection feedSection--soft"><div className="feedTitle"><div><h2>가격이 내려간 상품</h2><p>최근 가격 변화를 확인해보세요</p></div><Link href="/search?q=가격하락">더보기 ›</Link></div><ProductFeed limit={5} variant="list" products={use("priceDrop")}/></section><section className="feedSection"><div className="feedTitle"><div><h2>1만원 이하 인기상품</h2></div><Link href="/search?q=1만원이하">더보기 ›</Link></div><ProductFeed limit={8} variant="rail" products={use("under10000")}/></section><PurposeRecommendations pools={{"혼자 살 때":use("single"),"선물할 때":use("gift"),"이사할 때":use("move"),"출산 준비":use("baby"),"여행 갈 때":use("trip"),"공부·업무":use("work"),"차량용":use("car"),"취미생활":use("hobby")}}/><section className="feedSection homeRandom"><div className="feedTitle"><div><h2>오늘의 랜덤 발견</h2><p>평소엔 지나쳤을 상품을 만나보세요</p></div><Link href="/search?q=랜덤상품">다시 발견하기 ↻</Link></div><ProductFeed limit={6} variant="grid" products={use("random")}/></section><footer className="mobileFooter"><strong>9HO</strong><p>상품을 직접 판매하지 않는 가격비교·추천 서비스입니다.<br/>상품 정보와 가격은 판매처에 따라 변경될 수 있습니다.</p><nav><Link href="/about">서비스 안내</Link><Link href="/terms">이용약관</Link><Link href="/privacy">개인정보처리방침</Link></nav><small>일부 링크를 통한 구매 시 9HO가 제휴 수수료를 받을 수 있습니다.</small><em>© 2026 9HO</em></footer></main>}