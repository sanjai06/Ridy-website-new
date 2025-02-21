import About5 from '@/app/Components/About/About5';
import Brand3 from '@/app/Components/Brand/Brand3';
import Choose2 from '@/app/Components/Choose/Choose2';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Counter1 from '@/app/Components/Counter/Counter1';
import Cta1 from '@/app/Components/Cta/Cta1';
import Faq from '@/app/Components/Faq/Faq';
import Feature2 from '@/app/Components/Feature/Feature2';
import HeroBanner4 from '@/app/Components/HeroBanner/Herobanner4';
import Pricing1 from '@/app/Components/Pricing/Pricing1';
import Pricing2 from '@/app/Components/Pricing/Pricing2';
import Pricing3 from '@/app/Components/Pricing/Pricing3';
import Pricing4 from '@/app/Components/Pricing/Pricing4';
import React from 'react';

const page = () => {
  return (
    <div>
      {/* <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title=" "
      ></BreadCumb> */}
      <Choose2
        margintop="200px"
        imgbg={"url('/assets/images/intro/cab9.jpg')"}
        title="invest with us"
        subTitle="Invest With Ridy  "
        title2="Join the electric Revolution with supporting women"
        btnname="Invest In Us "
        btnurl="/contact"
      ></Choose2>
      <About5
        mtop="-60px"
        subtitle="Future with RIDY  "
        content="Become a RIDY Partner by leasing just 10 e-bikes to us and Enjoy steady, Risk-free income with flexible investment plans. "
        title="Your Future With RIDY "
        boximg1="/assets/images/icon/12.svg"
        boximg2="/assets/images/icon/14.svg"
        boximg3="/assets/images/icon/11.svg"
        boximg4="/assets/images/icon/15.svg"
        boxtitle1=" 15%+ IRR   "
        boxtitle2=" fixed income  "
        boxtitle3="100% hassle-free  "
        box4="Start with just 10 e-bikes "
        boxcontent1="Earn 15%+ IRR over a 4 year investment"
        boxcontent2="Earn fixed income with tax benefits"
        boxcontent3="100% hassle-free investment with guaranteed returns"
        boxcontent4=" Start with just 10 e-bikes or invest in a RIDY Hub"
        img1="/assets/images/intro/cab10.jpg"
        btnname="Ride with US "
        btnurl="/contact"
        borderRadius="none"
      ></About5>
      <Pricing3

      >
      </Pricing3>
      <Counter1></Counter1>
      <Feature2></Feature2>
      <Cta1
        subtitle="Our App"
        title="Download our app and start your Ride , Drive  to get started today!"
        content="RIDY offers a variety of safe and reliable ride options, ensuring a seamless travel experience tailored for women"
        btnurl1="https://play.google.com/store"
        btnurl2="https://www.apple.com/store"
        img="/assets/images/intro/cab6.jpg"
      ></Cta1>
      <Faq margintop="-40px"
      ></Faq>
    </div>
  );
};

export default page;