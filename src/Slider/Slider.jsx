import Line15 from "../assets/Line15.png";
import arrow from "../assets/ep_arrow-up.png";
const Slider = () => {
  const carouselData = [
    {
      imageSrc: "src/assets/dog-walking.png",
      altText: "Cat Happy Owner",
      desc: "Dog Walk",
    },
    {
      imageSrc: "src/assets/petsiiting.png",
      altText: "Cat Happy Owner",
      desc: "Pet Sitting",
    },
    {
      imageSrc: "src/assets/board.png",
      altText: "Cat Happy Owner",
      desc: "Home Boarding",
    },
    {
      imageSrc: "src/assets/daycare.png",
      altText: "Cat Happy Owner",
      desc: "Day Care",
    },
    {
      imageSrc: "src/assets/training.png",
      altText: "Cat Happy Owner",
      desc: "Training",
    },
  ];

  console.log("carouselData", carouselData);

  return (
    <section id="slider">
      <div className="container py-5">
        <div className="row">
          <h3>We Offer</h3>
          <h1>CARE SERVICES</h1>
          <img src={Line15} alt={Line15} className="service-line" />
        </div>
        <div className="row mx-auto">
          {carouselData.map((item, index) => (
            <div
              className="col-sm-6 col-lg-2 col-md-3 services-card text-center border mx-auto p-2"
              key={index}
            >
              <img src={item.imageSrc} alt={item.altText} />
              <p>{item.desc}</p>
              <button>Book Now</button>
            </div>
          ))}

          <img src={arrow} alt={arrow} className="arraow-slide" />
        </div>
      </div>
    </section>
  );
};

export default Slider;
