import Image from "next/image";
import Link from "next/link";
import FeatureCard from "../Card/FeatureCard";

const Choose1 = ({ subtitle, title,margintop, content, item4, item2, item3, item5, item6, item1 }) => {
    return (

        <section style={{marginTop:`${margintop}`}}  className="advantage-section ridemarignbottom fix">
            <div className="advantage-container-wrapper style1">
                <div className="container col-xl-10 ">
                    <div style={{ background: "#fff", borderRadius: "0",marginBottom:"-90px", marginTop:"-10px" }} className="advantage-wrapper style1 section-padding">
                        <div className="container ">
                            <div className="row gy-5 d-flex align-items-center">
                                <div className="col-xl-12 order-2 assuredmargintop  order-xl-1">
                                    <div className="advantage-content">
                                        <div style={{ textAlign: "center" }} className="section-title wow fadeInUp" data-wow-delay=".2s">
                                            <div className="subtitle">
                                                {subtitle} <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17} />
                                            </div>
                                            <h1 className="title">{title}</h1>
                                            <p className="section-desc">{content}</p>
                                        </div>
                                        <div className=" martopfancycard  style1">
                                            <div className="row gy-5  d-flex   justify-content-center">
                                                <div className="col-xl-4 d-flex   justify-content-center">
                                                    <div className="wcu-content  ">
                                                        <FeatureCard
                                                            fancycard="fancycard"
                                                            animation="animate__animated animate__fadeInLeft  animate__delay-1s "
                                                            img="/assets/images/icon/17.svg"
                                                            title={item1}
                                                        ></FeatureCard>
                                                        <FeatureCard
                                                            fancycard="fancycard"
                                                            animation="animate__animated animate__fadeInLeft  animate__delay-2s "
                                                            img="/assets/images/icon/3.svg"
                                                            title={item2}
                                                        >
                                                        </FeatureCard>
                                                        <FeatureCard
                                                            fancycard="fancycard"
                                                            animation="animate__animated animate__fadeInLeft  animate__delay-3s "
                                                            img="/assets/images/icon/18.svg"
                                                            title={item3}
                                                        >
                                                        </FeatureCard>

                                                    </div>
                                                </div>

                                                <div className="col-xl-4 d-flex martopfancycard   justify-content-center ">
                                                    <div  className="wcu-content  ">
                                                        <FeatureCard
                                                            fancycard="fancycard"
                                                            animation="animate__animated animate__fadeInRight  animate__delay-1s "
                                                            img="/assets/images/icon/9.svg"
                                                            title={item4}
                                                        >
                                                        </FeatureCard>
                                                        <FeatureCard
                                                            fancycard="fancycard"
                                                            animation="animate__animated animate__fadeInRight  animate__delay-2s "
                                                            img="/assets/images/icon/19.svg"
                                                            title={item5}
                                                        >
                                                        </FeatureCard>
                                                        <FeatureCard
                                                            fancycard="fancycard"
                                                            animation="animate__animated animate__fadeInRight  animate__delay-3s "
                                                            img="/assets/images/icon/15.svg"
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