import React from 'react';
import HeroBanner4 from '../Components/HeroBanner/Herobanner4';
import About5 from '../Components/About/About5';
import Choose2 from '../Components/Choose/Choose2';
import Feature1 from '../Components/Feature/Feature1';
import Feature5 from '../Components/Feature/Feature5';
import Feature6 from '../Components/Feature/Feature6';
import Testimonial from '../Components/Testimonial/Testimonial';
import Faq from '../Components/Faq/Faq';
import Choose5 from '../Components/Choose/Choose5';
import Choose1 from '../Components/Choose/Choose1';
import Services2 from '../Components/Services/Services2';

const page = () => {
    return (
        <div>
            <HeroBanner4
                imgbg={"url('/assets/images/intro/cab5.jpg')"}
                hide="none"
                subTitle="Ridy The Lady Cab"
                title=" Right Initiative For Daily Yatra "
                innercontent="Women Focused Taxi Service "
                first="Women Focused"
                second="100% Electric Rides "
                third="Safety First  "
                margintop="146px"
            ></HeroBanner4>
            <Feature5
                mtop="-20px"
                title="Seamless | Safe | Sustainable "
                content="Designed Exclusively for Women "
                item1="Affordable Pricing "
                item2="Women Drivers "
                item3="Live Tracking "
            ></Feature5>
            <Feature6>
            </Feature6>
            <HeroBanner4
                imgbg={"url('/assets/images/intro/cab9.jpg')"}
                subTitle="Manual Booking"
                title="Manual Booking-Fast & Flexible "
                innercontent="Manual Booking Features gives you full control over your schedule "
                hidden="none"
            ></HeroBanner4>
            <Feature5
                mtop="-180px"
                title=" Exclusively "
                item1=" Easy Selection "
                item2="Flexible Timing "
                item3=" Hassle Free Experience "
            ></Feature5>
            <About5
                subtitle="Business With Us "
                mtop="-70px"
                subTitle="– Here to support you ! "
                title="Your Business Your Growth RIDY "
                boximg1="/assets/images/icon/wcuIcon2_1.svg"
                boxtitle1="Safe & Reliable Rides  "
                boxcontent1="Travel for Business Meetings,Networking & client visits "
                boximg2="/assets/images/icon/wcuIcon2_2.svg"
                boxtitle2="Women Led-Business Support "
                boxcontent2="Collaborating with women Entrepreneurs "
                boximg3="/assets/images/icon/wcuIcon2_2.svg"
                boxtitle3="Affordable & Convenient "
                boxcontent3="Budget friendly rides for Stress Free Ride "
                img1="/assets/images/intro/cab7.jpg"
                btnname="Ride with US "
                btnurl="/about"
                borderRadius="none"
                none="none"
            ></About5>
            <Feature1></Feature1>
            <Choose2
                margintop="0"
                imgbg={"url('/assets/images/intro/cab4.jpg')"}
                subTitle="Ride Safe with RIDY    "
                title=" Benefits Using Ridy  "
                content=" "
                title2={"Get Benefit By Using  Ridy "}
                FeatureList2={[



                ]}
                FeatureList={[

                    " Screened & Trained Drivers ",
                    " Safety is our Priority ",
                    "Trust us for Safe Rides ",
                    " 24/7 Support ",


                ]}
                btnname="Download App"
                btnurl="/contact"
            ></Choose2>
            <Testimonial>
            </Testimonial>
            <Services2
                subTitle="Angels of RIDY"
                title="Women Drivers - Angels of RIDY "
                btnname="Drive with US "
                btnurl="/service"
            ></Services2>

            <About5
                mtop="-70px"
                subTitle="Future with RIDY "
                content="Become a RIDY Partner by leasing just 10 e-bikes to us and Enjoy steady, Risk-free income with flexible investment plans. "
                title="Your Future With RIDY "
                boximg1="/assets/images/icon/wcuIcon2_1.svg"
                boximg2="/assets/images/icon/wcuIcon2_2.svg"
                boximg3="/assets/images/icon/wcuIcon2_2.svg"
                boximg5="/assets/images/icon/wcuIcon2_2.svg"
                boxtitle1=" 15%+ IRR   "
                boxtitle2=" fixed income  "
                boxtitle3="100% hassle-free  "
                box4="Start with just 10 e-bikes "
                boxcontent1="Earn 15%+ IRR over a 4 year investment"
                boxcontent2="Earn fixed income with tax benefits"
                boxcontent3="100% hassle-free investment with guaranteed returns"
                boxcontent4=" Start with just 10 e-bikes or invest in a RIDY Hub"
                img1="/assets/images/intro/cab8.jpg"
                btnname="Ride with US "
                btnurl="/about"
                borderRadius="none"
            ></About5>
            <Choose1
                subtitle="Assured by RIDY   "
                title=" drive with US "
                item2=" Safety is Priority "
                item1=" Boost your  Earnings "
                item6="Frequent Payouts "
                item3="Incentives "
                item4="Easy Onboarding "
                item5="Referral Programs "
            ></Choose1>
            <Faq margintop="-40px"
            >
            </Faq>

        </div>
    );
};

export default page;