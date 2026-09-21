import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import WishlistButton from "../../../components/WishlistButton";
import RecentProductTracker from "../../../components/RecentProductTracker";
import { demoProducts, formatWon, type DemoProduct } from "../../../lib/demo-products";

export function generateStaticParams(){return demoProducts.map(p=>({slug:p.slug}))}

function resolveDetailType(product:DemoProduct):"compare"|"single"|"similar"{
  if(product.detailType) return product.detailType;
  if(product.sameProductMatched===true && product.sellers.length>1) return "compare";
  if(product.sellers.length<=1) return "single";
  return "similar";
}
function Badges({p}:{p:DemoProduct}){if(!p.badges)return null;return <div className="productBadges">{p.badges.lowestPrice&&<span className="badgeLowest">최저가</span>}{p.badges.priceDrop&&p.badges.priceDrop>0?<span className="badgeDrop">가격하락 {formatWon(p.badges.priceDrop)}</span>:null}{p.badges.couponPrice!=null&&<span className="badgeCoupon">쿠폰가 {formatWon(p.badges.couponPrice)}</span>}{p.badges.freeShipping&&<span className="badgeShipping">무료배송</span>}</div>}
function Compare({p}:{p:DemoProduct}){return <section className="sellerCompareSection"><div className="sellerCompareHead"><div><span>PRICE COMPARE</span><h2>동일상품 판매처 가격비교</h2></div><p>{p.sellers.length}개 판매처</p></div><div className="sellerList">{p.sellers.map((s,i)=><div className="sellerRow" key={s.name}><div><b>{i+1}</b><span>{s.name}</span></div><strong>{formatWon(s.price)}</strong><button type="button">판매처 보기</button></div>)}</div></section>}
function Single({p}:{p:DemoProduct}){return <section className="sellerCompareSection"><div className="sellerCompareHead"><div><span>PRODUCT OFFER</span><h2>상품 구매정보</h2></div></div><div className="detailOffer"><strong>{formatWon(p.price)}</strong><Badges p={p}/><p>이 상품은 동일상품 가격비교 대신 현재 판매처의 상품정보를 중심으로 보여줍니다.</p><button type="button">판매처에서 상품 보기</button></div></section>}
function Similar({p}:{p:DemoProduct}){const items=demoProducts.filter(x=>x.slug!==p.slug&&x.category===p.category).slice(0,4);return <section className="sellerCompareSection"><div className="sellerCompareHead"><div><span>SIMILAR PICKS</span><h2>비슷한 상품 비교하기</h2></div></div><p className="demoNote">정확히 동일한 모델로 확인되지 않아 가격비교가 아닌 유사상품으로 안내합니다.</p><div className="similarDetailRail">{items.map(x=><Link href={`/product/${x.slug}`} key={x.slug}><div className={`productArt ${x.tone}`}><span/></div><b>{x.name}</b><strong>{formatWon(x.price)}부터</strong></Link>)}</div></section>}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const product=demoProducts.find(x=>x.slug===slug);if(!product)notFound();const type=resolveDetailType(product);return <main><RecentProductTracker product={product}/><SiteHeader/><section className="productDetailWrap"><div className="productDetailTop"><div className={`detailArt productArt ${product.tone}`}><span/></div><div className="productDetailIntro"><span className="productCategory">{product.category}</span><h1>{product.name}</h1><p className="productModel">{product.model}</p><WishlistButton product={product} variant="detail"/><div className="detailPriceBox"><span>{type==="compare"?"현재 비교 최저가":"현재 상품가"}</span><strong>{formatWon(product.price)}부터</strong><Badges p={product}/><p>{type==="compare"?`${product.sellers.length}개 판매처의 동일상품을 비교합니다.`:type==="single"?"상품 상세정보와 구매조건을 확인하세요.":"동일상품 매칭 전 유사상품을 함께 보여드립니다."}</p></div></div></div>{type==="compare"?<Compare p={product}/>:type==="single"?<Single p={product}/>:<Similar p={product}/>}<section className="verifiedInfo"><div><span>PRODUCT INFO</span><h2>상품 정보</h2></div><dl><div><dt>상품명</dt><dd>{product.name}</dd></div><div><dt>모델명</dt><dd>{product.model}</dd></div><div><dt>카테고리</dt><dd>{product.category}</dd></div></dl></section><Link className="backToSearch" href={`/search?q=${encodeURIComponent(product.name)}`}>비슷한 상품 더 찾아보기 →</Link></section><SiteFooter/></main>}