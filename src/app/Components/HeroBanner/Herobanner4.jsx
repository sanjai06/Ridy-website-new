"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import Link from "next/link";
import Image from "next/image";
import FeatureCard from "../Card/FeatureCard";
import ProjectCard from "../Card/ProjectCard";

const HeroBanner2 = ({ title, content, innercontent, first, second, third,margintop }) => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (

        <section className="intro-section mb-20 br">
            <div className="intro-wrapper style2" >
                <div className="container  ">
                    <div className="intro-content   margintop" style={{marginTop:`${margintop}`}}>
                        <div className="margintops">
                            <h1 className="intro-title wow  animate__fadeInLeft animate__animated " data-wow-delay=".2s">{(title)}</h1>
                            <h3 className="intro-desc wow fadeInUp animate__animated  animate__fadeInLeft animate__delay-1s " data-wow-delay=".4s">{content}</h3>
                        </div>
                        <div className="homeimages  "
                            style={{
                                backgroundImage: "url('/assets/images/intro/cab5.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                padding: "20px  ",
                                borderRadius: "30px",
                                height: "500px",
                                position:"relative"
                            }}>
                            <div className="innerimagediv"   >
                                <h2 className="  "
                                    style={{
                                         fontSize: "34px" , color:"white" 

                                    }}>{innercontent}</h2>

                            </div>
                            <div className="homeimagesdiv " >
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

export default HeroBanner2;