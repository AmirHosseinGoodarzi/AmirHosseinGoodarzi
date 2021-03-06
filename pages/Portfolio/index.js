//============== React & Next ================
import React, { useState } from "react";
import styles from "./Portfolio.module.scss";
import Head from "next/head";
//============== images & icons ==============
import { Activity } from "react-bootstrap-icons";
//============== in components ===============
import Title from "components/Title/Title";
import PortfolioCard from "components/PortfolioCard/PortfolioCard";
import Button from "components/Button/Button";
//============== ex components ===============
//================= redux ====================
//============================================
import { worksList } from "utils/misc/workList";

function Portfolio() {
  const [actived, setActived] = useState(-1);
  const activeMenu = (index) => setActived(index);
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className={styles.portfolio_wrapper}>
        <div className={`w-full max_width_rule ${actived >= 0?"pt-10":"pt-52"}`}>
          <Title back="works" front={{ normal: "My", bold: "Portfolio" }} />
          {actived >= 0 ? (
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div
                className={
                  worksList[actived].type === "desktop"
                    ? styles.laptop
                    : styles.mobile
                }
              >
                <img
                  src={
                    worksList[actived].type === "desktop"
                      ? "/assets/images/laptop.png"
                      : "/assets/images/phone.png"
                  }
                  alt="laptop"
                />
                <div
                  className={styles.screen}
                  style={{
                    backgroundImage: `url('./assets/images/portfolios/${worksList[actived].title}.png')`,
                  }}
                ></div>
              </div>
              <div className={styles.description}>
                <div className="absolute top-0 left-0">
                  <Button
                    type="OUTLINE"
                    onClick={() => setActived(-1)}
                    text={
                      <span className="flex justify-center items-center">
                        <Activity className="mr-2" /> back to list
                      </span>
                    }
                  />
                </div>
                <h2 className="text-5xl">
                  {worksList[actived].title}
                </h2>
                <hr className="mt-3 w-full" />
                <p>{worksList[actived].desc}</p>
                <div className="flex flex-wrap">
                  <span className={styles.tech_item}>
                    members : {worksList[actived].teamMembers}
                  </span>
                  <span className={styles.tech_item}>
                    duration (days) : {worksList[actived].projectDurationDays}
                  </span>
                  <span className={styles.tech_item}>
                    role : {worksList[actived].myRole}
                  </span>
                  <span className={styles.tech_item}>
                    link :{" "}
                    <a
                      href={worksList[actived].link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {worksList[actived].link}
                    </a>
                  </span>
                </div>
                <p className="text-lg">Technologies :</p>
                <ul className="list-none flex flex-wrap">
                  {worksList[actived].technologies.map((tech, index) => {
                    return (
                      <li className={styles.tech_item} key={index}>
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            <ul className="grid grid-cols-6 grid-rows-4 gap-4 grid-flow-row mt-10">
              {worksList.map((item, index) => {
                return (
                  <PortfolioCard
                    item={item}
                    key={index}
                    activeMenu={() => activeMenu(index)}
                  />
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
export default Portfolio;
