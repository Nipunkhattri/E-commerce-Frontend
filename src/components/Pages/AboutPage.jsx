import React from "react";
import "./Aboutm.css";
import section from "./dummy1.png"
import section1 from "./dummy4.png"
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
const AboutPage = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <div className="about"></div>
      <div className="about11">
        <h2 className="ah2">CLASSIC & CHIC</h2>
        <div className="about1">
          <div className="ab1l">
            <div className="ab1limg"></div>
          </div>
          <div className="ab1r">
            <div className="ab1ri">
              <h2>FOUNDER</h2>
              <p>
                Shimona Agrawal, the founder of the label, has always been an
                admirer in the world of fashion. A NIFT (National Institute of
                Fashion Technology) graduate with dedication, hard-work and keen
                eye, she embarked on her entrepreneurial journey with a mission
                to empower women through her creations.
              </p>
              <p>
                She believes that fashion had the ability to enhance a woman’s
                self-esteem and make her feel confident, powerful- ready to
                conquer the world. In a world often driven by fast fashion, she
                believes in the importance of creating garments that are meant
                to be cherished, not discarded.
              </p>
              <p>
                She set out to create a brand that catered to discerning
                individuals who valued quality over quantity. Her vision was to
                build a fashion label that celebrated the artistry of design and
                embraced the essence of timelessness.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <h2 className='ah2'>EFFORTLESS ELEGANCE</h2> */}
      <div className="about2">
        <div className="ab1r2">
          <div className="ab1ri">
            <h2>OUR MISSION & VISION</h2>
            <p>
              To create high-quality, fashionable clothing that celebrates the
              unique beauty of our customers, while providing them with the
              highest level of quality, comfort, and style.
            </p>
            <p>
              To be the leading fashion label that inspires people to look and
              feel their best, regardless of their shape/size or their personal
              style.
            </p>
      
            <p
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontSize: "14px",
                width: "85%",
                lineHeight: "25px",
                wordSpacing: "1px",
                letterSpacing: "3px",
                position:"relative",
                top:"30px",
                left:"15px"
              }}
              className="quote"
            >
              We want every women to be able to say it out loud “ I am
              confident, stylish and ready to take on the world“.
            </p>
          </div>
        </div>
        <div className="ab1l">
          <div className="ab2limg"></div>
        </div>
      </div>
      <div className="about4">
        {/* <div className="ab4one">
          <div className="ab4one1">
            <div className="ab4one1i">
              <h2>Our aesthetic</h2>
              <p>
                Buna embodies a slow way of life that is rooted in culture,
                craft and of breath-ability, light and airiness that it wants
                its wearers to be part of. of breath-ability, light and airiness
                that it wants its wearers to be part of. Buna{" "}
              </p>
            </div>
          </div>
          <div className="ab4one2"></div>
        </div>
        <div className="ab4two"></div>
        <div className="ab43">
          <div className="ab431"></div>
          <div className="ab432"></div>
        </div> */}

        {isScreenSmall ?    <img src={section1} alt="" />:    <img src={section} alt="" />}
      </div>
     
      <div className="about3">
        {/* <div className="ab3l">
          <div className="ab3limg"></div>
          <h3>Effortless Elegance</h3>
        </div>
        <div className="ab3r">
          <div className="oneimg">
            <div className="img1"></div>
            <h3>Effortless Elegance</h3>
          </div>
          <div className="twoimg">
            <div className="img2"></div>
            <h3>Effortless Elegance</h3>
          </div>
          <div className="threeimg">
            <div className="img3"></div>
            <h3>Effortless Elegance</h3>
          </div>
        </div> */}
      </div>
      {/* </div> */}
    <div className="blackStrip" >
      </div>
    </>
  );
};

export default AboutPage;
