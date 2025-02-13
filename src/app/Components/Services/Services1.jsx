import Link from 'next/link';
import data from '../../Data/services1.json';
import Image from 'next/image';
import SectionTitle from "../Common/SectionTitle";


const Services1 = () => {
    return (
<section className="service-section section-padding fix">
        <div className="service-container-wrapper style1">
            <div className="container">
            <div className=" section-title text-center mxw-685 mx-auto wow animate__animated  animate__fadeInLeft  fadeInUp" data-wow-delay=".2s">
                        <SectionTitle
                            SubTitle=" Angels of RIDY "
                            Title=" Book RIDY Rides"
                            hidden="none"
                        ></SectionTitle>
                    </div>
                <div className="service-wrapper style1">
                    <div className="row gy-5">
                    {data.map((item, index)=>(
                        <div key={index} className="col-xl-4 col-md-4 col-sm-5 col-xs-6">
                            <div  style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                             className="service-box style3 wow fadeInLeft" data-wow-delay=".3s">
                                <div className="icon-box style3">
                                <Image src={item.icon} alt="img" width={40} height={40}   />
                                </div>
                                <div className="content">
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