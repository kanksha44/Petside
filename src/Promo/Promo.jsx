import dog from "../assets/image8.png";
const Promo = () => {
  return (
    <div className="container promo">
      <div className="row d-flex justify-content-between">
        <div className="col promo-box">
          <div className="d-flex">
            <div className="head">
              <h3>ANY PROMO</h3>
              <p>Lorem ipsum dummy text</p>
            </div>

            <img src={dog} className="promoimg" alt="" />
          </div>
        </div>
        <div className="col promo-box">
          <div className="d-flex">
            <div className="head">
              <h3>ANY PROMO</h3>
              <p>Lorem ipsum dummy text</p>
            </div>

            <img src={dog} className="promoimg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
