import Link from 'next/link';
import data from '../../Data/services1.json';
import Image from 'next/image';
import SectionTitle from "../Common/SectionTitle";

const Services1 = ({}) => {
    return (
        <section style={{marginTop:"-10px"}} className="service-section section-padding ridemarignbottom fix">
            <div style={{ marginTop: "-30px" }} className="service-container-wrapper style1">
                <div className="container">
                    <div className=" section-title text-center mxw-685 mx-auto wow animate__animated  animate__fadeInLeft  fadeInUp" data-wow-delay=".2s">
                        <SectionTitle
                              SubTitle=" Angels of RIDY "
                            Title=" Book Ride in Ridy "
                        ></SectionTitle>
                    </div>
                    <div className="service-wrapper style1">
                        <div className="row gy-5">
                            {data.map((item, index) => (
                                <div key={index} className="col-xl-4 col-md-4 col-sm-5 col-xs-6 ">
                                    <div style={{ display: "flex", flexDirection: "column", marginBottom:"-30px", justifyContent: "center", alignItems: "center" ,width:"270px" , margin:"auto"}} className="service-box style3 wow fadeInLeft" data-wow-delay=".3s">
                                        <div style={{display:"flex" , justifyContent:"center",alignItems:"center"}} className="icon-box style2">
                                            <Image src={item.icon} alt="img" width={40} height={40} />
                                        </div>
                                        <div style={{textAlign:"center",marginBottom:"-25px"}} className="content">
                                            <h3><Link href="/service/service-details"> {item.title}</Link></h3>
                                            <p className="text">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services1;