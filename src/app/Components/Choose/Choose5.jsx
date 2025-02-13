import Image from "next/image";
import Link from "next/link";
import Brand3 from "../Brand/Brand3";
import Brand1 from "../Brand/Brand1";

const Choose5 = () => {
    return (
<section style={{marginBottom:"-100px"}} className="wcu-section section-padding pt-0 fix">
        <div className="wcu-container-wrapper style3">
            <div className="container">
                <div className="wcu-wrapper style3">
                    <div className="row gy-5 gx-60">
                        <div className="col-xl-6">
                            <div className="wcu-content">
                                <div className="section-title">
                                    <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                    RIDY Charge Stations    <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   />
                                    </div>
                                    <h1 className="title wow fadeInUp animate__animated  animate__fadeInLeft" data-wow-delay=".4s">  Revolutionizing Urban Mobility for Women</h1>
                                    <p className="text1 wow fadeInUp animate__animated  animate__fadeInLeft animate__delay-1s " data-wow-delay=".6s"> We are Revolutionizing urban Transporatation with Eco-Friendly E-Vehicles powered by our own integrated E-Charging Stations </p>
                                </div>
                                <Link style={{marginTop:"50px "}} className="theme-btn rounded-5 wow fadeInUp" data-wow-delay=".4s" href="/contact">
                                Get Started 
                                    <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_190_64)">
                                            <path
                                                d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_190_64">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                               
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="wcu-thumb">
                                <div className="main-thumb  wow fadeInUp" data-wow-delay=".4s">
                                    <Image className="imagesFeatureCard" src="/assets/images/intro/cab4.jpg" alt="img" width={400} height={503}   />
                                </div>
                                <div className="thumb2">
                                    <Image className="" src="/assets/images/wcu/wcuThumb3_2.png" alt="img" width={558} height={340}   />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-5 gx-60">
                    <Brand1 title=" Main Hubs in Chennai  " 
                    />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Choose5;