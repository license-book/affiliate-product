"use client";
import {useState} from "react";
import WishlistButton from "./WishlistButton";
import type {DemoProduct} from "../lib/demo-products";
export default function ProductActionBar({product,type}:{product:DemoProduct;type:"compare"|"single"|"similar"}){
 const[shared,setShared]=useState(false);
 const share=async()=>{const data={title:product.name,text:product.name,url:location.href};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(location.href);setShared(true);setTimeout(()=>setShared(false),1600)}}catch{}};
 const go=()=>{if(type==="compare"){document.querySelector(".sellerCompareSection")?.scrollIntoView({behavior:"smooth",block:"start"});return}if(type==="single"&&product.affiliateUrl){location.href=product.affiliateUrl;return}document.querySelector(".sellerCompareSection")?.scrollIntoView({behavior:"smooth",block:"start"})};
 const label=type==="compare"?`${product.sellers.length}개 판매처 가격비교`:type==="single"?"판매처에서 보기":"비슷한 상품 비교";
 return <div className="productActionBar"><div className="productActionIcon"><WishlistButton product={product}/></div><button className="productShareButton" type="button" onClick={share} aria-label="공유"><svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 10.8 7.5-4.4M8.2 13.2l7.5 4.4"/></svg><span>{shared?"복사됨":"공유"}</span></button><button className="productActionPrimary" type="button" onClick={go}><small>{type==="compare"?`최저가 ${new Intl.NumberFormat("ko-KR").format(product.price)}원`:""}</small><b>{label}</b></button></div>
}