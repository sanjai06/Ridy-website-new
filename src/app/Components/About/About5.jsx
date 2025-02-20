import Image from "next/image";
import Link from "next/link";
import SectionTitle from '../Common/SectionTitle';


const About5 = ({ subtitle, box4, boximg5, mtop,title, subTitle, content, none, boximg1, boxtitle1, boxcontent4, boxcontent1, boximg2, boxtitle2, boxcontent2, boxtitle3, boxcontent3, boximg3, img1, btnurl, btnname }) => {
    return (
        <section style={{ marginTop:`${mtop}` }} className="about-section">
            <div className="about-container-wrapper style2">
                <div className="container col-xl-10">
                    <div style={{ borderRadius: "0", background: "#fff" }} className="about-wrapper style2  section-padding fix">
                        <div className="container">
                            <div className=" animate__animated  animate__fadeInLeft  section-title text-center mxw-685 mx-auto mb-60">
                                <SectionTitle
                                    SubTitle={`${subtitle}`}
                                    Title={`${title}`}
                                ></SectionTitle>

                            </div>
                            <div className="row rowreverce gy-5 gx-60 d-flex align-items-center">
                                <div className="col-xl-6">
                                    <div className="about-thumb">
                                        <Image className="imagesFeatureCard mdsmhidden " style={{ position: "relative" }} src={img1} alt="img" width={100} height={450} />
                                    </div>
                                </div>
                                <div className="col-xl-6 order-xl-1">
                                    <div className="about-content">
                                    <div className="fancy-box animate__animated  animate__fadeInRight  style3 mb-20 wow fadeInUp" data-wow-delay=".2s">
                                        <p className=" mxw-640 wow fadeInUp" data-wow-delay=".6s">{content}</p>
                                        </div>                                        <div className="fancy-box animate__animated  animate__fadeInRight animate__delay-1s style3 mb-20 wow fadeInUp" data-wow-delay=".2s">
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
