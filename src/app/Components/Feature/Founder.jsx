import Image from 'next/image';
import data from '../../Data/feature3.json';
import SectionTitle from '../Common/SectionTitle';

const Feature6 = () => {
    return (
        <section className="feature-provide-section featuremargintop fix section-padding pt-0">
            <div className="container">
                <div className="section-title text-center mxw-685 mx-auto mb-60">
                    <SectionTitle
                        SubTitle="founders "
                        Title="Meet the Founders  "
                    ></SectionTitle>
                </div>
                <div className="row  cardmargintop ">

                    {data.map((item, index) => (
                        <div key={index} className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className='founder'>
                                <div className="icon">
                                    <Image src={item.img} alt="img" width={200} height={200} />
                                </div>
                                <div className="Founder_content">
                                    <h3>{item.desc}</h3>
                                    <h1>{item.title}</h1>
                                  
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
};

export default Feature6;