"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ProductFeed from "./ProductFeed";
import { demoProducts } from "../lib/demo-products";

const tabs = ["BEST","식품","디지털·가전","패션·뷰티","리빙·육아","여행·레저"];

export default function BestSellerSection(){
  const [active,setActive]=useState(0);
  const products=useMemo(()=>{
    if(active===0) return demoProducts.slice(0,6);
    const offset=active % demoProducts.length;
    return [...demoProducts.slice(offset),...demoProducts.slice(0,offset)].slice(0,6);
  },[active]);

  return <section className="bestSellerSection">
    <div className="feedTitle"><div><h2>베스트셀러</h2><p>카테고리별 인기 상품을 한눈에</p></div><Link href="/search?q=베스트셀러">전체보기 ›</Link></div>
    <div className="bestSellerTabs" role="tablist" aria-label="베스트셀러 카테고리">
      {tabs.map((x,i)=><button key={x} type="button" role="tab" aria-selected={active===i} className={active===i?"active":""} onClick={()=>setActive(i)}>{x}</button>)}
    </div>
    <div className="bestSellerRail">
      <div className="bestSellerPage"><ProductFeed products={products} limit={6} variant="grid"/></div>
    </div>
  </section>;
}
