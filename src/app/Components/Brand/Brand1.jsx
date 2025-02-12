"use client"
import Slider from "react-slick";
import data from '../../Data/brand1.json';
import Image from "next/image";

const Brand1 = ({title,}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,             
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

    return (
        <div style={{marginTop:"-0",height:"200px"}} className="brand-slider-section  section-padding fix">
            <div className="brand-slider-container-wrapper style1">
                <div className="container">
                    <div className="brand-slider-wrapper style1">
                        <h1 className="single-section-title wow fadeInUp" data-wow-delay=".2s">
                          {title}
                        </h1>
                        <div className="row">
                            <div className="slider-area brandSliderOne">
                                <div className="swiper gt-slider" id="brandSliderOne" >
                                    <Slider {...settings}>
                                    {data.map((item, index)=>(
                                        <div key={index} className="swiper-slide">
                                            <div className="brand-logo">
                                           <h2 >{item.title}</h2>
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