//============== React & Next ================
import React from "react";
import styles from "./AboutMe.module.scss";
//============== images & icons ==============
//============== in components ===============
import Button from "../Button/Button";
import Title from "components/Title/Title";
//============== ex components ===============
//================= redux ====================
//============================================
function AboutMe() {
  return (
    <div className={styles.wrapper}>
      <div className="max_width_rule flex">
        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>
            <Title
              back="AboutMe"
              front={{ normal: "Me,MySelf &", bold: "I" }}
            />
            <p>
              I’m a Front-End & Mobile Developer located in Iran. Bachelor of
              Computer Engineering graduate and software student in M.Sc.
              <br />I have a serious passion for UI effects, animations and
              creating intuitive, dynamic user experiences. Well-organised
              person, problem solver, independent employee with attention to
              detail.
            </p>
            <p>
              Fan of Video Games, outdoor activities and Persian rap Music.
              <br />A person , Interested in the entire frontend spectrum and
              working on ​projects with positive people.
            </p>
            <a href="/assets/files/NewResumeFile.pdf" download>
              <Button type="FILL" text="DOWNLOAD CV" />
            </a>
          </div>
        </div>
        <div className={styles.aboutMeImage}>
          <img src="/assets/images/person.jpg" alt="AmirHossein Goodarzi" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
