import Image from "next/image";
import Link from "next/link";
import SectionTitle from '../Common/SectionTitle';


const Choose3 = ({ hide, subTitle, margintop, title2, title, content, FeatureList2, FeatureList, btnurl, imgbg, btnname }) => {
    return (
        <section style={{ marginTop: `${margintop}` }} className="wcu-section  " >
            <div className="wcu-container-wrapper benefitsmargintop  style2">
                <div className="container  col-xl-1500 " style={{ borderRadius: "0px", marginTop: "-120px" }}>
                    <div style={{ borderRadius: "0px", background: "#fff" }} className="wcu-wrapper style2  section-padding fix">
                        <div style={{margin:"auto"}} className="  col-xl-10  ">
                            <div className=" animate__animated  animate__fadeInLeft  section-title text-center mxw-685 mx-auto mb-60">
                                <SectionTitle
                                    SubTitle={`${subTitle}`}
                                    Title={`${title}`}
                                ></SectionTitle>
                            </div>
                            <div
                                style={{
                                    marginTop:"-30px",
                                    backgroundImage: `${imgbg}`,
                                    backgroundSize: "cover ",
                                    backgroundPosition: " top center",
                                    backgroundRepeat: "no-repeat",
                                    borderRadius: "30px",
                                    height:"600px"
                                }}>
                                <div className="innerdivservices "    >
                                    <h2 style={{textAlign:"start",fontWeight:"700"}} className="titlenew textsmmd animate__animated animate__fadeInRight ">{title2}</h2>
                                    <p className="">{content}</p>
                                    <div  className="col-xl-12">
                                        <div className="advantage-content   ">
                                            <div    className="checklist-wrapper mt-25 style1 wow fadeInUp   " data-wow-delay=".4s">
                                                <ul className="checklist animate__animated animate__fadeInRight   animate__delay-1s   ">
                                                    {FeatureList?.map((item, index) => (
                                                        <li key={index}>
                                                            <div className="imagesulli">
                                                                <Image src="/assets/images/icon/checkmarke.svg" alt="img" width={30} height={30} />{item}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul> 
                                                <ul className="checklist maaarginleftmdsm  animate__animated animate__fadeInRight  animate__delay-2s  ">
                                                    {FeatureList2?.map((item, index) => (
                                                        <li key={index}>
                                                            <div className="imagesulli">
                                                                <Image src="/assets/images/icon/checkmarke.svg" alt="img" width={30} height={30} />{item}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className=" ml-50 " style={{ textAlign: "start"  }}>
                                                <Link className="theme-btn   wow fadeInUp" data-wow-delay=".6s" href={btnurl}> {btnname}
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Choose3;