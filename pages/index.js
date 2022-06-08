//============== React & Next ================
import React from "react";
import styles from "./Home.module.scss";
import Head from "next/head";
import Link from "next/link";
//============== images & icons ==============
import { Github, Linkedin, Telegram, Whatsapp } from "react-bootstrap-icons";
//============== in components ===============
import Button from "components/Button/Button";
import AboutMe from "components/AboutMe/AboutMe";
import Title from "components/Title/Title";
import { THEMES } from "utils/Constants";
//============== ex components ===============
//================= redux ====================
import { useSelector } from "react-redux";
//============================================
function Home() {
  const theme = useSelector((state) => state.theme.type);
  return (
    <>
      <Head>
        <title>Personal Resume Website / AmirHosseinGoodarzi</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.midLogoWrapper}>
          <div className={`${styles.midLogobg}`}>
            <img
              className={
                theme === THEMES.DARK ? styles.dark_logo : styles.light_logo
              }
              src={`./assets/images/${
                theme === THEMES.DARK ? "ALogoB" : "ALogoB2"
              }.png`}
              alt="Mask"
            />
          </div>
        </div>
        <div className={styles.role}>
          <Title
            back="Welcome Here"
            front={{ normal: "", bold: "Developer" }}
          />
        </div>
        <ul className={styles.socialMedias}>
          <li>
            <a
              href="https://www.linkedin.com/in/amirhossein-goodarzi-6569551ba"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size="1.5rem" color="#0077b5" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sektowr" target="_blank" rel="noreferrer">
              <img
                src="/assets/images/instagram.svg"
                alt="instagram"
                width="26px"
              />
            </a>
          </li>
          <li>
            <a href="https://t.me/sektowr" target="_blank" rel="noreferrer">
              <Telegram size="1.5rem" color="#30A7DA" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/989167943707" target="_blank" rel="noreferrer">
              <Whatsapp size="1.5rem" color="#48C155" />
            </a>
          </li>
          <li>
            <a href="https://github.com/AmirHosseinGoodarzi" target="_blank" rel="noreferrer">
              <Github size="1.5rem" color={
                theme === THEMES.DARK ? "#FFF" : "#111"
              } />
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/13922873/sektowr"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/images/stackoverflow.svg"
                alt="stackoverflow"
                width="23px"
              />
            </a>
          </li>
        </ul>
        <Link href="/ContactMe">
          <Button type="OUTLINE" text="Let’s make something special." />
        </Link>
        <span className={styles.mouse}>
          <span className={styles.mouse_wheel}></span>
        </span>
      </div>
      <AboutMe />
    </>
  );
}

export default Home;
