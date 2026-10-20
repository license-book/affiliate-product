"use client";
import {useEffect,useRef,useState} from "react";
import type {DemoProduct} from "../lib/demo-products";
import ProductFeed from "./ProductFeed";
export default function InfiniteDiscovery({products}:{products:DemoProduct[]}){
 const [count,setCount]=useState(20);const marker=useRef<HTMLDivElement>(null);
 useEffect(()=>{const node=marker.current;if(!node||count>=products.length)return;const observer=new IntersectionObserver(entries=>{if(entries[0]?.isIntersecting)setCount(n=>Math.min(n+20,products.length))},{rootMargin:"250px"});observer.observe(node);return()=>observer.disconnect()},[count,products.length]);
 return <section className="feedSection" id="infinite-discovery"><div className="feedTitle"><div><h2>끝없이 발견하는 상품</h2><p>스크롤하며 다양한 상품을 만나보세요</p></div></div><ProductFeed variant="grid" limit={count} products={products}/><div ref={marker} style={{textAlign:"center",padding:"24px 12px",color:"#888",fontSize:13}}>{count<products.length?"다음 상품을 불러오는 중…":"준비된 상품을 모두 확인했습니다."}</div></section>
}
