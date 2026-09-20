"use client";
import Link from "next/link";
import {FormEvent,useState} from "react";
import {useRouter} from "next/navigation";
import styles from "./SiteHeader.module.css";
export default function SiteHeader(){
 const router=useRouter(); const [q,setQ]=useState("");
 const submit=(e:FormEvent)=>{e.preventDefault();if(q.trim())router.push(`/search?q=${encodeURIComponent(q.trim())}`)};
 return <header className={styles.header}><div className={styles.row}><Link href="/" className={styles.brand}><b>9</b><strong>HO</strong><em>구호</em></Link><div className={styles.actions}><Link href="/wishlist" aria-label="찜">♡</Link><Link href="/about" aria-label="메뉴">☰</Link></div></div><form className={styles.search} onSubmit={submit}><span>⌕</span><input value={q} onChange={e=>setQ(e.target.value)} placeholder="상품 검색"/><button aria-label="검색">→</button></form></header>
}
