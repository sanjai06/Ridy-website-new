import Image from "next/image";
import Link from "next/link";

const Feature2 = () => {
    return (

        <section className="feature-section section-padding fix">
            <div className="container">
                <div className=" container col-xl-10 ">
                    <div   className="feature-content">
                        <div style={{ textAlign: "center" }} className="section-title">
                            <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                Investment Opportunity Why  <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17} />
                            </div>
                            <h1 className="title wow fadeInUp" data-wow-delay=".4s">
                                Invest in RIDY? </h1>
                            <p  style={{ textAlign: "start" }} className="section-desc ml-50 wow fadeInUp" data-wow-delay=".6s">A high-growth market with increasing demand for women-specific transportation services. </p>
                            <p style={{ textAlign: "start" }} className="section-desc ml-50 wow fadeInUp">Proven business model focused on safety, sustainability, and scalability. </p>
                            <p style={{ textAlign: "start" }} className="section-desc ml-50 wow fadeInUp">Strong revenue streams with competitive profit margins. </p>
                        </div> 
                        <div style={{ textAlign: "center" }} className="">
                        <Link   className="theme-btn wow fadeInUp" data-wow-delay=".2s" href="/contact">Start
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
                </div>
            </div>
        </section>
    );
};

export default Feature2;