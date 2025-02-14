"use client"
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import { useState } from "react";
import { useEffect } from "react";
import data from '../../Data/faq1.json';
import Image from "next/image";

const Faq1 = () => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);

    const handleItemClick = index => {
        if (index === openItemIndex) {
            setOpenItemIndex(-1);
        } else {
            setOpenItemIndex(index);
        }
    };
    useEffect(() => {
        if (firstItemOpen) {
            setOpenItemIndex(0);
            setFirstItemOpen(false);
        }
    }, [firstItemOpen]);




    return (
        <>
            <div style={{marginTop:"20px",padding:"20px " , fontSize:"20px"}}  className="subtitle wow fadeInUp" data-wow-delay=".2s">
            Rider  
            </div>
            <div className="faq-accordion">
                <div className="accordion" id="accordion">
                    {data.slice(0, 5).map((item, index) => (
                        <div key={index} className={`accordion-item mb-3 wow fadeInUp ${index === openItemIndex ? "active" : ""}`} data-wow-delay=".3s">
                            <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                <button className="accordion-button collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true"
                                    aria-controls="faq1">
                                    {item.title}
                                </button>
                            </h5>
                            <div ref={accordionContentRef} id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};

export default Faq1;