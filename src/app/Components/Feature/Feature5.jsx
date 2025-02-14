import Image from "next/image";

const Feature5 = ({title,content,item1,item2,item3,display}) => {
    return (
        <section className="feature-section fix section-padding pt-0">
            <div className="container">
                <div style={{display:`${display}`}} className="homepagetext">
                    <h1 className="intro-title wow  animate__fadeInLeft animate__animated " data-wow-delay=".2s">{(title)}</h1>

                    <h3 className="intro-desc wow fadeInUp animate__animated  animate__fadeInLeft animate__delay-1s " data-wow-delay=".4s">{content}</h3>
                </div>
                <div className="row g-4">

                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="feature-box-items  animate__animated  animate__fadeInLeft animate__delay-1s">
                            <div className="icon">
                                <Image src="/assets/images/icon/wcuIcon1_3.svg" alt="img" width={40} height={40} />
                            </div>
                            <div className="content">
                                <h3>{item1} </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="feature-box-items  animate__animated  animate__fadeInUp animate__delay-1s">
                            <div className="icon">
                                <Image src="/assets/images/icon/wcuIcon1_3.svg" alt="img" width={40} height={40} />
                            </div>
                            <div className="content">
                                <h3>{item2}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="feature-box-items animate__animated  animate__fadeInRight animate__delay-1s">
                            <div className="icon">
                                <Image src="/assets/images/icon/wcuIcon1_3.svg" alt="img" width={40} height={40} />
                            </div>
                            <div className="content ">
                                <h3>{item3}  </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature5;