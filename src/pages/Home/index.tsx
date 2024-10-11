import { useState, useRef, useEffect } from "react";
import "./home.scss";
import Button from "~/components/Button";
import EduCard from "./EduCard";
import ExpRoadMap from "./ExpRoadMap";
import { Link } from "react-router-dom";
import ROUTES_OBJECT from "~/routes/RoutesObject";
import AbsoluteShape from "~/components/AbsoluteShape";
import { ReactComponent as Files } from "~/assets/images/icons/files.svg";
import resumeFile from "~/assets/files/AmirhosseinGoodarzi-Front-end-developer-Resume.pdf";

const Home = () => {
  const [activedTitleIndex, setActivedTitleIndex] = useState(0);
  const animationIntervalRef = useRef<any>(null);
  useEffect(() => {
    animationIntervalRef.current = setInterval(() => {
      setActivedTitleIndex((prev) => (prev + 1 > 2 ? 0 : prev + 1));
    }, 3000);
    return () => {
      clearInterval(animationIntervalRef.current);
    };
  }, []);

  return (
    <div className="Home_warpper">
      <div className="container">
        <section id="first_section">
          <AbsoluteShape position="top_left" />
          <div className="titles" data-aos="fade-up">
            <div
              className={`text_blue_grad ${
                activedTitleIndex === 0 ? "active" : ""
              }`}
              title="Front"
            >
              Front
            </div>
            <div
              className={`text_purple_grad ${
                activedTitleIndex === 1 ? "active" : ""
              }`}
              title="end"
            >
              end
            </div>
            <div
              className={`lg:ms-5 text_orange_grad ${
                activedTitleIndex === 2 ? "active" : ""
              }`}
              title="Developer."
            >
              Developer.
            </div>
          </div>
          <div className="description" data-aos="fade-down">
            <p>
              Hello. I'm Amirhossein Goodarzi.
              <br />
              If you’re looking for a skilled and motivated developer, you’ve
              come to the right place !
            </p>
          </div>
          <div className="buttons">
            <a className="w-full lg:w-fit" href={resumeFile} download={true}>
              <Button icon={<Files />}>Donwload CV</Button>
            </a>
            <Link
              to={ROUTES_OBJECT.contact}
              className={`glowing_button active_${activedTitleIndex}`}
            >
              <span className="bg_blue_grad"></span>
              <span className="bg_purple_grad"></span>
              <span className="bg_orange_grad"></span>
              <div>Get in touch.</div>
            </Link>
          </div>
          <div className="absolute bottom-10 lg:bottom-20">
            <span className="mouse">
              <span className="mouse_wheel"></span>
            </span>
          </div>
        </section>
        <section className="!min-h-[auto]">
          <div className="section_title" data-aos="fade-up">
            <p className="tip">EXPLORE MY WAY</p>
            <div className="bg_blue_grad">1</div>
            <h2 className="text_blue_grad">About Me</h2>
            <h3 className="text_simple_grad">I'm doing my best</h3>
          </div>
          <div
            className="w-full description !text-start space-y-3"
            data-aos="fade-down"
          >
            <p>
              Imagine a world where user interfaces are not just functional, but
              a delightful experience. Now, imagine having a{" "}
              <i className="text-black dark:text-white">front-end developer</i>{" "}
              on your team who can craft these experiences with precision and
              creativity. That’s me. With{" "}
              <i className="text-black dark:text-white">
                4 years of experience
              </i>{" "}
              in building responsive and user-friendly web applications using
              React.js, I bring a blend of technical expertise and a keen eye
              for design to every project.
            </p>
            <p>
              My journey in web development has also given me exposure to{" "}
              <i className="text-black dark:text-white">back-end</i> and{" "}
              <i className="text-black dark:text-white">mobile development</i>,
              enabling seamless collaboration with my teammates. Currently, I am
              expanding my skill set by learning <i className="text-black dark:text-white">Python</i> and diving into the
              fascinating world of <i className="text-black dark:text-white">machine learning</i>.
            </p>
            <p>
              I don’t just build interfaces; I create engaging user experiences
              that drive user satisfaction and business growth. Beyond my
              technical skills, I excel in effective communication, consistently
              deliver results, and foster strong relationships within my team.
            </p>
          </div>
          <AbsoluteShape position="bottom_right" />
        </section>
        <section>
          <div className="section_title" data-aos="fade-up">
            <div className="bg_purple_grad">2</div>
            <h2 className="text_purple_grad">Experiences</h2>
            <h3 className="text_simple_grad">... Building my hopes up</h3>
          </div>
          <div className="description" data-aos="fade-down">
            <p>
              I am always eager to learn new skills and tools, and I value
              teamwork and collaboration.
            </p>
          </div>
          <ExpRoadMap />
          <AbsoluteShape position="bottom_left" />
        </section>
        <section>
          <div className="section_title" data-aos="fade-up">
            <div className="bg_orange_grad">3</div>
            <h2 className="text_orange_grad">Educations</h2>
            <h3 className="text_simple_grad">... working hard</h3>
          </div>
          <div className="educations_wrapper">
            <EduCard
              data-aos="fade-up-right"
              title="Bachelor of Computer Engineering"
              years="2017 - 2021"
              uniName="ABRU University"
              uniLocation="Iran, Borujerd"
              imagePosition="bg-left-bottom dark:bg-left-top"
              link="https://abru.ac.ir"
            />
            <EduCard
              data-aos="fade-up-left"
              title="Master of Software Engineering"
              years="2021 - ..."
              uniName="PNU University"
              uniLocation="Iran, Tehran"
              imagePosition="bg-right-bottom dark:bg-right-top"
              link="http://www.pnu.ac.ir/"
            />
          </div>
        </section>
      </div>
      <footer className="absolute bottom-0 left-0 w-full py-7 text-center text-black dark:text-white">
        &copy; Made with <span className="text-lg text-red-500">&#10084;</span>{" "}
        by AmirHossein Goodarzi
      </footer>
    </div>
  );
};

export default Home;
