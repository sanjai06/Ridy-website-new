import Image from 'next/image';
import data from '../../Data/feature2.json';
import SectionTitle from '../Common/SectionTitle';

const Feature6 = () => {
    return (
        <section className="feature-provide-section featuremargintop fix section-padding pt-0">
            <div className="container">
                <div className="section-title text-center mxw-685 mx-auto mb-60">
                    <SectionTitle
                        SubTitle="Our Features"
                        Title="We Priortize  "
                    ></SectionTitle>
                </div>
                <div className="row cardmargintop ">

                    {data.map((item, index) => (
                        <div key={index} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className={item.addclass}>
                                <div className="icon">
                                    <Image src={item.img} alt="img" width={76} height={77} />
                                </div>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>
                                        {item.desc}
                                    </p>
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