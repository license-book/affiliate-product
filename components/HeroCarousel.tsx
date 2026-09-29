"use client";
import {useEffect,useRef,useState} from "react";
import Link from "next/link";
import {demoProducts,formatWon} from "../lib/demo-products";

const configs=[
 ["인기상품","지금 가장 많이 보는 상품","오늘 사람들이 많이 찾는 상품부터","/search?q=인기상품",[0,1,7]],
 ["오늘의 특가","놓치기 아까운 오늘의 특가","가격이 좋은 상품을 빠르게 확인하세요","/search?q=특가",[6,7,5]],
 ["가성비 PICK","가격 부담 낮춘 추천 상품","예산부터 정하고 가볍게 골라보세요","/search?q=가성비",[7,6,5]],
 ["1인가구","혼자 살 때 필요한 것들","작은 공간을 더 편리하게","/search?q=1인가구",[5,7,6]],
 ["신혼·이사","새로운 시작을 위한 가전","오래 쓰는 제품부터 차근차근","/search?q=신혼가전",[4,2,5]],
 ["디지털 BEST","일도 취미도 더 편하게","노트북부터 모니터·이어폰까지","/search?q=디지털",[0,6,7]]
] as const;

export default function HeroCarousel({slides:_slides}:{slides?:readonly unknown[]}){
 const rail=useRef<HTMLDivElement>(null); const [active,setActive]=useState(0);
 useEffect(()=>{const el=rail.current;if(!el)return;const id=window.setInterval(()=>setActive(cur=>{const next=(cur+1)%configs.length;(el.children[next] as HTMLElement)?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});return next}),4500);return()=>clearInterval(id)},[]);
 const sync=()=>{const el=rail.current;if(!el)return;const w=el.clientWidth;setActive(Math.max(0,Math.min(configs.length-1,Math.round(el.scrollLeft/w))))};
 return <section className="heroViewport heroProductViewport" aria-label="상품 추천"><div className="heroRail" ref={rail} onScroll={sync}>{configs.map((c,i)=>{
  const products=c[4].map(n=>demoProducts[n%demoProducts.length]);
  return <article className="heroSlide heroProductSlide" key={c[0]}><div className="heroProductCopy"><span>{c[0]} · {i+1}/{configs.length}</span><h1>{c[1]}</h1><p>{c[2]}</p><Link href={c[3]}>상품 보러가기 <b>›</b></Link></div><div className="heroProductVisual">{products.map((p,j)=><Link href={`/product/${p.slug}`} className={j===0?"heroProduct main":"heroProduct"} key={p.slug}><div className={`productArt ${p.tone}`}>{p.imageUrl?<img src={p.imageUrl} alt={p.name}/>:<strong>{p.name.slice(0,1)}</strong>}</div><small>{p.name}</small><b>{formatWon(p.price)}</b></Link>)}</div><div className="heroDots">{configs.map((_,j)=><i className={j===active?"on":""} key={j}/>)}</div></article>
 })}</div></section>
}