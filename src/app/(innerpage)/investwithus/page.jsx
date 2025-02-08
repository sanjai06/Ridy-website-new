import Brand3 from '@/app/Components/Brand/Brand3';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Counter1 from '@/app/Components/Counter/Counter1';
import Cta1 from '@/app/Components/Cta/Cta1';
import Feature2 from '@/app/Components/Feature/Feature2';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="invest with us "
      ></BreadCumb>
      <Feature2></Feature2>
      <Brand3></Brand3>
      <Cta1 
         subtitle="Our App"
         title="Download our app and start your free trail to get started today!"
         content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised"
         btnurl1="https://play.google.com/store"
         btnurl2="https://www.apple.com/store"
         img="/assets/images/intro/cab6.jpg"
      ></Cta1>
    </div>
  );
};

export default page;