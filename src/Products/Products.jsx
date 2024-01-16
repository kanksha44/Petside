import line from "../assets/Line15.png";
const data = [
  {
    discount: "10%",
    img: "/src/assets/image12.png",
    bgimg: "/src/assets/Vector.png",
    headline: "V-dog | Drools",
    discountedPrice: "Rs. 999",
    price: "MRP Rs. 1500",
  },
  {
    discount: "10%",
    img: "/src/assets/image12.png",
    bgimg: "/src/assets/Vector.png",
    headline: "V-dog | Drools",
    discountedPrice: "Rs. 999",
    price: "MRP Rs. 1500",
  },
  {
    discount: "10%",
    img: "/src/assets/image12.png",
    bgimg: "/src/assets/Vector.png",
    headline: "V-dog | Drools",
    discountedPrice: "Rs. 999",
    price: "MRP Rs. 1500",
  },
  {
    discount: "10%",
    img: "/src/assets/image12.png",
    bgimg: "/src/assets/Vector.png",
    headline: "V-dog | Drools",
    discountedPrice: "Rs. 999",
    price: "MRP Rs. 1500",
  },
];

const Products = () => {
  return (
    <section id="product" className="product">
      <div className="container mycontainer py-5">
        <div className="row product-content">
          <h4>Pet </h4>
          <h4>Food Products</h4>
          <img src={line} alt={line} className="service-line" />
          <div className="d-flex justify-content-between align-items-center product-text">
            <p>Upto 25% OFF on all Products</p>
            <button className="product-btn">View More</button>
          </div>
        </div>
        <div className="row mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="product-card col-xl-3 col-md-4 col-sm-6"
            >
              <div className="card-header d-flex justify-content-between order-success">
                <p>{item.discount}</p>
                <p>
                  <i className="bi bi-heart"></i>
                </p>
              </div>
              <div className="card-body text-center text-success">
                <div className="img-box">
                  <img src={item.img} alt="" className="product-img" />
                  <img
                    src={item.bgimg}
                    alt={item.bgimg}
                    className="img-fluid bgimg"
                  />
                </div>
                <h5 className="card-title text-center text-black mt-5">
                  {item.headline}
                </h5>
                <p className="card-text text-center text-black">
                  {item.discountedPrice}
                </p>
                <p className="card-text text-center text-black">{item.price}</p>
              </div>
              <div className="card-footer">
                <button>Add to cart</button>
                <button>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
