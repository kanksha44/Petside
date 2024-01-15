import adviceimg from "../assets/image7.png";
const Advice = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <img src={adviceimg} alt="dog" className="adviceimg" />
        </div>
        <div className="col advice-content">
          <h5>
            Dive into premium pet products and expert advice for your companion.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            dolor ut leo facilisis consequat. Vestibulum non erat a velit
            eleifend tincidunt. Aliquam erat volutpat. Ut id felis eget dolor
            bibendum congue. Nulla facilisi.
          </p>
          <button>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Advice;
