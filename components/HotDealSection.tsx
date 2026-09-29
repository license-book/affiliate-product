"use client";
import {useMemo,useState} from "react";
import Link from "next/link";
import {demoProducts,formatWon} from "../lib/demo-products";

const shops=["전체","11번가","쿠팡","G마켓","옥션"];
export default function HotDealSection(){
 const [shop,setShop]=useState("전체");
 const deals=useMemo(()=>demoProducts.map((p,i)=>{
  const rate=p.discountRate ?? [18,24,31,15,27,20,22,17][i%8];
  const original=p.originalPrice ?? Math.round(p.price/(1-rate/100)/1000)*1000;
  const seller=p.sellers.find(s=>shop==="전체"||s.name===shop) ?? p.sellers[0];
  return {...p,dealRate:rate,dealOriginal:original,dealSeller:seller};
 }).filter(p=>shop==="전체"||p.sellers.some(s=>s.name===shop)),[shop]);
 return <section className="homeHotDeals">
  <div className="feedTitle"><div><h2>오늘의 특가</h2><p>할인폭이 눈에 띄는 상품을 모았어요</p></div><Link href="/search?q=특가">더보기 ›</Link></div>
  <div className="hotDealFilters">{shops.map(x=><button key={x} className={shop===x?"active":""} onClick={()=>setShop(x)}>{x}</button>)}</div>
  <div className="hotDealRail">{deals.map(p=><Link href={`/product/${p.slug}`} className="hotDealCard" key={p.slug}>
   <div className={`productArt ${p.tone}`}>{p.imageUrl?<img src={p.imageUrl} alt=""/>:<span>{p.name.slice(0,1)}</span>}</div>
   <div className="hotDealInfo"><div><b className="hotDealBadge">HOT {p.dealRate}%↓</b><small>{p.dealSeller?.name}</small></div><h3>{p.name}</h3><del>{formatWon(p.dealOriginal)}</del><strong>{formatWon(p.price)}</strong></div>
  </Link>)}</div>
  <p className="hotDealNotice">가격·재고·할인 혜택은 판매처에서 변경될 수 있습니다. 구매 전 판매처의 최종 가격을 확인해 주세요.</p>
 </section>
}