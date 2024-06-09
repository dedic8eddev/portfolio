import Slider from "react-slick";
import Review1Image from "../../assets/img/review.jpg";
import Review2Image from "../../assets/img/review-2.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} slick rectangle`}
      onClick={onClick}
    >
      <i className="fa fa-angle-left" />
    </button>
  );
}

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} slick rectangle`}
      onClick={onClick}
    >
      <i className="fa fa-angle-right" />
    </button>
  );
}

const ReviewSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  return (
    <section className="site-section section-reviews text-center">
      <div className="container">
        <h2>Client Reviews</h2>
        <p className="section-subtitle"><span>READ WHAT MY CLIENTS HAVE TO SAY</span></p>
      </div>

      <div className="blue-bg">
        <div className="container">
          <div className="review-carousel">
            <Slider {...settings}>
              <div className="review">
                {/* <div className="rectangle">
                  <img src={Review1Image} className="img-res" alt="" />
                </div> */}
                <p>If there were 100 star rating I would leave 110. I have been building sites now full time for 7 years and in business for 12 and have never worked with such a solid developer with such a wonderful set of themes.</p>
                <div className="review-author">
                  <h3>Mike Taylor</h3>
                  <p>CEO at Sports Portal</p>
                </div>
              </div>
              <div className="review">
                {/* <div className="rectangle">
                  <img src={Review2Image} className="img-res" alt="" />
                </div> */}
                <p>Vladimir Jovovic is a rare senior developer who does things the right way. I’ve been consistently impressed with his process, organization and strategic method of doing the project right way.</p>
                <div className="review-author">
                  <h3>Anna Murray</h3>
                  <p>CEO at Law firm</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewSection;
