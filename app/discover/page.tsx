import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import ProductFeed from "../../components/ProductFeed";
import {getProductPool} from "../../lib/adpick-products";
export default async function Discover(){const pools=await getProductPool();const products=Object.values(pools).flat();const unique=Array.from(new Map(products.map(p=>[p.slug,p])).values());return <main className="athlerHome"><SiteHeader/><section className="feedSection"><div className="feedTitle"><div><h2>상품 발견</h2><p>다양한 상품을 자유롭게 둘러보세요</p></div></div><div className="homePriceChips">{["5천원 이하","1만원 이하","3만원 이하","선물 추천","생활 꿀템","시즌 추천","자취 필수"].map(x=><Link key={x} href={"/search?q="+encodeURIComponent(x)}>{x} ›</Link>)}</div><ProductFeed products={unique} limit={Math.min(unique.length,100)} variant="grid"/></section></main>}
