"use client";
import {useMemo,useState} from "react";
import Link from "next/link";
import {demoProducts,formatWon,type DemoProduct} from "../lib/demo-products";

const shops=["전체","11번가","쿠팡","G마켓","옥션"];
export default function HotDealSection({products=demoProducts}:{products?:DemoProduct[]}){
 const [shop,setShop]=useState("전체");
 const deals=useMemo(()=>products.map(p=>{
  const seller=p.sellers.find(s=>shop==="전체"||s.name===shop) ?? p.sellers[0];
  const rate=p.discountRate ?? (p.originalPrice&&p.originalPrice>p.price?Math.round((1-p.price/p.originalPrice)*100):null);
  return {...p,dealRate:rate,dealOriginal:p.originalPrice,dealSeller:seller};
 }).filter(p=>(shop==="전체"||p.sellers.some(s=>s.name===shop))),[shop,products]);
 return <section className="homeHotDeals">
  <div className="feedTitle"><div><h2>오늘의 특가</h2><p>할인폭이 눈에 띄는 상품을 모았어요</p></div><Link href="/search?q=특가">더보기 ›</Link></div>
  <div className="hotDealFilters">{shops.map(x=><button key={x} className={shop===x?"active":""} onClick={()=>setShop(x)}>{x}</button>)}</div>
  <div className="hotDealRail">{deals.map(p=><a href={p.affiliateUrl||`/product/${p.slug}`} target={p.affiliateUrl?"_blank":undefined} rel={p.affiliateUrl?"sponsored noopener noreferrer":undefined} className="hotDealCard" key={p.slug}>
   <div className={`productArt ${p.tone}`}>{p.imageUrl?<img src={p.imageUrl} alt=""/>:<span>{p.name.slice(0,1)}</span>}</div>
   <div className="hotDealInfo"><div>{p.dealRate!=null&&<b className="hotDealBadge">{p.dealRate}%↓</b>}<small>{p.dealSeller?.name}</small></div><h3>{p.name}</h3>{p.dealOriginal!=null&&<del>{formatWon(p.dealOriginal)}</del>}<strong>{formatWon(p.price)}</strong></div>
  </a>)}</div>
  <p className="hotDealNotice">가격·재고·할인 혜택은 판매처에서 변경될 수 있습니다. 구매 전 판매처의 최종 가격을 확인해 주세요.</p>
 </section>
}