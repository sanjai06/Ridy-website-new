"use client"
import Slider from "react-slick";
import data from '../../Data/brand1.json';
import Image from "next/image";

const Brand1 = ({ title, content }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div style={{ marginTop: "-0", height: "auto" }} className="brand-slider-section  section-padding fix">
      <div className="brand-slider-container-wrapper style1">
        <div className="container">
          <div

            className="brand-slider-wrapper style1">
            <h1 style={
              { fontSize: "30px" }
            } className="single-section-title wow mb-20 fadeInUp" data-wow-delay=".2s">
              {title}
            </h1>
            <h3 style={{ textAlign: "center" }} className="intro-desc wow mb-20 fadeInUp animate__animated  animate__fadeInLeft animate__delay-1s " data-wow-delay=".4s">{content}</h3>
            <div
              className="row   ">
              <div style={{
                backgroundImage: "url('/assets/images/intro/cab5.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius:"20px",
                padding: "20px  ",
                height: "300px",
                position: "relative"
              }} className="  slider-area brandSliderOne">
                <div style={{marginTop:"150px"}} className="swiper gt-slider" id="brandSliderOne" >
                  <Slider {...settings}>
                    {data.map((item, index) => (
                      <div key={index} className="  swiper-slide">
                        <div className=" glass-div brand-logo">
                          <h3 style={{ fontSize: "40px", color: "white" }} >{item.title}</h3>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand1;