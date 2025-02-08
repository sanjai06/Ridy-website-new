import Brand3 from '@/app/Components/Brand/Brand3';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta2 from '@/app/Components/Cta/Cta2';
import Choose1 from '@/app/Components/Choose/Choose1';
import Services1 from '@/app/Components/Services/Services1';
import Team2 from '@/app/Components/Team/Team2';
import React from 'react';
import About1 from '@/app/Components/About/About1';


const page = () => {
  return (
    <div>
        <BreadCumb
              bgimg="/assets/images/bg/breadcumgBg.png"
              Title="Drive with us "
          ></BreadCumb>   
           <Cta2></Cta2>
           <br />
           <About1 
          img1="/assets/images/intro/cab7.jpg"
          
          subtitle="Why Drive with RIDY"
          title="Join the RIDY Driver Community"
          content="RIDY is transforming urban mobility by offering drivers a platform that prioritizes flexibility, safety, and opportunity. Be part of a growing movement that values your efforts and supports your success."
          title2="Our Commitment"
          content2="At RIDY, we ensure that every driver-partner enjoys a rewarding experience with consistent payouts, zero vehicle ownership costs, and robust driver support."
          title3="Why Choose RIDY"
          content3="From flexible working hours to empowering women drivers, RIDY is designed to create a driver-first ecosystem, fostering financial growth, safety, and job satisfaction."
          btnname="Join Us Today"
          btnurl="/contact"
          ></About1>
           <Services1></Services1>
           <Choose1
            subtitle=" join as driver   "
            title=" drive with US " 
            content=" Join the Ridy community and unlock a world of opportunities by being a valued driver-partner."
           
            
            FeatureList={[
                "Weekly Payouts And Bonus",
                "Flexible Working Hours",
                "Zero Ownership Cost",

            ]}
            FeatureList2={[
              "Safety-First Approach",
              "Comprehensive Training Programs",
              "24/7 Support for Drivers",
              "Empowering Women Drivers with Exclusive Benefits",
            ]}
            btnname="contact us "
            btnurl="/contact"
        ></Choose1>
         
    </div>
  );
};

export default page;