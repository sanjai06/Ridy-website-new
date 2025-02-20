
import Link from 'next/link';
import data from '../../Data/services2.json';
import Image from 'next/image';
import SectionTitle from "../Common/SectionTitle";

const Services2 = ({ btnurl, btnname,subTitle,title }) => {
    return (
        <section style={{marginTop:"-0px"}} className="service-section section-padding fix">
            <div style={{ marginTop: "-120px" }} className="service-container-wrapper style1">
                <div className="container">
                    <div className=" section-title text-center mxw-685 mx-auto wow animate__animated  animate__fadeInLeft  fadeInUp" data-wow-delay=".2s">
                        <SectionTitle
                            SubTitle= {` ${subTitle}`} 
                            Title={` ${title}`}
                        ></SectionTitle>
                    </div>
                    <div className="service-wrapper style1">
                        <div className="row gy-5">
                            {data.map((item, index) => (
                                <div key={index} className="col-xl-4 col-md-4 col-sm-5 col-xs-6 ">
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} className="service-box style3 wow fadeInLeft" data-wow-delay=".3s">
                                        <div className="icon-box style3">
                                            <Image src={item.icon} alt="img" width={40} height={40} />
                                        </div>
                                        <div style={{textAlign:"center"}} className="content">
                                            <h3><Link href="/service/service-details"> {item.title}</Link></h3>
                                            <p className="text">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        {/* <div className="" style={{ textAlign: "center", marginTop: "40px" }}>
                            <Link className="theme-btn wow fadeInUp" data-wow-delay=".6s" href={btnurl}> {btnname}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_43_54)">
                                        <path
                                            d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_43_54">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services2;