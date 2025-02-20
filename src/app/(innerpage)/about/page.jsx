import Choose2 from '@/app/Components/Choose/Choose2';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import HowWork from '@/app/Components/HowWork/HowWork';
import React from 'react';
import Services1 from '@/app/Components/Services/Services1';
import Faq from '@/app/Components/Faq/Faq';
import Brand1 from '@/app/Components/Brand/Brand1';


const page = () => {
  return (
    <div >
      {/* <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Ride with us"
      ></BreadCumb> */}

      <Choose2
        imgbg={"url('/assets/images/intro/cab5.jpg')"}
        title="Book Ride With Us"
        subTitle="Ride Safe With Ridy     "
        content=" "
        title2="Safe & Secure Journeys "
        btnname="Book Ride"
        btnurl="/contact"
      ></Choose2>

      <Services1
      ></Services1>
      <Brand1
      subTitle="Ridy location"
        title="RIDY's operational Locations "
        content="Ensuring Seamless and Eco-Friendly fleet "
      ></Brand1>
      {/* <HowWork></HowWork> */}
      <Faq></Faq>
    </div>
  );
};

export default page;