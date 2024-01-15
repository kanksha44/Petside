const data = [
  {
    discount: "10%",
    img: "/src/assets/image12.png",
    headline: "V-dog | Drools",
    discountedPrice: "Rs. 999",
    price: "MRP Rs. 1500",
  },
  {
    discount: "10%",
    img: "/src/assets/image12.png",
    headline: "V-dog | Drools",
    discountedPrice: "Rs. 999",
    price: "MRP Rs. 1500",
  },
  {
    discount: "10%",
    img: "/src/assets/image12.png",
    headline: "V-dog | Drools",
    discountedPrice: "Rs. 999",
    price: "MRP Rs. 1500",
  },
  {
    discount: "10%",
    img: "/src/assets/image12.png",
    headline: "V-dog | Drools",
    discountedPrice: "Rs. 999",
    price: "MRP Rs. 1500",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex flex-column">
          <div className="col text-center border mb-5">
            <h4>Pet </h4>
            <h5>Food Products</h5>
            <h5>Upto 25% OFF on all Products</h5>
            <button>View More</button>
          </div>
          <div className="col border d-flex justify-content-between">
            {data.map((item, index) => (
              <div key={index} className="card border-success mb-3">
                <div className="card-header d-flex justify-content-between order-success">
                  <p>{item.discount}</p>
                  <p>♥️</p>
                </div>
                <div className="card-body text-success">
                  <img src={item.img} alt="" />
                  <h5 className="card-title">{item.headline}</h5>
                  <p className="card-text">{item.discountedPrice}</p>
                  <p className="card-text">{item.price}</p>
                </div>
                <div className="card-footer border-success">
                  <button>Add to cart</button>
                  <button>Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
