import dog from "../assets/read.png";
const Read = () => {
  return (
    <div className="container-fluid read-box mt-5">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col">
            <h1>Uncover Our Pets Journey: Read with Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae dolor ut leo facilisis consequat. Ut id felis eget dolor
              bibendum congue. Nulla facilisi.
            </p>
            <button> Explore More</button>
          </div>
          <div className="col">
            <img src={dog} alt="dog img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
