export type RankEventType="view"|"wishlist"|"outbound"|"compare";
export type RankEvent={productId:string;category:string;type:RankEventType;at:string};
const KEY="9ho_rank_events_v1";
const MAX=3000;
export function trackRankEvent(productId:string,category:string,type:RankEventType){
 if(typeof window==="undefined")return;
 try{const rows:RankEvent[]=JSON.parse(localStorage.getItem(KEY)||"[]");rows.push({productId,category,type,at:new Date().toISOString()});localStorage.setItem(KEY,JSON.stringify(rows.slice(-MAX)));window.dispatchEvent(new CustomEvent("9ho:rank-event"));}catch{}
}
export function localRankScores(category?:string){
 if(typeof window==="undefined")return[] as {productId:string;score:number}[];
 try{const rows:RankEvent[]=JSON.parse(localStorage.getItem(KEY)||"[]");const cutoff=Date.now()-7*86400000;const weight:Record<RankEventType,number>={view:1,wishlist:4,outbound:6,compare:3};const scores=new Map<string,number>();for(const e of rows){if(Date.parse(e.at)<cutoff||category&&e.category!==category)continue;scores.set(e.productId,(scores.get(e.productId)||0)+weight[e.type])}return [...scores].map(([productId,score])=>({productId,score})).sort((a,b)=>b.score-a.score)}catch{return[]}
}
