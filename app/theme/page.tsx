"use client";
import Link from "next/link";
import {useEffect,useRef,useState} from "react";
import {longtailKeywords} from "../../lib/longtail-keywords";

const sections=[
 {id:"season",title:"지금 시즌에 필요한 것",desc:"계절·날씨·시기에 맞춰 찾아보세요",groups:["season"]},
 {id:"gift",title:"기념일·선물",desc:"누구에게, 어떤 날에 줄지부터 골라보세요",groups:["gift","price"]},
 {id:"living",title:"생활·공간",desc:"자취·원룸·집안일 같은 상황별 추천",groups:["space","living"]},
 {id:"hobby",title:"취미·여행",desc:"캠핑·차박·여행과 여가생활 준비",groups:["travel"]},
 {id:"digital",title:"디지털·업무",desc:"공부·업무·데스크 환경에 맞춘 선택",groups:["digital"]},
 {id:"pet",title:"반려생활",desc:"반려동물과 함께 살 때 필요한 것",groups:["pet"]}
] as const;

export default function ThemePage(){
 const jumpRef=useRef<HTMLElement>(null);
 const [active,setActive]=useState(sections[0].id);

 const selectSection=(id:string)=>{
  setActive(id);
  requestAnimationFrame(()=>{
   document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"});
   const nav=jumpRef.current;
   const tab=nav?.querySelector<HTMLAnchorElement>(`a[data-id="${id}"]`);
   if(nav&&tab){
    nav.scrollTo({left:tab.offsetLeft-(nav.clientWidth-tab.offsetWidth)/2,behavior:"smooth"});
   }
  });
 };

 useEffect(()=>{
  const observer=new IntersectionObserver(entries=>{
   const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
   if(!visible)return;
   const id=visible.target.id;
   setActive(id);
   const nav=jumpRef.current;
   const tab=nav?.querySelector<HTMLAnchorElement>(`a[data-id="${id}"]`);
   if(nav&&tab) nav.scrollTo({left:tab.offsetLeft-(nav.clientWidth-tab.offsetWidth)/2,behavior:"smooth"});
  },{rootMargin:"-100px 0px -55% 0px",threshold:[0,.2,.5]});
  sections.forEach(s=>{const el=document.getElementById(s.id);if(el)observer.observe(el)});
  return()=>observer.disconnect();
 },[]);

 return <main className="themePage">
  <header className="themeHero"><small>THEME DISCOVERY</small><h1>테마로 찾기</h1><p>상품 이름을 몰라도 괜찮아요.<br/>상황과 목적부터 골라보세요.</p></header>
  <nav className="themeJump" ref={jumpRef}>{sections.map(s=><a key={s.id} data-id={s.id} className={active===s.id?"active":""} href={"#"+s.id} onClick={e=>{e.preventDefault();selectSection(s.id)}}>{s.title}</a>)}</nav>
  {sections.map(s=>{const items=longtailKeywords.filter(x=>(s.groups as readonly string[]).includes(x.group));return <section className="themeSection" id={s.id} key={s.id}><div className="themeSectionHead"><h2>{s.title}</h2><p>{s.desc}</p></div><div className="themeLinkGrid">{items.map(x=><Link href={"/pick/"+x.slug} key={x.slug}><span>{x.label}</span><b>›</b></Link>)}</div></section>})}
 </main>
}