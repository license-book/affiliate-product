import Link from "next/link";
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
 return <main className="themePage">
  <header className="themeHero"><small>THEME DISCOVERY</small><h1>테마로 찾기</h1><p>상품 이름을 몰라도 괜찮아요.<br/>상황과 목적부터 골라보세요.</p></header>
  <nav className="themeJump">{sections.map(s=><a key={s.id} href={"#"+s.id}>{s.title}</a>)}</nav>
  {sections.map(s=>{const items=longtailKeywords.filter(x=>(s.groups as readonly string[]).includes(x.group));return <section className="themeSection" id={s.id} key={s.id}><div className="themeSectionHead"><h2>{s.title}</h2><p>{s.desc}</p></div><div className="themeLinkGrid">{items.map(x=><Link href={"/pick/"+x.slug} key={x.slug}><span>{x.label}</span><b>›</b></Link>)}</div></section>})}
 </main>
}