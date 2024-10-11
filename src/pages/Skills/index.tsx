import { useLayoutEffect, useRef } from "react";
import "./skills.scss";
import data from "~/data/skills";
import { Clouder } from "~/utils/Clouder";
import AbsoluteShape from "~/components/AbsoluteShape";

const Skills = () => {
  const cloaderRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (cloaderRef.current?.children.length === 0) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.clouder = new Clouder({
        container: cloaderRef.current,
        tags: data,
      });
    }
  }, []);
  return (
    <div className="container" data-aos="fade-up">
      <AbsoluteShape
        position="top_right"
      />
      <div className="skills_wrapper">
        <div className="page_title">
          <h1 className="text_simple_grad">Skills</h1>
        </div>
        <div className="content_wrapper">
          <div className="clouder_wrapper">
            <div ref={cloaderRef} id="clouder"></div>
          </div>
          <div className="description">
            <p>
              Since beginning my journey as a freelance developer nearly 4 years
              ago, I’ve done remote work for employer, and collaborated with
              talented people to create web products for both business and
              consumer use.
            </p>
            <br />
            <p>
              I create successful responsive websites that are fast, easy to
              use, and built with best practices. The main area of my expertise
              is front-end development, Reactjs, building web apps, features,
              animations, and coding interactive layouts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
