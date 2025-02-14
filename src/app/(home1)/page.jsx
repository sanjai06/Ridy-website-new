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
                hide="none"
                subTitle="Ridy The Lady Cab"
                title=" Right Initiative For Daily Yatra "
                innercontent="Women Focused Taxi Service "
                first="Women Focused"
                second="100% Electric Rides "
                third="Safety First  "
                margintop="150px"
            ></HeroBanner4>
            <br />
            <Feature5
                title="Seamless | Safe | Sustainable "
                content="Designed Exclusively for Women "
                item1="Affordable Pricing "
                item2="Women Drivers "
                item3="Live Tracking "

            ></Feature5>
            <Feature6></Feature6>

            <HeroBanner4
                subTitle="Manual Booking"
                title="Manual Booking-Fast & Flexible "
                innercontent="Manual Booking Features gives you full control over your schedule "
                first="Easy Selection"
                third="Flexible Timing "
                second="Hassle Free Experience "
            ></HeroBanner4>
            <br />
            <br />
            <About5
                subtitle="– Here to support you ! "
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
                img1="/assets/images/intro/cab5.jpg"
                btnname="Ride with US "
                btnurl="/about"
                borderRadius="none"
                none="none"
            ></About5>

            <Choose5
            
            ></Choose5>
            <Feature1></Feature1>
            <Choose2
                subTitle="Ride Safe with RIDY    "
                title=" Benefits  "
                content=" "
                title2={"Get Benefit By Using  Ridy "}
                FeatureList2={[
                    " Screened & Trained Drivers ",
                    " 24/7 Support ",


                ]}
                FeatureList={[

                    "Trust us for Safe Rides ",
                    " Safety is our Priority ",


                ]}
                btnname="Download App"
                btnurl="/contact"
            ></Choose2>
            <Testimonial></Testimonial>
            <Services2
                subTitle="Angels of RIDY"
                title="Women Drivers - Angels of RIDY "
                btnname="Drive with US "
                btnurl="/service"
            ></Services2>
            <Faq></Faq>
         
            <About5
                subtitle="Future with RIDY  "
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
                img1="/assets/images/intro/cab5.jpg"
                btnname="Ride with US "
                btnurl="/about"
                borderRadius="none"
            ></About5>
               <Choose1
                subtitle="Assured by RIDY   "
                title=" drive with US "
                FeatureList={[
                    " Boost your Daily Earnings : Earn 50% of your Daily Income ",
                    "Frequent Payouts : Get Paid 3 Times a Month ",
                    " Incentives : Enjoy additional Incentives after completing some rides ",
                    "Easy Onboarding :  Get Started quickly after Documentation Verifications ",
                    "Referral Programs : Secure a fixed Income by referring Drivers & Riders  ",
                ]}
             
                btnname="Drive with us "
                btnurl="/service"
            ></Choose1>

        </div>
    );
};

export default page;