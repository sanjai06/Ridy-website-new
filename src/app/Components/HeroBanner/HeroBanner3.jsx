"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import Link from "next/link";
import Image from "next/image";
import FeatureCard from "../Card/FeatureCard";
import ProjectCard from "../Card/ProjectCard";
import SectionTitle from '../Common/SectionTitle';


const HeroBanner3 = ({ title, Title2, display,  subTitle, hidden,  first, second, imgbg, third, margintop }) => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (

        <section className="intro-section mb-20 br">
            <div className="intro-wrapper style2" >
                <div className="  ">
                    <div className="intro-content   margintop" style={{ marginTop: `${margintop}` }}>
                        <div className="margintops">
                            <div className=" animate__animated  animate__fadeInLeft  section-title text-center mxw-685 mx-auto ">
                                <SectionTitle
                                    Title2={`${Title2}`}
                                    SubTitle={`${subTitle}`}
                                    Title={`${title}`}
                                    hidden={`${display}`}

                                ></SectionTitle>
                            </div>
                        </div>
                        <div className=" backgroundimagehome "
                            style={{
                                backgroundImage: `${imgbg}`,
                                backgroundSize: "cover",
                                backgroundPosition: " top  center ",
                                padding: "20px  ",
                                height: "600px",
                                width: "90%",
                                position: "relative",
                                margin: "auto "
                            }}>
                            <div style={{ display: `${hidden}`, }} className="homeimagesdiv " >
                                <FeatureCard 
                                    img="/assets/images/icon/1.svg"
                                    title={first}
                                ></FeatureCard>
                                <FeatureCard
                                    img="/assets/images/icon/2.svg"
                                    title={second}
                                ></FeatureCard>
                                <FeatureCard
                                    img="/assets/images/icon/3.svg"
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

export default HeroBanner3;