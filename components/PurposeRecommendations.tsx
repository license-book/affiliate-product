"use client";
import {useState} from "react";
import ProductFeed from "./ProductFeed";
import {demoProducts} from "../lib/demo-products";

const purposes=["혼자 살 때","선물할 때","이사할 때","출산 준비","여행 갈 때","공부·업무","차량용","취미생활"];
export default function PurposeRecommendations(){
 const [active,setActive]=useState(purposes[0]);
 const offset=purposes.indexOf(active);
 const items=Array.from({length:6},(_,i)=>demoProducts[(offset*2+i)%demoProducts.length]);
 return <section className="homePurpose homePurposeInteractive">
  <div className="feedTitle"><div><h2>목적별 추천</h2><p>필요한 순간에 맞춰 골라보세요</p></div></div>
  <div className="purposeSwipe">{purposes.map(x=><button key={x} className={active===x?"active":""} onClick={()=>setActive(x)}>{x}</button>)}</div>
  <div className="purposeResultHead"><strong>{active}</strong><span>추천 상품</span></div>
  <ProductFeed products={items} limit={6} variant="grid"/>
 </section>
}