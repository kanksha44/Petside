import dog from "../assets/image 1.png";
const HomePage = () => {
  return (
    <div className="homepage container-fluid">
      <div className="row">
        <div className="col">
          <div className="home-content">
            <h1 className="mb-4 text-white">Food & Fun for Smart Pets !</h1>
            <p className="mb-5 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consequat justo ac libero tincidunt, a consequat lectus fermentum.
            </p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="col">
          <img src={dog} alt="dog" className="dog-img" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
