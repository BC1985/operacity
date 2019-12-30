import React from "react";
import conductor from "../Images/about-herbig.jpg";
import "../About/About.css";
import BackIcon from "../BackIcon/BackIcon";
function About() {
  return (
    <>
      <div className="container">
        <div className="about-title">
          <h1>About Us</h1>
        </div>
        <div className="about-main-content">
          <img src={conductor} alt="conductor" id="about-img" />
          <p className="credit">
            Image credit-Taiwan National Symphony Orchestra website
          </p>
          <h2>Lorem Ipsum Dolor Sit Amet</h2>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              aliquam quam et condimentum condimentum. Aliquam volutpat accumsan
              lacus vel tincidunt.
            </p>
            <p>
              Morbi cursus pulvinar lorem non eleifend. In hac habitasse platea
              dictumst. Suspendisse potenti. Suspendisse dui leo, volutpat a
              dictum dapibus, fringilla sed nisi. Vestibulum vehicula, odio ut
              mollis bibendum, ex urna luctus ligula, eget mattis nunc orci et
              sem. Nam pulvinar elit pulvinar imperdiet bibendum. Integer orci
              ex, ultrices non nibh eu, venenatis blandit eros. Donec id turpis
              ullamcorper, maximus massa nec, aliquam magna. Curabitur porta
              justo dui, eget tempus turpis commodo.
            </p>
            <p>
              {" "}
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Mauris interdum elit est, non
              lacinia justo blandit eget. Etiam tincidunt vehicula odio
              convallis ornare. Duis sollicitudin est vitae congue congue.
              Integer tempus volutpat turpis, vitae tristique felis. Ut dapibus
              orci id dapibus pulvinar. Mauris tristique quis turpis id maximus.
              Pellentesque mi nisi, finibus quis fringilla in, dapibus vel
              augue.
            </p>
          </div>
        </div>
        <BackIcon />
      </div>
    </>
  );
}

export default About;
