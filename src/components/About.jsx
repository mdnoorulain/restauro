import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          A dish you really like (sushi, pizza, noodles, tacos, hotpot, cake…)<br/>
          A type of food you like (seafood, meat, vegetarian, home-cooked food…)<br/>
          A nationality of food you like (Italian, British, French, Indian, Mexican…)<br/>
          A style of cooking you like (steamed, fried, roasted, barbecued…)<br/>
         A particular taste you like (spicy, mild, sour, sweet…)<br/>
        </p>
        <p>
           A restaurant you like eating this food at<br/>
          If you can cook it or not<br/>
           else that comes to your mind<br/>
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
