const Slider = () => {
  // Example array of carousel data
  const carouselData = [
    {
      imageSrc: "../assets/dog-walking.png",
      altText: "Cat Happy Owner",
      desc: "Dog Walk",
    },
    {
      imageSrc: "/assets/board_12020341 1.png",
      altText: "Cat Happy Owner",
      description: "Exceptional cat care service, my furry friend loves it!",
    },
    // Add more items as needed
  ];

  console.log("carouselData", carouselData);

  return (
    <section id="slider">
      <div className="container">
        <div className="row">
          {carouselData.map((item, index) => (
            <div className="col border" key={index}>
              <img src={item.imageSrc} alt={item.altText} />
              <p>{item.desc}</p>
              <button>Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
