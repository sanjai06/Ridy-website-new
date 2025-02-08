import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Brand1 from '../Components/Brand/Brand1';
import About1 from '../Components/About/About1';
import HowWork from '../Components/HowWork/HowWork';
import Choose2 from '../Components/Choose/Choose2';
import Feature1 from '../Components/Feature/Feature1';
import Counter1 from '../Components/Counter/Counter1';
import Faq1 from '../Components/Faq/Faq1';
import Testimonial from '../Components/Testimonial/Testimonial';
import Feature2 from '../Components/Feature/Feature2';
import Pricing1 from '../Components/Pricing/Pricing1';
import Cta1 from '../Components/Cta/Cta1';
import Blog1 from '../Components/Blog/Blog1';

const page = () => {
    return (
        <div>
            <HeroBanner1
                subtitle="<span>Alert!</span>Find Your New Ride "
                title="Right Initiative for Daily Yatra CTA "
                content="“Seamless, safe, and sustainable transport services designed exclusively for women.” "
                btnname="Become a Driver"
                btnurl="/contact"
                btntwo="Invest in Us"
                btn2url="/contact"
                cusimg="/assets/images/intro/"
                cusnumber="2,291"
                cuscontent="Happy Customers"
                rating="4.8/5"
                ratingcon="Ratings"
                img="/assets/images/intro/home.png"
            ></HeroBanner1>
            <HowWork></HowWork>
            <Choose2
                img1="/assets/images/intro/cab5.jpg"
                subtitle=" Impact Section  "
                title="Get Benefit By Using  Ridy "
                content=" "
                FeatureList2={[
                    "Sustainability First ",
                    "Supporting green transportation goals with EVs.",
                    " Reducing air pollution and carbon footprints.",

                ]}
                FeatureList={[
                    "Impact Section ",
                    "Creating thousands of job opportunities for women",
                    "Offering financial independence and career growth. ",

                ]}
                btnname="Download App"

            ></Choose2>
            <Feature1></Feature1>
            <Counter1></Counter1>
            <Faq1></Faq1>
            <Testimonial></Testimonial>
            <br />
            <Cta1
                subtitle="Our App"
                title="Download our app and start your free trail to get started today!"
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised"
                btnurl1="https://play.google.com/store"
                btnurl2="https://www.apple.com/store"
                img="/assets/images/intro/cab6.jpg"
            ></Cta1>
            {/* <Blog1></Blog1> */}
        </div>
    );
};

export default page;