import About1 from '@/app/Components/About/About1';
import About2 from '@/app/Components/About/About2';
import About3 from '@/app/Components/About/About3';
import Choose1 from '@/app/Components/Choose/Choose1';
import Choose2 from '@/app/Components/Choose/Choose2';
import Choose3 from '@/app/Components/Choose/Choose3';
import Choose4 from '@/app/Components/Choose/Choose4';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Faq1 from '@/app/Components/Faq/Faq1';
import Faq2 from '@/app/Components/Faq/Faq2';
import HowWork from '@/app/Components/HowWork/HowWork';
import Testimonial from '@/app/Components/Testimonial/Testimonial';
import React from 'react';


const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Ride with us"
            ></BreadCumb> 
        <br />
              <About1
                img1="/assets/images/intro/cab5.jpg"
                img2="/assets/images/about/aboutThumb1_2.png"
                subtitle="About Ridy"
                title="Who We Are "
                content="RIDY is a women-focused ride-sharing platform revolutionizing urban mobility by blending safety, sustainability, and empowerment into one seamless experience.  "
                title2={"content"}
                content2={"To create a world where women can travel confidently while reducing carbon footprints and fostering gender equality. "}
                title3={"Our Vision "}
                content3={"To be the leading provider of eco-friendly, women-centric ride services in India and beyond. "}
                // FeatureList={[
                    
                //     ""
                // ]}
                btnname="Discover More"
                btnurl="/contact"
            ></About1> 
       
            <HowWork></HowWork>

            <Choose4>
              </Choose4>  
            <Faq2></Faq2>
            <Testimonial></Testimonial>                         
    </div>
  );
};

export default page;