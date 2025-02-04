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
                            SubTitle="Why using our app"
                            Title="Our app is great for individuals, startups and enterprises"
                        ></SectionTitle>                       
                    </div>
                    <div className="wcu-wrapper style1">
                        <div className="row gy-5 d-flex justify-content-center">
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_1.svg"
                                        title="High usability"
                                        content="There are many variations of passages of Lorem Ipsum"
                                    ></FeatureCard>
                                     <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_2.svg"
                                        title="Action Reminder"
                                        content="There are many variations of passages of Lorem Ipsum"
                                    ></FeatureCard>    
                                      <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_3.svg"
                                        title="Merge Files"
                                        content="There are many variations of passages of Lorem Ipsum"
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