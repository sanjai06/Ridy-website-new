import Image from "next/image";
import Link from "next/link";


const About5 = ({ subtitle, box4, boximg5, title, content, none, boximg1, boxtitle1, boxcontent4, boxcontent1, boximg2, boxtitle2, boxcontent2, boxtitle3, boxcontent3, boximg3, img1, btnurl, btnname }) => {
    return (
        <section style={{marginTop:"100px"}} className="about-section">
            <div className="about-container-wrapper style2">
                <div className="container col-xl-10">
                    <div style={{ borderRadius: "0", background: "#fff" }} className="about-wrapper style2  section-padding fix">
                        <div className="container">
                            <div className="row rowreverce gy-5 gx-60 d-flex align-items-center">
                                <div className="col-xl-6">
                                    <div className="about-thumb">
                                        <Image className="imagesFeatureCard mdsmhidden " style={{ position: "relative" }} src={img1} alt="img" width={100} height={400} />
                                        <div className="" style={{ textAlign: "center",marginTop:"26px"  }}>
                                            <Link className="theme-btn wow fadeInUp" data-wow-delay=".6s" href={btnurl}> {btnname}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <g clipPath="url(#clip0_43_54)">
                                                        <path
                                                            d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                                            fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_43_54">
                                                            <rect width="16" height="16" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 order-2 order-xl-1">
                                    <div className="about-content">
                                        <div className="section-title  ">
                                            <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                                {subtitle}<Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17} />
                                            </div>
                                            <h1 className="title animate__animated  animate__fadeInRight wow " data-wow-delay=".4s">{title}</h1>
                                            <p className="text1 mxw-640 wow fadeInUp" data-wow-delay=".6s">{content}</p>
                                        </div>
                                        <div className="fancy-box animate__animated  animate__fadeInRight animate__delay-1s style3 mb-20 wow fadeInUp" data-wow-delay=".2s">
                                            <div className="icon">
                                                <Image src={boximg1} alt="img" width={70} height={70} />
                                            </div>
                                            <div className="content">
                                                <h4>{boxtitle1}</h4>
                                                <p className="text">{boxcontent1}</p>
                                            </div>
                                        </div>
                                        <div className="fancy-box animate__animated  animate__fadeInRight animate__delay-2s style3 mb-20  wow fadeInUp" data-wow-delay=".4s">
                                            <div className="icon">
                                                <Image src={boximg2} alt="img" width={70} height={70} />
                                            </div>
                                            <div className="content">
                                                <h4>{boxtitle2}</h4>
                                                <p className="text">{boxcontent2}</p>
                                            </div>
                                        </div>
                                        <div className="fancy-box animate__animated  animate__fadeInRight mb-20 animate__delay-3s style3 wow fadeInUp" data-wow-delay=".4s">
                                            <div className="icon">
                                                <Image src={boximg3} alt="img" width={70} height={70} />
                                            </div>
                                            <div className="content">
                                                <h4>{boxtitle3}</h4>
                                                <p className="text">{boxcontent3}</p>
                                            </div>
                                        </div>
                                        <div className="fancy-box animate__animated  animate__fadeInRight animate__delay-4s style3  wow fadeInUp" data-wow-delay=".2s">
                                            <div className="icon">
                                                <img style={{ display: `${none}` }} src={boximg5} alt="img" width={70} height={70} />
                                            </div>
                                            <div className="content">
                                                <h4>{box4} </h4>
                                                <p className="text">{boxcontent4}</p>
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

export default About5;
