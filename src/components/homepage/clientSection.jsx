import Slider from "react-slick";
import Client1Image from "../../assets/img/client-1.png";
import Client2Image from "../../assets/img/client-2.png";
import Client3Image from "../../assets/img/client-3.png";
import Client4Image from "../../assets/img/client-4.png";
import Client5Image from "../../assets/img/client-5.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: false,
  };

  return (
    <section className="section-clients">
      <div className="container">
        <div className="text-center section-diff-title">
          <h2>Clients I’ve Worked So Far</h2>
          <p></p>
        </div>

        <div className="clients-carousel">
          <Slider {...settings}>
            <a className="client">
              <img src={Client1Image} className="img-responsive" alt="" />
            </a>
            <a className="client">
              <img src={Client2Image} className="img-responsive" alt="" />
            </a>
            <a className="client">
              <img src={Client3Image} className="img-responsive" alt="" />
            </a>
            <a className="client">
              <img src={Client4Image} className="img-responsive" alt="" />
            </a>
            <a className="client">
              <img src={Client5Image} className="img-responsive" alt="" />
            </a>
            <a className="client">
              <img src={Client3Image} className="img-responsive" alt="" />
            </a>
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default ClientSection;
