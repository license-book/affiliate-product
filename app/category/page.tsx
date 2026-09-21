"use client";
import Link from "next/link";
import {useState} from "react";

const groups={
"디지털":["노트북·PC","스마트폰","태블릿","모니터","이어폰·헤드폰","스마트워치","키보드·마우스","저장장치"],
"가전":["TV","냉장고","세탁기·건조기","청소기","에어컨","주방가전","생활가전","계절가전"],
"생활":["청소·정리","욕실용품","수납용품","침구","조명","생활잡화","반려용품","건강용품"],
"주방":["냄비·팬","식기","조리도구","보관용기","텀블러","커피용품","베이킹","주방잡화"],
"패션":["상의","하의","아우터","신발","가방","모자","언더웨어","패션잡화"],
"뷰티":["스킨케어","메이크업","헤어","바디","향수","뷰티기기","남성뷰티","선케어"],
"캠핑·레저":["캠핑","차박","등산","자전거","골프","낚시","여행용품","스포츠"],
"육아":["출산용품","유아동패션","완구","수유·이유식","유아가구","외출용품","학습용품","위생용품"]
} as const;
type Group=keyof typeof groups;
const Icon=({i}:{i:number})=>{const icons=[<path key="a" d="M5 6h14v10H5zM9 20h6M12 16v4"/>,<path key="b" d="M8 3h8v18H8zM11 18h2"/>,<path key="c" d="M4 5h16v12H4zM8 21h8"/>,<path key="d" d="M5 8h14l1 11H4L5 8zM9 8V6a3 3 0 0 1 6 0v2"/>,<path key="e" d="M7 4h10v16H7zM10 8h4M10 12h4"/>,<path key="f" d="M12 3v18M5 8h14M7 16h10"/>,<path key="g" d="M5 5h14v14H5zM9 9h6v6H9z"/>,<path key="h" d="M6 4h12v16H6zM9 7h6M9 17h6"/>];return <svg viewBox="0 0 24 24">{icons[i%icons.length]}</svg>};
export default function CategoryPage(){const[first,setFirst]=useState<Group>("디지털");return <main className="categoryMenuPage"><header className="categoryMenuHeader">카테고리</header><div className="categoryMenuBody"><nav className="categoryMenuLeft">{(Object.keys(groups) as Group[]).map(x=><button key={x} className={first===x?"active":""} onClick={()=>setFirst(x)}>{x}</button>)}</nav><section className="categoryMenuRight"><div className="categoryMenuCrumb"><b>{first}</b><span>›</span></div><div className="categoryMenuGrid">{groups[first].map((x,i)=><Link key={x} href={`/search?q=${encodeURIComponent(x)}`}><span className="categoryMenuIcon"><Icon i={i}/></span><strong>{x}</strong></Link>)}</div></section></div></main>}