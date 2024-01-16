import dog from "../assets/image8.png";
import dog2 from "../assets/image24.png";
const Promo = () => {
  return (
    <div className="container promo my-5">
      <div className="row justify-content-between">
        <div className="col-sm-6 promo-box1">
          <div className="d-flex justify-content-between align-item-start">
            <div className="head">
              <h3>ANY PROMO</h3>
              <p>Lorem ipsum dummy text</p>
            </div>
            <img src={dog} className="promoimg" alt="" />
          </div>
        </div>
        <div className="col-sm-6 promo-box2">
          <div className="d-flex justify-content-between align-item-start">
            <div className="head">
              <h3>ANY PROMO</h3>
              <p>Lorem ipsum dummy text</p>
            </div>

            <img src={dog2} className="promoimg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
