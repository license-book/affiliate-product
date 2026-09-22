"use client";
import {useEffect,useRef,useState} from "react";
import Link from "next/link";

type Slide=readonly [string,string,string,string,string,string];

export default function HeroCarousel({slides}:{slides:readonly Slide[]}){
 const rail=useRef<HTMLDivElement>(null);
 const [active,setActive]=useState(0);
 useEffect(()=>{
  const el=rail.current;if(!el||slides.length<2)return;
  const id=window.setInterval(()=>{
   setActive(current=>{
    const next=(current+1)%slides.length;
    const target=el.children[next] as HTMLElement|undefined;
    target?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});
    return next;
   });
  },4000);
  return()=>window.clearInterval(id);
 },[slides.length]);
 const sync=()=>{const el=rail.current;if(!el)return;const center=el.scrollLeft+el.clientWidth/2;let best=0,dist=Infinity;Array.from(el.children).forEach((node,i)=>{const n=node as HTMLElement;const d=Math.abs(n.offsetLeft+n.offsetWidth/2-center);if(d<dist){dist=d;best=i}});setActive(best)};
 return <section className="heroViewport" aria-label="추천 기획전"><div className="heroRail" ref={rail} onScroll={sync}>{slides.map((s,i)=><article className={`heroSlide hero-${s[0]}`} key={s[0]} style={{backgroundImage:`url(${s[5]})`}}><div className="heroShade"/><div className="heroContent"><span>{s[1]}</span><h1>{s[2].split("|").map(x=><span className="heroLine" key={x}>{x}</span>)}</h1><p>{s[3]}</p><Link href={s[4]}>지금 구경하기 <b>›</b></Link></div><div className="heroDots">{slides.map((_,j)=><i className={j===active?"on":""} key={j}/>)}</div></article>)}</div></section>
}