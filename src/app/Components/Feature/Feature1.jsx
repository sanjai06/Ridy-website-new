import Image from "next/image";
import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
    return (
        <section className="wcu-section section-padding fix">
            <div className="wcu-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-685 mx-auto wow fadeInUp" data-wow-delay=".2s">
                        <SectionTitle
                            SubTitle="Why Choose RIDY"
                            Title="Perfectly Designed for Women, Startups, and Communities"
                        ></SectionTitle>
                    </div>
                    <div className="wcu-wrapper style1">
                        <div className="row gy-5 d-flex justify-content-center">
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_1.svg"
                                        title="Women-to-Women Service "
                                        content="Every ride connects women with skilled, verified women drivers."
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_2.svg"
                                        title="Real-Time Safety"
                                        content="GPS tracking, emergency buttons & 24/7 customer support.  "
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_3.svg"
                                        title="Empowerment "
                                        content="Empowering women drivers with a safe work environment."
                                    ></FeatureCard>

                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                                    <div className="main-thumb wow bounceInUp" data-wow-delay=".6s">
                                        <Image src="/assets/images/intro/car2.jpg" alt="img" width={400} height={400} />
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_3.svg"
                                        title="Eco-Friendly Fleet  "
                                        content="100% electric vehicles for sustainable urban transport.  "
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_4.svg"
                                        title="Custom Packages "
                                        content="Perfect for college students, working professionals, and homemakers. "
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_4.svg"
                                        title="Affordable Pricing"
                                        content="Transparent pricing designed to make safe, reliable rides accessible to everyone."
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