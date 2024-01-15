const data = [
  {
    image: "/src/assets/customer1.png",
    Names: "Ana & Tobby",
    desc: "Amazing products & delivery on time.",
    rating: "🦴🦴🦴🦴🦴🦴",
  },
  {
    image: "/src/assets/customer1.png",
    Names: "Ana & Tobby",
    desc: "Amazing products & delivery on time.",
    rating: "🦴🦴🦴🦴🦴🦴",
  },
  {
    image: "/src/assets/customer1.png",
    Names: "Ana & Tobby",
    desc: "Amazing products & delivery on time.",
    rating: "🦴🦴🦴🦴🦴🦴",
  },
];

const Customers = () => {
  return (
    <div className="container mb-3">
      <h4>Happy Customer</h4>
      <div className="row text-center">
        {data.map((item, index) => (
          <div className="col mb-5" key={index}>
            <div className="card testimonial-card">
              <div className="avatar">
                <img
                  src={item.image}
                  className="rounded-circle img-fluid"
                  alt="dog-cust"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">{item.Names}</h4>
                <p className="dark-grey-text mt-4">
                  <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor
                  sit amet eos adipisci, consectetur adipisicing elit.
                </p>
                <p>{item.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <button className="w-25 m-auto">View More</button>
      </div>
    </div>
  );
};

export default Customers;
