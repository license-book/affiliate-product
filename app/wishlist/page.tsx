import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function WishlistPage() {
  return (
    <main>
      <SiteHeader />
      <section className="searchPageHero">
        <div className="searchPageInner">
          <p style={{marginTop:0,fontSize:12,fontWeight:900,color:"#5b5ff2",letterSpacing:".12em"}}>WISHLIST</p>
          <h1 style={{margin:"8px 0 0",fontSize:"clamp(30px,6vw,44px)",letterSpacing:"-.05em"}}>찜한 상품</h1>
          <p>상품 카드에서 저장한 상품을 모아볼 수 있도록 연결할 예정입니다.</p>
        </div>
      </section>
      <section className="serviceSection">
        <div style={{padding:"40px 20px",border:"1px solid #e6eaf0",borderRadius:16,textAlign:"center",color:"#7d8796",background:"#fff"}}>
          아직 저장한 상품이 없습니다.
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
