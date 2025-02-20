"use client"
import { useEffect, useState } from "react";
import PricingCard from "../Card/PricingCard";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Pricing3 = () => {

    const [isActive, setIsActive] = useState('monthly');

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section style={{marginTop:"-60px"}} className="pricing-section-3 section-padding fix" >
            <div className="container">
                <div className="section-title text-center mxw-685 mx-auto">
                    <div className="subtitle">
                        Income Model <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17} />
                    </div>
                    <h1 className="title">Invest in Future of Smart Mobility with RIDY </h1>
                </div>
                <div className="pricing-wrapper style1">

                    <div className="tab-content" id="pills-tabContent">
                        <div role="tabpanel"
                            aria-labelledby="pills-monthly-tab">
                            <div style={{ display: "flex", justifyContent:"center",gap:"100px" }} className="row gy-5">

                                <PricingCard
                                    name="Fixed Rental Income Model"
                                    content=" Fixed Rental Income Model (For Short-Term Investors)"
                                    FeatureList={[
                                        "  Investment: ₹10-12 Lakhs (10 E-Bikes)",
                                        " Monthly Returns: ₹2000 – 3000/- (Based on the E-Bike)",
                                        "Agreement: 4 years",
                                        "Total Earnings in 4 Years: ₹14.4 Lakhs",
                                        "ROI: 20-40% in 4 years",
                                        "Break-even: 34 Months"

                                    ]}
                                    btnname="Get You Free plan"
                                    btnurl="/pricing"
                                ></PricingCard>

                                <PricingCard
                                    name="Hub-Based Investment Model"
                                    content="Hub-Based Investment Model (For Long-Term Growth) "
                                    FeatureList={[
                                       " Investment: ₹ 50 Lakhs (Includes E-bikes + Charging + Hub setup)",
                                        "Monthly Returns: ₹ 90,000 (Net after RIDY’s 10% Management Fee)",
                                        "Agreement: 5 years",
                                        "Total Earnings in 5 Years: ₹ 86.4 Lakhs",
                                        "ROI: 72.8% in 8 years",
                                        "Break-even: 56 Months",
                                        
                                    ]}
                                    btnname="Get You Free plan"
                                    btnurl="/pricing"
                                ></PricingCard>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Pricing3;