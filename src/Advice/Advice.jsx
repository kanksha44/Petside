import adviceimg from "../assets/image7.png";
const Advice = () => {
  return (
    <section id="advice" className="advice">
      <div className="container h-100">
        <div className="row advice-row">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img src={adviceimg} alt="dog" className="advice-img" />
          </div>
          <div className="col-lg-6 advice-content">
            <div className="p-5 mt-2">
              <h5>
                Dive into premium pet products and expert advice for your
                companion.
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae dolor ut leo facilisis consequat. Vestibulum non erat a
                velit eleifend tincidunt. Aliquam erat volutpat. Ut id felis
                eget dolor bibendum congue. Nulla facilisi.
              </p>
              <button className="advice-btn">
                Explore More <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advice;
