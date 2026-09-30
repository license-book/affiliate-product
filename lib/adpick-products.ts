import type { DemoProduct } from "./demo-products";

export const ADPICK_API_BASE="https://powell-forestry-units-sally.trycloudflare.com";

export type ProductPool=Record<string,DemoProduct[]>;

export const productQueries:Record<string,string[]>={
 popular:["노트북","생활용품"],
 bestseller:["인기상품","베스트상품"],
 food:["식품","간식"],
 digital:["노트북","모니터","이어폰"],
 fashion:["패션","의류"],
 living:["생활용품","주방용품"],
 travel:["캠핑","여행용품"],
 deals:["특가","할인상품"],
 under10000:["1만원 이하","생활용품"],
 priceDrop:["가격할인","특가"],
 random:["생활용품","디지털"],
 single:["1인가구","자취용품"],
 gift:["선물","선물추천"],
 move:["신혼가전","이사가전"],
 baby:["출산용품","육아용품"],
 trip:["여행용품","캠핑용품"],
 work:["사무용품","노트북"],
 car:["차량용품","자동차용품"],
 hobby:["취미용품","캠핑"]
};

function toProduct(x:any,category:string,index:number):DemoProduct{
 const price=Number(String(x?.price??0).replace(/[^0-9]/g,""))||0;
 const key=String(x?.code??x?.product_id??x?.cp_code??"shop").replace(/[^a-zA-Z0-9_-]/g,"");
 return {
  slug:`adpick-${key}-${index}`,category,name:String(x?.title||"상품"),model:"",price,
  sellers:[{name:String(x?.cp_name||"판매처"),price,url:x?.commissionlink}],
  tone:"tone-blue",imageUrl:x?.photo||undefined,affiliateUrl:x?.commissionlink||undefined,detailType:"single"
 };
}
async function search(q:string):Promise<DemoProduct[]>{
 try{
  const r=await fetch(`${ADPICK_API_BASE}/search?q=${encodeURIComponent(q)}`,{next:{revalidate:900}});
  if(!r.ok)return[];
  const j=await r.json(); const rows=Array.isArray(j?.data)?j.data:[];
  return rows.map((x:any,i:number)=>toProduct(x,q,i)).filter((p:DemoProduct)=>p.price>0&&p.name);
 }catch{return[]}
}
export async function getProductPool():Promise<ProductPool>{
 const entries=await Promise.all(Object.entries(productQueries).map(async([key,qs])=>{
  const batches=await Promise.all(qs.map(search)); const seen=new Set<string>();
  const items=batches.flat().filter(p=>{const k=`${p.name}|${p.price}`;if(seen.has(k))return false;seen.add(k);return true});
  return [key,items] as const;
 }));
 return Object.fromEntries(entries);
}
