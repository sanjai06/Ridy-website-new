import Brand3 from '@/app/Components/Brand/Brand3';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta2 from '@/app/Components/Cta/Cta2';
import Choose1 from '@/app/Components/Choose/Choose1';
import Services1 from '@/app/Components/Services/Services1';
import Team2 from '@/app/Components/Team/Team2';
import React from 'react';
import About1 from '@/app/Components/About/About1';
import HeroBanner4 from '@/app/Components/HeroBanner/Herobanner4';
import Choose2 from '@/app/Components/Choose/Choose2';
import Feature5 from '@/app/Components/Feature/Feature5';
import Services2 from '@/app/Components/Services/Services2';
import Faq from '@/app/Components/Faq/Faq';


const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Drive with us "
      ></BreadCumb>
      <Choose2
        hide="none"
        subTitle="Drive Safe With Ridy     "
        title2="Join the most exclusive RIDY Driver Network "
        btnname="Join as Driver"
        btnurl="/contact"
      ></Choose2>
      <Feature5
        display="none"
        item1=" Women only Drivers"
        item2=" No Investment need"
        item3="Live Tracking "


      ></Feature5>
      <Services2
        subTitle="Why RIDY Driver ?"
        title="It’s all about Empowerment, Flexibility & Stability"
        btnname="Drive with US "
        btnurl="/contact"
      ></Services2>
      <Choose1
        subtitle=" join As Driver   "
        title=" drive with US "

        FeatureList={[
          "Weekly Payouts And Bonus",
          "Flexible Working Hours",
          "Zero Ownership Cost",
          "Safety-First Approach",
          "Comprehensive Training Programs",
          "24/7 Support for Drivers",
          "Empowering Women Drivers with Exclusive Benefits",

        ]}
        // FeatureList2={[
        
        // ]}
        btnname="contact us "
        btnurl="/contact"
      ></Choose1>
      <Choose2
        subTitle="Documentation "
        title=" Easy Documentation Process  "
        content=" "
        title2={"Just come with your proofs & Start Earning "}
        FeatureList2={[
          " 1.Valid Driving License  ",
          " 2. Aadhaar Card",
          "Bank Details"


        ]}
        FeatureList={[

          "3. Permanent Address Proofs ",
          " Safety is our Priority ",
          "Emergency contact number "


        ]}
        btnname="Download App"
        btnurl="/contact"
      ></Choose2>
      <Faq></Faq>
    </div>
  );
};

export default page;