import React from "react";
import "./hero.css";
import Typewriter from "typewriter-effect";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Glowingbut from "./Glowingbut.tsx";
import { Card } from "flowbite-react";
import "../pages/About.css";
import { bitlogo, qedslogo } from "../images";

function Hero() {
  return (
    // <div className='banner h-screen w-full text-white text-center align-bottom '>Hero</div>
    <div class="banner h-[130vh] md:h-[130vh] ">
      <div className="flow-root w-full mt-4  z-500 ">
        <img src={bitlogo} className="h-16 float-left ml-4 md:h-32 "></img>
        <img src={qedslogo} className="h-16 float-right mr-4 md:h-32 "></img>
      </div>
      <div class="absolute  md:mt-[calc(50vh-324px)]  w-full">
        <div class="text-white font-semibold ">
          <center>
            <h1 className="text-box text-5xl ml-8">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("1st Annual QEDS Conference 2024")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("1st Annual QEDS Conference 2024")
                    .start();
                }}
              />
            </h1>
            <h4 className="text-2xl mt-4">8-10 FEBRUARY, 2024</h4>
            <h3 className="mt-4">ORGANIZED BY</h3>
            <hr
              className="w-24 bg-blue-400 text-blue-500 mb-4"
              style={{
                color: "blue",
                height: 5,
              }}
            />
            <p className="text-1xl">
              CENTRE FOR QUANTITATIVE ECONOMICS AND DATA SCIENCE
            </p>
            <p className="text-1xl">
              BIRLA INSTITUTE OF TECHNOLOGY MESRA, RANCHI,JHARKHAND,INDIA
            </p>

            <p className="text-2xl mt-4">Theme of the Conference</p>
            <h4 className="mt-4 text-2xl md:w-1/2 md:ml-11">
              Data Driven Analytics in Contemporary Economics and Business
            </h4>

            <div className="mt-4 mb-4">
              <Link to="/register">
                <Glowingbut children="Submit your paper" />
              </Link>
            </div>
            <div>
              <p>Last Date of Paper Submission : December 10, 2023</p>
              <p>Date of Acceptance Notification : January 10, 2024</p>
              <p> Last date for Registration : January 15<sup>th</sup>, 2024</p>
              {/* https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=322526 */}
              <a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=322526" target="_blank">
                <Glowingbut children="Registration Fee Link"/>
              </a>
              <p>Registration Fee :</p>
              <div className="flex flex-col align-middle w-1/2  mt-4 text-center justify-center content-center md:flex-row   ">
                <div className=" text-center content-center w-full md:w-1/2">
                  <h3 className="text-1xl  align-middle text-center justify-center">
                    For Students and Scholars
                  </h3>
                  <p>2500 INR</p>
                </div>
                <div className="text-center w-full md:w-1/2 ">
                  <h3 className="text-1xl">For Faculties</h3>
                  <p>3500 INR</p>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Hero;
