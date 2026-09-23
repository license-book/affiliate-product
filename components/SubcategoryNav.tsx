"use client";
import Link from "next/link";
import {useEffect,useRef} from "react";
type Groups=Record<string,readonly string[]>;
export default function SubcategoryNav({groups,group,subcategory}:{groups:Groups;group:string;subcategory:string}){
 const firstRef=useRef<HTMLElement>(null);const subRef=useRef<HTMLElement>(null);
 useEffect(()=>{for(const [ref,key] of [[firstRef,group],[subRef,subcategory]] as const){const rail=ref.current;const el=rail?.querySelector('[data-active="true"]') as HTMLElement|null;if(rail&&el){const centered=el.offsetLeft-(rail.clientWidth-el.offsetWidth)/2;const max=Math.max(0,rail.scrollWidth-rail.clientWidth);rail.scrollTo({left:Math.max(0,Math.min(centered,max)),behavior:"auto"})};}},[group,subcategory]);
 return <section className="subcategoryNavShell">
  <nav ref={firstRef} className="categoryFirstTabs subcategoryFirstTabs">{Object.keys(groups).map(x=><Link key={x} data-active={x===group} className={x===group?"active":""} href={`/category?group=${encodeURIComponent(x)}`}>{x}</Link>)}</nav>
  <nav ref={subRef} className="subcategoryTextNav">{groups[group].map(x=><Link key={x} data-active={x===subcategory} className={x===subcategory?"active":""} href={`/category/${encodeURIComponent(group)}/${encodeURIComponent(x)}`}>{x}</Link>)}</nav>
 </section>
}