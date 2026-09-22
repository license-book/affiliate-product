"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import {longtailKeywords,type LongtailKeyword} from "../lib/longtail-keywords";
const COUNT=8;
function pick(){
 const groups=[...new Set(longtailKeywords.map(x=>x.group))];
 const seed=Date.now()^(Math.random()*0x7fffffff);
 let n=seed; const rnd=()=>{n=(n*1664525+1013904223)>>>0;return n/4294967296};
 const chosen:LongtailKeyword[]=[];
 for(const g of groups.sort(()=>rnd()-.5)){const a=longtailKeywords.filter(x=>x.group===g);if(a.length)chosen.push(a[Math.floor(rnd()*a.length)]);if(chosen.length===COUNT)break}
 for(const x of [...longtailKeywords].sort(()=>rnd()-.5)){if(chosen.length>=COUNT)break;if(!chosen.some(y=>y.label===x.label))chosen.push(x)}
 return chosen.sort(()=>rnd()-.5);
}
export default function LongtailDiscovery(){const[items,setItems]=useState(()=>longtailKeywords.slice(0,COUNT));useEffect(()=>setItems(pick()),[]);return <section className="homeDiscovery homeLongtail"><div className="feedTitle"><div><h2>이런 조건으로 찾고 있나요?</h2><p>구체적인 조건을 바로 검색해보세요</p></div><Link href="/theme">테마 전체보기 ›</Link></div><div className="homeLongtailTags">{items.map(x=><Link href={`/pick/${x.slug}`} key={x.label}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg><span>{x.label}</span></Link>)}</div></section>}