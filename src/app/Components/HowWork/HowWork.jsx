import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const HowWork = () => {
    return (
        <section className="work-process-section section-padding fix">
            <div className="work-process-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-565 mx-auto">
                        <SectionTitle
                            SubTitle="How Ridy Work"
                            Title="100% Electric Rides Reliable, Safe & Premium"
                        ></SectionTitle>
                    </div>
                    <div className="work-process-wrapper style1">
                        <div className="shape"><Image src="/assets/images/shape/workProcessShape1_1.png" alt="img" width={1416} height={225} /></div>
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="step">STEP - 01</div>
                                    <div className="title animate__animated animate__fadeInDown animate__delay-1s ">Download App</div>
                                    <div className="text animate__animated animate__fadeInDown ">Easy registration with user-friendly features. </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 child2 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="step">STEP - 02</div>
                                    <div className="title animate__animated animate__fadeInUp animate__delay-1s">Book Your Ride</div>
                                    <div className="text animate__animated animate__fadeInUp">Set your pick-up and destination with a single click. </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="step">STEP - 03</div>
                                    <div className="title animate__animated animate__fadeInDown animate__delay-1s">Enjoy the Ride</div>
                                    <div className="text animate__animated animate__fadeInDown a">Experience safety, comfort, and reliability</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWork;