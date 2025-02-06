import About1 from '@/app/Components/About/About1';
import Choose2 from '@/app/Components/Choose/Choose2';
import Choose4 from '@/app/Components/Choose/Choose4';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import HowWork from '@/app/Components/HowWork/HowWork';
import Testimonial4 from '@/app/Components/Testimonial/Testimonial4';
import React from 'react';


const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="About Us"
            ></BreadCumb> 
            <br />
              <About1
                img1="/assets/images/about/aboutThumb1_1.jpg"
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
                btnurl="/about"
            ></About1> 
            <Choose2
               img1="/assets/images/wcu/wcuThumb2_1.png" 
               img2="/assets/images/wcu/wcuThumb2_2.png" 
               img3="/assets/images/wcu/wcuThumb2_3.png" 
               subtitle="Customizations & Analysis" 
               title="Manage your Team's Easily Communication." 
               content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even" 
               boximg1="/assets/images/icon/wcuIcon2_1.svg" 
               boxtitle1="Easy Collaboration" 
               boxcontent1="There are many variations of passages of Lorem Ipsum available, but the majority have" 
               boximg2="/assets/images/icon/wcuIcon2_2.svg" 
               boxtitle2="Innovative Solutions" 
               boxcontent2="There are many variations of passages of Lorem Ipsum available, but the majority have" 
            ></Choose2> 
            <HowWork></HowWork>
            <Choose4></Choose4>  
            <Testimonial4></Testimonial4>                         
    </div>
  );
};

export default page;