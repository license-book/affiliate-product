import type {DemoProduct} from "./demo-products";
type Raw={title?:string;price?:string|number;photo?:string;cp_code?:string;cp_name?:string;cp_icon?:string;commissionlink?:string};
const BASE=(process.env.NEXT_PUBLIC_API_BASE_URL||process.env.API_BASE_URL||"http://13.125.23.112:3000").replace(/\/$/,"");
const money=(v:unknown)=>Number(String(v??"0").replace(/[^0-9]/g,""))||0;
const slug=(s:string,i:number)=>encodeURIComponent(s.toLowerCase().replace(/\s+/g,"-").slice(0,60))+"-"+i;
export async function searchAdpick(q:string,limit=20):Promise<DemoProduct[]>{
 if(!q)return[];
 try{
  const r=await fetch(`${BASE}/search?q=${encodeURIComponent(q)}&limit=${limit}`,{cache:"no-store"});
  if(!r.ok)throw new Error("api "+r.status);
  const j=await r.json() as {data?:Raw[]};
  return (j.data||[]).map((x,i)=>({slug:slug(x.title||"product",i),category:q,name:x.title||"상품",model:x.cp_name||x.cp_code||"",price:money(x.price),tone:"api",imageUrl:x.photo||undefined,sellers:[{name:x.cp_name||x.cp_code||"판매처",price:money(x.price),url:x.commissionlink||undefined}],affiliateUrl:x.commissionlink||undefined,detailType:"single"}));
 }catch(e){console.error("AdPick search failed",e);return[]}
}