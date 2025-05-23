import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import cofounder from '../../../../public/assets/images/Founder/Founders__md.jpg'
import founder from '../../../../public/assets/images/Founder/cofounder__ceo.jpg'


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
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className='founder'>
                            <div className="icon">
                                <Image src={founder} alt="img" width={200} height={200} />
                            </div>
                            <div className="Founder_content">
                                <h3>Founder & Managing Director</h3>
                                <h1>Ahamad Thowfeek B</h1>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className='founder'>
                            <div className="icon">
                                <Image src={cofounder} alt="img" width={200} height={200} />
                            </div>
                            <div className="Founder_content">
                                <h3>Co-Founder & CEO</h3>
                                <h1>Nazneen A</h1>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Feature6;