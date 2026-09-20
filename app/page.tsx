import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import ProductFeed from "../components/ProductFeed";
import RecentlyViewed from "../components/RecentlyViewed";
const categories=["홈","전체","디지털","가전","생활","주방","패션","뷰티"];
const slides=[
["today","1 / 6","오늘 뭐 살지|고민된다면?","당신의 일상을 더 좋게, 오늘의 추천 상품","/search?q=오늘의추천"],
["best","2 / 6","지금, 가장 인기있는|BEST 100","사람들이 많이 보는 상품만 모았어요","/#best"],
["under","3 / 6","5천원으로도|좋은 게 많아요","작지만 확실한 행복, 5천원 이하 상품","/search?q=5000원이하"],
["single","4 / 6","1인가구를 위한|스마트한 선택","작은 공간도 더 특별하게","/search?q=1인가구"],
["newly","5 / 6","신혼·이사 준비도|9호와 함께","새로운 시작을 더 설레게","/search?q=신혼가전"],
["digital","6 / 6","디지털·PC로|더 넓은 가능성","일도, 취미도, 더 즐겁게","/search?q=디지털"]
];
export default function Home(){return <main className="athlerHome"><SiteHeader/><section className="heroRail" aria-label="추천 기획전">{slides.map((s,i)=><article className={`heroSlide hero-${s[0]}`} key={s[0]}><div className="heroShade"/><div className="heroContent"><span>{s[1]}</span><h1>{s[2].split("|").map(x=><span className="heroLine" key={x}>{x}</span>)}</h1><p>{s[3]}</p><Link href={s[4]}>지금 구경하기 <b>›</b></Link></div><div className="heroDots">{slides.map((_,j)=><i className={j===i?"on":""} key={j}/>)}</div></article>)}</section><nav className="mobileTabs" id="categories">{categories.map((x,i)=><Link className={i===0?"active":""} key={x} href={x==="홈"?"/":x==="전체"?"/#best":`/search?q=${encodeURIComponent(x)}`}>{x}</Link>)}</nav><div id="recent"><RecentlyViewed/></div><section className="feedSection" id="best"><div className="feedTitle"><div><h2>지금 많이 보는 상품</h2></div><Link href="/search?q=인기상품">더보기 ›</Link></div><ProductFeed limit={8}/></section></main>}
