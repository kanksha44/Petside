import dog from "../assets/read.png";

const Read = () => {
  return (
    <section className="read" id="read">
      <div className="container h-100 mt-5">
        <div className="row read-row">
          <div className="col-lg-6">
            <div className="p-5 mt-2">
              <h1 className="display-5 mb-4 fw-medium">
                Uncover Our Pets Journey: Read with Us
              </h1>
              <p className="read mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae dolor ut leo facilisis consequat. Ut id felis eget dolor
                bibendum congue. Nulla facilisi.
              </p>
              <button className="login-btn"> Explore More</button>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={dog} alt="dog img" className="dog-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Read;
