const Banner = () => {
  return (
    <div className="container-fluid banner">
      <div className="row">
        <div className="col banner1">
          <h5>
            <i>Slip, clip & style-</i>
          </h5>
          <p>the art of pet grooming</p>
        </div>
        <div className="col d-flex flex-column">
          <span className="banner-text">
            Lorem ipsum dolor sit amet, consectetur adipiscg elit. Sed consequat
            justo ac libero tincidunt.
          </span>
          <button className="book-btn">Book an appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
