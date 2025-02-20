import Image from "next/image";
import Link from "next/link";
import FeatureCard from "../Card/FeatureCard";

const Choose1 = ({ subtitle, title, content, item4, item2, item3, item5, item6, item1 }) => {
    return (

        <section className="advantage-section fix">
            <div className="advantage-container-wrapper style1">
                <div className="container col-xl-10 ">
                    <div style={{ background: "#fff", borderRadius: "0",marginBottom:"-90px" }} className="advantage-wrapper style1 section-padding">
                        <div className="container ">
                            <div className="row gy-5 d-flex align-items-center">
                                <div style={{ marginTop: "0" }} className="col-xl-11 order-2 order-xl-1">
                                    <div className="advantage-content">
                                        <div style={{ textAlign: "center" }} className="section-title wow fadeInUp" data-wow-delay=".2s">
                                            <div className="subtitle">
                                                {subtitle} <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17} />
                                            </div>
                                            <h1 className="title">{title}</h1>
                                            <p className="section-desc">{content}</p>
                                        </div>
                                        <div className="wcu-wrapper  style1">
                                            <div className="row gy-5 mb-20  d-flex   justify-content-center">
                                                <div className="col-xl-4 d-flex martopfancycard  justify-content-center">
                                                    <div className="wcu-content martopfancycard ">
                                                        <FeatureCard
                                                            fancycard="fancycard"
                                                            animation="animate__animated animate__fadeInLeft  animate__delay-1s "
                                                            img="/assets/images/icon/checkmarkIcon.svg"
                                                            title={item1}
                                                        ></FeatureCard>
                                                        <FeatureCard
                                                            fancycard="fancycard"
                                                            animation="animate__animated animate__fadeInLeft  animate__delay-2s "
                                                            img="/assets/images/icon/checkmarkIcon.svg"
                                                            title={item2}
                                                        >
                                                        </FeatureCard>
                                                        <FeatureCard
                                                            fancycard="fancycard"
                                                            animation="animate__animated animate__fadeInLeft  animate__delay-3s "
                                                            img="/assets/images/icon/checkmarkIcon.svg"
                                                            title={item3}
                                                        >
                                                        </FeatureCard>

                                                    </div>
                                                </div>

                                                <div className="col-xl-4 d-flex martopfancycard  justify-content-center ">
                                                    <div  className="wcu-content  ">
                                                        <FeatureCard
                                                            fancycard="fancycard"
                                                            animation="animate__animated animate__fadeInRight  animate__delay-1s "
                                                            img="/assets/images/icon/checkmarkIcon.svg"
                                                            title={item4}
                                                        >
                                                        </FeatureCard>
                                                        <FeatureCard
                                                            fancycard="fancycard"
                                                            animation="animate__animated animate__fadeInRight  animate__delay-2s "
                                                            img="/assets/images/icon/checkmarkIcon.svg"
                                                            title={item5}
                                                        >
                                                        </FeatureCard>
                                                        <FeatureCard
                                                            fancycard="fancycard"
                                                            animation="animate__animated animate__fadeInRight  animate__delay-3s "
                                                            img="/assets/images/icon/checkmarkIcon.svg"
                                                            title={item6}
                                                        >
                                                        </FeatureCard>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Choose1;