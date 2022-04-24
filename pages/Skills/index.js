//=============================================================
//============== React & Next ================
import React, { useEffect, useRef } from "react";
import styles from "./Skills.module.scss";
import Head from "next/head";
//============== images & icons ==============
//============== in components ===============
import Title from "components/Title/Title";
import { skillsTag } from "utils/misc/skillsTag";
import { Clouder } from "utils/misc/Clouder";
//============== ex components ===============
//================= redux ====================
function Skills() {
  const cloaderRef = useRef(null);
  useEffect(() => {
    if (cloaderRef.current.children.length === 0) {
      window.clouder = new Clouder({
        container: cloaderRef.current,
        tags: skillsTag,
      });
    }
  }, []);
  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <div className={styles.wrapper}>
        <div className="max_width_rule grid grid-cols-1 lg:grid-cols-2">
          <div className={styles.clouderWrapper}>
            <div ref={cloaderRef} className={styles.clouder}></div>
          </div>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>
              <Title
                back="technologies"
                front={{ normal: "My", bold: "Skills" }}
              />
              <p>
                Since beginning my journey as a freelance developer nearly 4
                years ago, I’ve done remote work for employer, and collaborated
                with talented people to create web products for both business
                and consumer use.
              </p>
              <br />
              <p>
                I create successful responsive websites that are fast, easy to
                use, and built with best practices. The main area of my
                expertise is front-end development, Reactjs, building small and
                medium web apps, features, animations, and coding interactive
                layouts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
