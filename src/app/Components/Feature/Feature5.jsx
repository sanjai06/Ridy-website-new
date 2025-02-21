// import Image from "next/image";

// const Feature5 = ({title,content,item1,item2,item3,display}) => {
//     return (
//         <section className="feature-section fix section-padding   pt-0">
//             <div className="container   ">
//                 <div style={{display:`${display}`}} className=" mt homepagetext">
//                     <h1 className="intro-title wow  animate__fadeInLeft animate__animated " data-wow-delay=".2s">{(title)}</h1>

//                     <h3 className="intro-desc wow fadeInUp animate__animated  animate__fadeInLeft animate__delay-1s " data-wow-delay=".4s">{content}</h3>
//                 </div>
//                 <div  className="row g-4">

//                     <div  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
//                         <div className="feature-box-items  animate__animated  animate__fadeInLeft animate__delay-1s">
//                             <div className="icon">
//                                 <Image src="/assets/images/icon/wcuIcon1_3.svg" alt="img" width={40} height={40} />
//                             </div>
//                             <div className="content">
//                                 <h3>{item1} </h3>
//                             </div>
//                         </div>
//                     </div>
//                     <div  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
//                         <div className="feature-box-items  animate__animated  animate__fadeInUp animate__delay-1s">
//                             <div className="icon">
//                                 <Image src="/assets/images/icon/wcuIcon1_3.svg" alt="img" width={40} height={40} />
//                             </div>
//                             <div className="content">
//                                 <h3>{item2}</h3>
//                             </div>
//                         </div>
//                     </div>
//                     <div  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
//                         <div className="feature-box-items animate__animated  animate__fadeInRight animate__delay-1s">
//                             <div className="icon">
//                                 <Image src="/assets/images/icon/wcuIcon1_3.svg" alt="img" width={40} height={40} />
//                             </div>
//                             <div className="content ">
//                                 <h3>{item3}  </h3>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Feature5;

"use client"
import Slider from "react-slick";
import data from '../../Data/brand1.json';
import Image from "next/image";

const Feature5 = ({ title, item1, item2, item3,img2,img1,img3, mtop }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
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
                    slidesToShow:2,
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

        <div style={{ marginTop:`${mtop}`, height: "auto" }} className="brand-slider-section  section-padding fix">
            <div className="brand-slider-container-wrapper style1">
                <div className="container">
                    <div className=" mt homepagetext">
                        <h1 className="intro-title wow  animate__fadeInLeft animate__animated " data-wow-delay=".2s">{(title)}</h1>
                    </div>
                    <div className="  slider-area ">
                        <div  className="swiper gt-slider" id="brandSliderOne" >
                            <Slider {...settings}>
                               
                                <div className="col-xl-4   col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="feature-box-items brodershaow  ">
                                        <div className="icon">
                                            <Image src={img1} alt="img" width={40} height={40} />
                                        </div>
                                        <div className="">
                                            <h3 style={{fontSize:"24px"}}>{item2} </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4   col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="feature-box-items brodershaow  ">
                                        <div className="icon">
                                            <Image src={img2} alt="img" width={40} height={40} />
                                        </div>
                                        <div className="">
                                            <h3 style={{fontSize:"24px"}}>{item1} </h3>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-4   col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="feature-box-items brodershaow  ">
                                        <div className="icon">
                                            <Image src={img3} alt="img" width={40} height={40} />
                                        </div>
                                        <div className="">
                                            <h3  style={{fontSize:"24px"}}>{item3} </h3>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Feature5;