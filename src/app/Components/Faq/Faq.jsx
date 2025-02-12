"use client"
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import { useState } from "react";
import { useEffect } from "react";
import data from '../../Data/faq1.json';
import Image from "next/image";
import Faq1 from "./Faq1";
import Faq2 from "./Faq2";
import Faq3 from "./Faq3";

const Faq = () => {

    const [isActive, setIsActive] = useState('monthly');

    const [render, setrender] = useState("Faq1");
    const renderFaq = () => {
        switch (render) {

            case "Faq1": return <Faq1 />;
            case "Faq2": return <Faq2 />;
            case "Faq3": return <Faq3 />;

            default: return null;

        }
    };



    return (

        <section style={{marginTop:"-60px"}} className="faq-section section-padding fix">
            <div className="container col-xl-10 ">
                <div className="faq-wrapper style1">
                    <div className="row gy-5 gy-xl-0 gx-60 d-flex align-items-start">
                        <div className="">
                            <div className="faq-content style1">
                                <div className="section-title">
                                    <SectionTitle
                                        SubTitle="FAQs"
                                        Title="Frequently Ask Questions"
                                    ></SectionTitle>
                                    <div className="buttonsfaq">
                                        <button className="theme-btn wow br " onClick={() => setrender("Faq1")}>Rider</button>
                                        <button className="theme-btn wow br " onClick={() => setrender("Faq2")}>Driver</button>
                                        <button className="theme-btn wow br" onClick={() => setrender("Faq3")}>Invester</button>
                                        </div>
                                </div> 
                             
                                {renderFaq()}
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;