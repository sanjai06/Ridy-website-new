"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Counter1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        
        <div className="counter-section  fix" >
            <div  className="counter-container-wrapper style1">
                <div className="container">
                    <div  className="counter-wrapper style1 section-padding">
                        <div  className="container ">
                            <div  className="row gy-5">
                                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                                    <div className="counter-box style1 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="counter">
                                            <span className="counter-number">1000</span> <span className="plus">+</span>
                                        </div>
                                        <p className="text">Surveys</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                                    <div className="counter-box style1 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="counter">
                                            <span className="counter-number">500</span> <span className="plus">+</span>
                                        </div>
                                        <p className="text">Social Media Followers </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                                    <div className="counter-box style1 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="counter">
                                            <span className="counter-number">800</span> <span className="plus">+</span>
                                        </div>
                                        <p className="text">Impressions</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                                    <div className="counter-box style1 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="counter">
                                            <span className="counter-number">10</span> <span className="plus">+</span>
                                        </div>
                                        <p className="text">Supporting Partners .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter1;