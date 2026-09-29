"use client";
import {useRef,useState} from "react";
import ProductFeed from "./ProductFeed";
import {demoProducts} from "../lib/demo-products";

const purposes=["혼자 살 때","선물할 때","이사할 때","출산 준비","여행 갈 때","공부·업무","차량용","취미생활"];
const PAGE_SIZE=6;
export default function PurposeRecommendations(){
 const [active,setActive]=useState(purposes[0]);
 const [page,setPage]=useState(0);
 const railRef=useRef<HTMLDivElement|null>(null);
 const offset=purposes.indexOf(active);
 const total=Math.max(12,Math.min(18,demoProducts.length));
 const items=Array.from({length:total},(_,i)=>demoProducts[(offset*2+i)%demoProducts.length]);
 const pages=Array.from({length:Math.ceil(items.length/PAGE_SIZE)},(_,i)=>items.slice(i*PAGE_SIZE,(i+1)*PAGE_SIZE));
 const move=(next:number)=>{const n=Math.max(0,Math.min(pages.length-1,next));const el=railRef.current;if(el)el.scrollTo({left:n*el.clientWidth,behavior:"smooth"});setPage(n)};
 const select=(x:string)=>{setActive(x);setPage(0);requestAnimationFrame(()=>railRef.current?.scrollTo({left:0,behavior:"auto"}))};
 return <section className="homePurpose homePurposeInteractive">
  <div className="feedTitle"><div><h2>목적별 추천</h2><p>필요한 순간에 맞춰 골라보세요</p></div></div>
  <div className="purposeSwipe">{purposes.map(x=><button key={x} className={active===x?"active":""} onClick={()=>select(x)}>{x}</button>)}</div>
  <div className="purposeResultHead"><strong>{active}</strong><span>추천 상품</span></div>
  <div className="purposeProductRail" ref={railRef} onScroll={e=>{const w=e.currentTarget.clientWidth;if(w)setPage(Math.max(0,Math.min(pages.length-1,Math.round(e.currentTarget.scrollLeft/w))))}}>
   {pages.map((group,i)=><div className="purposeProductPage" key={i}><ProductFeed products={group} limit={PAGE_SIZE} variant="grid"/></div>)}
  </div>
  {pages.length>1&&<div className="purposePager"><button type="button" aria-label="이전 상품" disabled={page===0} onClick={()=>move(page-1)}>‹</button><b>{page+1} <em>/ {pages.length}</em></b><button type="button" aria-label="다음 상품" disabled={page===pages.length-1} onClick={()=>move(page+1)}>›</button></div>}
 </section>
}