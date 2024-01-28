// Achievements.js
import React from "react";
import { course as coursesData } from "config/home";
import Link from "next/link";
import styles from "@/app/page.module.css";
import { Button } from "./ui/button";
import { Gradient2, Gradient4 } from "./gradient";
import FeedbackButton from "./feedback-button";

const Achievements = () => {
  return (
    <div className="py-16 mb-[2rem]  mx-auto flex justify-center items-center flex-col md:p-0 p-6">
      <h2 className="flex mb-4 mt-[3rem] font-display md:text-6xl text-4xl items-center bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 text-transparent">
        Courses & Accomplishments
      </h2>
      <div className="mt-5 flex flex-col dmsans max-w-5xl text-left gap-3  dark:text-slate-400 text-slate-600">
        <p className="text-xl">
          I've had the opportunity to expand my knowledge and skills through
          various courses and competitions. Here's a glimpse of the things I've
          completed along my learning journey
        </p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row xl:gap-[14rem] lg:gap-[10rem] md:gap-[5rem] text-slate-500">
        <div className="float-left">
          <div className="timeline">
            <div className="outer">
              <div className="card md:mt-[9rem]">
                <div className="info text-xl dark:bg-black/70 dark:hover:bg-black border bg-slate-100 duration-300 hover:bg-slate-200 dark:hover:border-gray-600 dark:border-gray-800 border-gray-300">
                  {" "}
                  <h3 className="title p-3 poppins">
                    Google Data Analytics Professional Certificate
                  </h3>
                  <p className="p-3 poppins text-sm">May 1, 2023</p>
                  <Link
                    target="_blank"
                    className=" hover:underline z-20 p-3"
                    href="https://www.coursera.org/account/accomplishments/specialization/certificate/SLR5TLU6JQQN"
                  >
                    <Button className="dark:bg-white bg-black text-white dark:text-black">
                      View
                    </Button>{" "}
                  </Link>
                  <div className=" ">
                    <Gradient2 className={styles.logoGradient} conic />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="info text-xl text-left dark:bg-black/70 dark:hover:bg-black border bg-slate-100 duration-300 hover:bg-slate-200 dark:hover:border-gray-600 dark:border-gray-800 border-gray-300">
                  <h3 className="title p-3 poppins">
                    Architecting With Google Compute Engine
                  </h3>
                  <p className="p-3 poppins text-sm">August 14, 2022</p>
                  <Link
                    target="_blank"
                    className=" hover:underline z-20 p-3"
                    href="https://www.coursera.org/account/accomplishments/specialization/certificate/3UF4U2DH8FG2"
                  >
                    <Button className="dark:bg-white bg-black text-white dark:text-black">
                      View
                    </Button>{" "}
                  </Link>
                </div>
              </div>
              <div className="card">
                {" "}
                <div className="info text-xl dark:bg-black/70 dark:hover:bg-black border bg-slate-100 duration-300 hover:bg-slate-200 dark:hover:border-gray-600 dark:border-gray-800 border-gray-300">
                  <h3 className="title p-3 poppins">
                    Agile with Atlassian Jira
                  </h3>
                  <p className="p-3 poppins text-sm">November 15, 2022</p>
                  <Link
                    target="_blank"
                    className=" hover:underline z-40 p-3"
                    href="https://www.coursera.org/account/accomplishments/certificate/M8FKN4C4VY8Z"
                  >
                    <Button className="dark:bg-white bg-black text-white dark:text-black">
                      View
                    </Button>{" "}
                  </Link>
                  <div className=" ">
                    <Gradient2 className={styles.logoGradient} conic />
                  </div>
                </div>
              </div>
              <div className="card">
                {" "}
                <div className="info text-xl dark:bg-black/70 dark:hover:bg-black border bg-slate-100 duration-300 hover:bg-slate-200 dark:hover:border-gray-600 dark:border-gray-800 border-gray-300">
                  <h3 className="title p-3 poppins">
                    Deep Learning with pyTorch: Siamese network
                  </h3>
                  <p className="p-3 poppins text-sm">March 25, 2023</p>
                  <Link
                    target="_blank"
                    className=" hover:underline z-40 p-3"
                    href="https://www.coursera.org/account/accomplishments/certificate/KJXALZXRTNML"
                  >
                    <Button className="dark:bg-white bg-black text-white dark:text-black">
                      View
                    </Button>{" "}
                  </Link>
                </div>
              </div>
              <div className="card ">
                {" "}
                
              </div>
            </div>
          </div>
        </div>
        <div className="timeline float-right lg:mr-0 md:mr-6 ">
          <div className="outer">
            <div className="card2">
              <div className="info text-xl dark:bg-black/70 dark:hover:bg-black border bg-slate-100 duration-300 hover:bg-slate-200 dark:hover:border-gray-600 dark:border-gray-800 border-gray-300">
                {" "}
                <h3 className="title2 p-3 poppins">
                  Secured 1st place in FirstNaukri's TechQuest
                </h3>
                <p className="pl-3 poppins text-sm">July 2, 2023</p>
                <Link
                  target="_blank"
                  className=" hover:underline z-20 p-3"
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/SLR5TLU6JQQN"
                >
                  <Button className="dark:bg-white bg-black text-white dark:text-black">
                    View
                  </Button>{" "}
                </Link>
                <div className=" ">
                  <Gradient2 className={styles.logoGradient} conic />
                </div>
              </div>
            </div>
            <div className="card2">
              <div className="info text-xl text-left dark:bg-black/70 dark:hover:bg-black border bg-slate-100 duration-300 hover:bg-slate-200 dark:hover:border-gray-600 dark:border-gray-800 border-gray-300">
                <h3 className="title2 p-3 poppins">
                  Passed LinkedIn Skill Assessment
                </h3>
                <ul className="list list-disc pl-6 pt-3 pb-3 dmsans text-lg">
                  <li>CSS - Top 15%</li>
                  <li>ReactJs - Top 15%</li>
                  <li>Machine Learning - Top 30%</li>
                  <li>Front end development - Top 5%</li>
                </ul>
                <Link
                  target="_blank"
                  className=" hover:underline z-20 p-3"
                  href="https://www.linkedin.com/in/antony-jude-shaman/"
                >
                  <Button className="dark:bg-white bg-black text-white dark:text-black">
                    View
                  </Button>{" "}
                </Link>
                <div className="">
                  <Gradient2 className={styles.logoGradient} conic />
                </div>
              </div>
            </div>
            <div className="card2">
              {" "}
              <div className="info text-xl dark:bg-black/70 dark:hover:bg-black border bg-slate-100 duration-300 hover:bg-slate-200 dark:hover:border-gray-600 dark:border-gray-800 border-gray-300">
                <h3 className="title2 p-3 poppins">
                  Among top 50 for our team's project in Naan Mudhalvan's
                  Applied Data Science Course
                </h3>
                <Link
                  target="_blank"
                  className=" hover:underline z-20 p-3"
                  href="https://www.naanmudhalvan.tn.gov.in/"
                >
                  <Button className="dark:bg-white bg-black text-white dark:text-black">
                    View
                  </Button>{" "}
                </Link>
              </div>
            </div>
            <div className="card2">
              <div className="info text-xl dark:bg-black/70 dark:hover:bg-black border bg-slate-100 duration-300 hover:bg-slate-200 dark:hover:border-gray-600 dark:border-gray-800 border-gray-300">
                {" "}
                <h3 className="title2 p-3 poppins">
                  Flipkart GRiD 5.0 - Software Development Track
                </h3>
                <p className="pl-3 poppins text-sm">July 25, 2023</p>
                <Link
                  target="_blank"
                  className=" hover:underline z-20 p-3"
                  href="https://drive.google.com/file/d/14oEYD38hpGzmHdIln0GuGJiYQeBXHqt0/view?usp=sharing"
                >
                  <Button className="dark:bg-white bg-black text-white dark:text-black">
                    View
                  </Button>{" "}
                </Link>
                <div className=" ">
                  <Gradient2 className={styles.logoGradient} conic />
                </div>
              </div>
            </div>
            <div className="card2">
              <div className="info text-xl dark:bg-black/70 dark:hover:bg-black border bg-slate-100 duration-300 hover:bg-slate-200 dark:hover:border-gray-600 dark:border-gray-800 border-gray-300">
                {" "}
                <h3 className="title2 p-3 poppins">
                  Secured 9th place in FirstNaukri's CodeQuest
                </h3>
                <p className="pl-3 poppins text-sm">August 19, 2023</p>
                <Link
                  target="_blank"
                  className=" hover:underline z-20 p-3"
                  href="https://www.firstnaukri.com/contests/codequezt-contest-sharp-3-the-ultimate-coding-challenge-coding-contest-firstnaukri-event-64a40888d2952b7497b32705"
                >
                  <Button className="dark:bg-white bg-black text-white dark:text-black">
                    View
                  </Button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <FeedbackButton/> */}
    </div>
  );
};

export default Achievements;
