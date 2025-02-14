import Image from "next/image";
import Link from "next/link";

const Feature2 = () => {
    return (
        
        <section className="feature-section section-padding fix">
            <div className="container">
                <div className="feature-wrapper style1">
                    <div className="row rowreverce gy-5 gx-134">
                        <div className="col-xl-6 order-2 order-xl-1">
                            <div className="feature-content">
                                <div className="section-title">
                                    <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                    Investment Opportunity Why  <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   />
                                    </div>
                                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                                    Invest in RIDY? </h2>
                                    <p className="section-desc wow fadeInUp" data-wow-delay=".6s">A high-growth market with increasing demand for women-specific transportation services. </p>
                                    <p className="section-desc wow fadeInUp">Proven business model focused on safety, sustainability, and scalability. </p>
                                    <p className="section-desc wow fadeInUp">Strong revenue streams with competitive profit margins. </p>
                                </div>
                                <Link className="theme-btn wow fadeInUp" data-wow-delay=".2s" href="/contact">Start
                                Investment <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_91_29)">
                                            <path
                                                d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_91_29">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 order-1 order-xl-2">
                            <div className="feature-box-wrapper">
                                <div className="feature-box style1 child1">
                                    <div className="feature-box-header wow fadeInUp" data-wow-delay=".2s">
                                        <div className="content">
                                            <h5>Ready to Ride? </h5>
                                            <p className="text">Get your first ride free! Book now and experience the RIDY difference. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-box style1 child2">
                                    <div className="feature-box-header wow fadeInUp" data-wow-delay=".2s">
                                        <div className="content">
                                            <h5>Partner With Us </h5>
                                            <p className="text">Be part of our Ridy community.  </p>

                                        </div>
                                    </div>
                                </div>
                              
                                <div className="feature-box style1 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="feature-box-header">
                                        <div className="content">
                                            <h5>mission </h5>
                                            <p className="text">Be part of our mission to empower women and transform urban mobility. </p>
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

export default Feature2;