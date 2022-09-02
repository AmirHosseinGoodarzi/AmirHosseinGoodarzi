//============== React & Next ================
import React from "react";
import Image from "next/image";
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
    <div className={`max_width_rule ${styles.wrapper}`}>
      <div className={styles.descriptionWrapper}>
        <div className={styles.description}>
          <Title back="AboutMe" front={{ normal: "Me,MySelf &", bold: "I" }} />
          {/* <p>
            I’m a Front-End & Mobile Developer located in Iran. Bachelor of
            Computer Engineering graduate and software student in M.Sc.
            <br />I have a serious passion for UI effects, animations and
            creating intuitive, dynamic user experiences. Well-organised person,
            problem solver, independent employee with attention to detail.
          </p>
          <p>
            Fan of Video Games, outdoor activities and Persian rap Music.
            <br />A person , Interested in the entire frontend spectrum and
            working on ​projects with positive people.
          </p> */}
          <p>
            Full Stack developer, seeking to learn and progress in all work and
            personal fields ...
            <br />
            I am interested in user interface effects, animations and creating
            visual and dynamic web applications by Front-End.
            <br />
            also an organized person, a problem solver, an independent employee
            with great attention to detail for Back-End development.
            <br />
            In my opinion, the most important job aspect, is a friendly and
            active work environment, without dispute and full of new challenges.
          </p>
          <a href="/assets/files/Resume2022.pdf" download>
            <Button type="FILL" text="DOWNLOAD CV" />
          </a>
        </div>
      </div>
      <div className={styles.aboutMeImage}>
        <Image
          src="/assets/images/person.jpg"
          loading="lazy"
          layout="fixed"
          alt="AmirHossein Goodarzi"
          width={375}
          height={563}
        />
      </div>
    </div>
  );
}

export default AboutMe;
