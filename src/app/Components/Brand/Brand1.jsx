"use client"
import Slider from "react-slick";
import data from '../../Data/brand1.json';
import Image from "next/image";
import SectionTitle from '../Common/SectionTitle';

const Brand1 = ({ title2, title, subTitle, content }) => {

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
          slidesToScroll: 1,

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
          slidesToScroll: 1,

        }
      }
    ]
  };

  return (
    <div style={{ marginTop: "-20px", height: "auto" }} className="brand-slider-section  section-padding fix">
      <div className="brand-slider-container-wrapper style1">
        <div className="container col-xl-10">
          <div className="brand-slider-wrapper style1">
            <div className=" animate__animated  animate__fadeInLeft  section-title text-center mxw-685 mx-auto ">
              <SectionTitle
                SubTitle={`${subTitle}`}
                Title={`${title}`}
              ></SectionTitle>
            </div>
            <h3 style={{ textAlign: "center" }} className="intro-desc wow mb-20 fadeInUp animate__animated  animate__fadeInLeft animate__delay-1s " data-wow-delay=".4s">{content}</h3>
            <div
              className="row   ">
              <div style={{
                backgroundImage: "url('/assets/images/intro/cab11.jpg')",
                backgroundSize: "cover",
                backgroundPosition: " top center",
                backgroundRepeat: "no-repeat",
                padding: "20px  ",
                position: "relative",
                width:"94%",
                margin:"auto"
              }} className="  slider-area homeimages brandSliderOne">
                <div className="swiper brandmargintop gt-slider" id="brandSliderOne" >
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