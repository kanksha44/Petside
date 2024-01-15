/* eslint-disable react/no-unescaped-entities */
import dog from "../assets/image 1.png";
const HomePage = () => {
  return (
    <section id="home" className="homePage">
      {/* <div className="homepage container-fluid">
        <div className="row">
          <div className="col">
            <div className="home-content">
              <h1 className="mb-4 text-white">Food & Fun for Smart Pets !</h1>
              <p className="mb-5 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consequat justo ac libero tincidunt, a consequat lectus
                fermentum.
              </p>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="col">
            <img src={dog} alt="dog" className="dog-img" /> 
          </div>
        </div>
      </div> */}
      <div className="container h-100">
        <div className="row home-row">
          <div className="col-lg-6">
            <div className="p-5 mt-2">
              <h1 className="display-4 mb-4 fw-medium text-white">
                Food & Fun for Smart Pets !
              </h1>
              <p className="lead text-white mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consequat justo ac libero tincidunt, a consequat lectus
                fermentum.
              </p>
              <a href="#" className="btn ShopNow-btn">
                Shop Now
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center col-lg-6">
            <img src={dog} alt="dog" className="dog-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
