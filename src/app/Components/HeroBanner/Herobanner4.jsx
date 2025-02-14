"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import Link from "next/link";
import Image from "next/image";
import FeatureCard from "../Card/FeatureCard";
import ProjectCard from "../Card/ProjectCard";
import SectionTitle from '../Common/SectionTitle';


const HeroBanner4 = ({ title,subTitle,hide,display,  innercontent, first, second, third, margintop }) => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (

        <section className="intro-section mb-20 br">
            <div className="intro-wrapper style2" >
                <div className="container  ">
                    <div className="intro-content   margintop" style={{ marginTop: `${margintop}` }}>
                        <div className="margintops">
                            <div className=" animate__animated  animate__fadeInLeft  section-title text-center mxw-685 mx-auto mb-60">
                                <SectionTitle 
                                    SubTitle={`${subTitle}`}
                                    Title={`${title}`}
                                ></SectionTitle>
                            </div>
                        </div>
                        <div className="homeimages  "
                            style={{
                                backgroundImage: "url('/assets/images/intro/cab5.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                padding: "20px  ",
                                borderRadius: "30px",
                                height: "468px",
                                position: "relative"
                            }}>
                            <div className="innerimagediv"   >
                                <h2 className=" textsmmd animate__animated  animate__fadeInRight   "
                                    style={{
                                         color: "white"

                                    }}>{innercontent}</h2>

                            </div>
                            <div style={{display:`${display}`}} className="homeimagesdiv " >
                                <FeatureCard
                                    img="/assets/images/icon/wcuIcon1_1.svg"
                                    title={first}
                                ></FeatureCard>
                                <FeatureCard
                                    img="/assets/images/icon/wcuIcon1_2.svg"
                                    title={second}
                                ></FeatureCard>
                                <FeatureCard
                                    img="/assets/images/icon/wcuIcon1_3.svg"
                                    title={third}
                                ></FeatureCard>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default HeroBanner4;