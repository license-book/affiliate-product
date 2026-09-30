"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import ProductFeed from "./ProductFeed";
import { demoProducts, type DemoProduct } from "../lib/demo-products";

const tabs = ["BEST","식품","디지털·가전","패션·뷰티","리빙·육아","여행·레저"];
const PAGE_SIZE=6;

export default function BestSellerSection({pools={}}:{pools?:Record<string,DemoProduct[]>}){
  const [active,setActive]=useState(0);
  const [page,setPage]=useState(0);
  const rail=useRef<HTMLDivElement>(null);
  const pages=useMemo(()=>{
    const source=pools[tabs[active]]?.length?pools[tabs[active]]:demoProducts;
    const list=Array.from({length:Math.max(12,source.length)},(_,i)=>source[i%source.length]);
    return [list.slice(0,PAGE_SIZE),list.slice(PAGE_SIZE,PAGE_SIZE*2)];
  },[active,pools]);
  const go=(n:number)=>{const next=Math.max(0,Math.min(pages.length-1,n));setPage(next);rail.current?.scrollTo({left:next*rail.current.clientWidth,behavior:"smooth"});};
  const choose=(i:number)=>{setActive(i);setPage(0);rail.current?.scrollTo({left:0,behavior:"auto"});};
  const sync=()=>{const el=rail.current;if(el)setPage(Math.max(0,Math.min(pages.length-1,Math.round(el.scrollLeft/el.clientWidth))));};

  return <section className="bestSellerSection">
    <div className="feedTitle"><div><h2>베스트셀러</h2><p>카테고리별 인기 상품을 한눈에</p></div><Link href="/search?q=베스트셀러">전체보기 ›</Link></div>
    <div className="bestSellerTabs" role="tablist" aria-label="베스트셀러 카테고리">
      {tabs.map((x,i)=><button key={x} type="button" role="tab" aria-selected={active===i} className={active===i?"active":""} onClick={()=>choose(i)}>{x}</button>)}
    </div>
    <div className="bestSellerRail" ref={rail} onScroll={sync}>
      {pages.map((items,i)=><div className="bestSellerPage" key={i}><ProductFeed products={items} limit={6} variant="grid"/></div>)}
    </div>
    <div className="bestSellerPager">
      <button type="button" onClick={()=>go(page-1)} disabled={page===0} aria-label="이전 상품">‹</button>
      <b>{page+1}<em> / {pages.length}</em></b>
      <button type="button" onClick={()=>go(page+1)} disabled={page===pages.length-1} aria-label="다음 상품">›</button>
    </div>
  </section>;
}
