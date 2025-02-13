import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import HeroBanner2 from '../Components/HeroBanner/HeroBanner2';
import HeroBanner4 from '../Components/HeroBanner/Herobanner4';
import Brand1 from '../Components/Brand/Brand1';
import About5 from '../Components/About/About5';
import HowWork from '../Components/HowWork/HowWork';
import Choose2 from '../Components/Choose/Choose2';
import Feature1 from '../Components/Feature/Feature1';
import Feature5 from '../Components/Feature/Feature5';
import Feature3 from '../Components/Feature/Feature3';
import Feature6 from '../Components/Feature/Feature6';
import Counter1 from '../Components/Counter/Counter1';
import Faq1 from '../Components/Faq/Faq1';
import Testimonial from '../Components/Testimonial/Testimonial';
import Feature2 from '../Components/Feature/Feature2';
import Pricing1 from '../Components/Pricing/Pricing1';
import Cta1 from '../Components/Cta/Cta1';
import Blog1 from '../Components/Blog/Blog1';
import About2 from '../Components/About/About2';
import Faq from '../Components/Faq/Faq';
import Choose5 from '../Components/Choose/Choose5';
import Choose1 from '../Components/Choose/Choose1';
import Services2 from '../Components/Services/Services2';

const page = () => {
    return (
        <div>
            <HeroBanner4
                hide="none"
                subTitle=""
                title=" Right Initiative For Daily Yatra "
                content="Women Focused Taxi Service "
                first="Women Focused"
                second="100% Electric Rides "
                third="Safety First  "
                margintop="150px"
            ></HeroBanner4>
            <br />
            <Feature5
                title="Seamless | Safe | Sustainable "
                content="Designed Exclusively for Women "
            ></Feature5>
            <Feature6></Feature6>
            {/* <HowWork></HowWork> */}

            <HeroBanner4
                subTitle="Manual Booking"
                title="Manual Booking-Fast & Flexible "
                innercontent="Manual Booking Features gives you full control over your schedule "
                first="Easy Selection"
                third="Flexible Timing "
                second="Hassle Free Experience "
            ></HeroBanner4>
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
            ></About5>

            <Choose5></Choose5>
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
            ></Choose2>
            <Testimonial></Testimonial>
            <Services2

                btnname="Drive with US "
                btnurl="/service"
            ></Services2>
            <Faq></Faq>
            <Choose1
                subtitle="Assured by RIDY   "
                title=" drive with US "
                FeatureList={[
                    " Boost your Daily Earnings : Earn 50% of your Daily Income ",
                    "Frequent Payouts : Get Paid 3 Times a Month ",
                    " Incentives : Enjoy additional Incentives after completing some rides ",
                ]}
                FeatureList2={[
                    "Easy Onboarding :  Get Started quickly after Documentation Verifications ",
                    "Referral Programs : Secure a fixed Income by referring Drivers & Riders  ",
                ]}

                btnname="Drive with us "
                btnurl="/service"
            ></Choose1>
            <br />
            {/* <Cta1
                subtitle="Our App"
                title="Download our app and start your free trail to get started today!"
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised"
                btnurl1="https://play.google.com/store"
                btnurl2="https://www.apple.com/store"
                img="/assets/images/intro/cab6.jpg"
            ></Cta1> */}
        </div>
    );
};

export default page;