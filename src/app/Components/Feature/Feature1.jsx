import Image from "next/image";
import FeatureCard from "../Card/FeatureCard";
import FeatureCard2 from "../Card/FeatureCard2";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
    return (
        <section className="wcu-section section-padding fix">
            <div className="wcu-container-wrapper style1">
                <div className="container">
                    <div className=" section-title text-center mxw-685 mx-auto wow animate__animated  animate__fadeInLeft  fadeInUp" data-wow-delay=".2s">
                        <SectionTitle
                            SubTitle="Why RIDY- Lady Cab ?"
                            Title="Empowering Sustainable and Hassle-Free Mobility"
                        ></SectionTitle>
                    </div>
                    <div className="wcu-wrapper style1">
                        <div className="row gy-5 d-flex justify-content-center">
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-content">
                                    <FeatureCard
                                        animation="animate__animated  animate__fadeInLeft "
                                        img="/assets/images/icon/wcuIcon1_1.svg"
                                        title="100% Electric Fleet  "
                                    ></FeatureCard>
                                   <FeatureCard
                                   animation="animate__animated  animate__fadeInRight animate__delay-1s "
                                   title="In – House Charging "
                                   img="/assets/images/icon/wcuIcon1_2.svg"
                                   >

                                   </FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_3.svg"
                                        animation="animate__animated  animate__fadeInLeft animate__delay-2s "
                                        title="Strategic Hub Locations  "
                                    ></FeatureCard>

                                </div>
                            </div>
                          
                            <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                                <div className="wcu-content">
                                    <FeatureCard
                                        animation="animate__animated  animate__fadeInRight "
                                        img="/assets/images/icon/wcuIcon1_3.svg"
                                        title="Smart Charging , Zero Hassle  "
                                    ></FeatureCard>
                                    <FeatureCard
                                        animation="animate__animated  animate__fadeInRight animate__delay-1s "
                                        img="/assets/images/icon/wcuIcon1_4.svg"
                                        title=" 20+ High Performance E – Vehicle  "
                                    ></FeatureCard>
                                    <FeatureCard
                                        animation="animate__animated  animate__fadeInRight animate__delay-2s  "
                                        img="/assets/images/icon/wcuIcon1_4.svg"
                                        title="Sustainable Rides  "
                                    ></FeatureCard>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature1;