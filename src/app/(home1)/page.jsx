import React from 'react';
import HeroBanner4 from '../Components/HeroBanner/Herobanner4';
import About5 from '../Components/About/About5';
import Choose3 from '../Components/Choose/Choose3';
import Feature1 from '../Components/Feature/Feature1';
import Feature5 from '../Components/Feature/Feature5';
import Feature6 from '../Components/Feature/Feature6';
import Testimonial from '../Components/Testimonial/Testimonial';
import Faq from '../Components/Faq/Faq';
import Choose5 from '../Components/Choose/Choose5';
import Choose1 from '../Components/Choose/Choose1';
import Services2 from '../Components/Services/Services2';
import HeroBanner3 from '../Components/HeroBanner/HeroBanner3';

const page = () => {
    return (
        <div>
            <HeroBanner3
                display="none"
                imgbg={"url('/assets/images/intro/cab13.jpg')"}
                hide="none"
                Title2="Women Focused Taxi Service"
                subTitle="Ridy The Lady Cab"
                title=" Right Initiative For Daily Yatra "
                first="Women Focused"
                second="100% Electric Rides "
                third="Safety First  "
                margintop="100px"
            ></HeroBanner3>
            <Feature5
                mrgtop={"featuremargintop2"}
                img1="/assets/images/icon/1.svg"
                img2="/assets/images/icon/4.svg"
                img3="/assets/images/icon/5.svg"
                title="Seamless | Safe | Sustainable "
                content="Designed Exclusively for Women "
                item1="Affordable Pricing "
                item2="Women Drivers "
                item3="Live Tracking "
            ></Feature5>
            <Feature6>
            </Feature6>
            <HeroBanner4
                margintop="-50px"
                imgbg={"url('/assets/images/intro/cab3.jpg')"}
                subTitle="Manual Booking"
                title="Manual Booking-Fast & Flexible "
                hidden="none"
            ></HeroBanner4>

            <Feature5
                mrgtop="featuremargintop3"
                img1="/assets/images/icon/11.svg"
                img2="/assets/images/icon/9.svg"
                img3="/assets/images/icon/10.svg"
                mtop="-175px"
                item1=" Easy Selection "
                item2="Flexible Timing "
                item3=" Hassle Free Experience "
            ></Feature5>
            <About5
                subtitle="Business With Us "
                subTitle="– Here to support you ! "
                title="Your Business Your Growth RIDY "
                boximg1="/assets/images/icon/9.svg"
                boxtitle1="Safe & Reliable Rides  "
                boxcontent1="Travel for Business Meetings,Networking & client visits "
                boximg2="/assets/images/icon/1.svg"
                boxtitle2="Women Led-Business Support "
                boxcontent2="Collaborating with women Entrepreneurs "
                boximg3="/assets/images/icon/5.svg"
                boxtitle3="Affordable & Convenient "
                boxcontent3="Budget friendly rides for Stress Free Ride "
                img1="/assets/images/intro/cab2.jpg"
                btnname="Ride with US "
                btnurl="/about"
                borderRadius="none"
                none="none"
            ></About5>
            <Feature1></Feature1>
            <Choose3 title2={" Benefits You Get By Ridy"}
                margintop="-120px"
                imgbg={"url('/assets/images/intro/cab5.jpg')"}
                subTitle={"Ride Safe with RIDY  "}
                title=" Benefits Using Ridy  "
                FeatureList={[

                    " Screened,Trained Drivers ",
                    " Safety is our Priority ",
                    "Trust us for Safe Rides ",
                    " 24/7 Support ",


                ]}
                btnname="Download App"
                btnurl="/contact"
            ></Choose3>
            {/* <Testimonial>
            </Testimonial> */}
            <Services2
                subTitle="Angels of RIDY"
                title="Women Drivers - Angels of RIDY "
                btnname="Drive with US "
                btnurl="/service"
            ></Services2>

            <About5
                hidden2={"none"}
                mtop="-70px"
                subtitle={"Future with RIDY "}
                content="Become a RIDY Partner by leasing just 10 e-bikes to us and Enjoy steady, Risk-free income with flexible investment plans. "
                title="Your Future With RIDY "
                boximg1="/assets/images/icon/12.svg"
                boximg2="/assets/images/icon/17.svg"
                boximg3="/assets/images/icon/10.svg"
                boximg4="/assets/images/icon/2.svg"
                boxtitle1=" 15%+ IRR   "
                boxtitle2=" fixed income  "
                boxtitle3="100% hassle-free  "
                box4="Start with just 10 e-bikes "
                boxcontent1="Earn 15%+ IRR over a 4 year investment"
                boxcontent2="Earn fixed income with tax benefits"
                boxcontent3="100% hassle-free investment with guaranteed returns"
                boxcontent4=" Start with just 10 e-bikes or invest in a RIDY Hub"
                img1="/assets/images/intro/cab14.jpg"
                btnname="Ride with US "
                btnurl="/about"
                borderRadius="none"
            ></About5>
            <Choose1
                margintop="-20px"
                subtitle="Assured by RIDY   "
                title=" drive with US "
                item2=" Safety is Priority "
                item1=" Boost your  Earnings "
                item6="Frequent Payouts "
                item3="Incentives "
                item4="Easy Onboarding "
                item5="Referral Programs "
            ></Choose1>
            <Faq margintop="65px"
            >
            </Faq>

        </div>
    );
};

export default page;