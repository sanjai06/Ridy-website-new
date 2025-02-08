import Image from "next/image";
import Link from "next/link";

const Choose4 = () => {
    return (
<section className="wcu-section section-padding pt-0 fix">
        <div className="wcu-container-wrapper style3">
            <div className="container">
                <div className="wcu-wrapper style3">
                    <div className="row gy-5 gx-60">
                        <div className="col-xl-6">
                            <div className="wcu-content">
                                <div className="section-title">
                                    <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                    Why Choose RIDY?  <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   />
                                    </div>
                                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">  Revolutionizing Urban Mobility for Women</h2>
                                    <p className="text1 wow fadeInUp" data-wow-delay=".6s"> RIDY is more than a ride-sharing app – it’s a platform dedicated to empowering women, ensuring safety, and promoting sustainability. 
                                    Our services are designed to create a positive impact, one ride at a time.</p>
                                    <p className="text2 wow fadeInUp" data-wow-delay=".8s">  From verified women drivers to eco-conscious travel, RIDY redefines how women commute in urban spaces.</p>
                                </div>
                                <Link className="theme-btn rounded-5 wow fadeInUp" data-wow-delay=".4s" href="/contact">View
                                More About RIDY
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
                                <div className="counter-box-wrapper style3">
                                    <div className="counter-box style3 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="counter">
                                            <span className="counter-nubmer">56</span> <span>k+</span>
                                        </div>
                                        <p className="text">Increase in Safer Rides</p>
                                    </div>
                                    <div className="counter-box style3 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="counter">
                                            <span className="counter-nubmer">126</span> <span>k+</span>
                                        </div>
                                        <p className="text">Women-Driven Rides</p>
                                    </div>
                                    <div className="counter-box style3 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="counter">
                                            <span className="counter-nubmer">1.2</span> <span>M+</span>
                                        </div>
                                        <p className="text">Happy Riders </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="wcu-thumb">
                                <div className="main-thumb img-custom-anim-left wow fadeInUp" data-wow-delay=".4s">
                                    <Image className="imagesFeatureCard" src="/assets/images/intro/cab4.jpg" alt="img" width={400} height={503}   />
                                </div>
                                <div className="thumb2">
                                    <Image className="" src="/assets/images/wcu/wcuThumb3_2.png" alt="img" width={558} height={340}   />
                                </div>
                                <div className="thumb-box float-bob-y wow fadeInUp" data-wow-delay=".4s">
                                    <h5>Empowered Journeys</h5>
                                    <p className="text">Every ride is safe mobility for women.</p>
                                    <div className="shape-box">
                                        <Image src="/assets/images/shape/wcuThumbShape3_1.png" alt="img" width={100} height={100}   />
                                        <div className="shape-content">
                                            <h6>Transaction</h6>
                                            <h3>86%</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Choose4;