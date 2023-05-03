import { useState, useRef, useEffect } from "react";
import "./home.scss";
import Button from "~/components/Button";
import EduCard from "./EduCard";
import { ReactComponent as Files } from "~/assets/images/icons/files.svg";
import ExpRoadMap from "./ExpRoadMap";
import { Link } from "react-router-dom";
import ROUTES_OBJECT from "~/routes/RoutesObject";

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
          <div className="titles">
            <div
              className={`text_blue_grad ${
                activedTitleIndex === 0 ? "active" : ""
              }`}
              title="Fullstack."
            >
              Fullstack.
            </div>
            <div
              className={`text_purple_grad ${
                activedTitleIndex === 1 ? "active" : ""
              }`}
              title="JS."
            >
              JS.
            </div>
            <div
              className={`text_orange_grad ${
                activedTitleIndex === 2 ? "active" : ""
              }`}
              title="Developer."
            >
              Developer.
            </div>
          </div>
          <div className="description">
            <p>
              Hello. I'm Amirhossein Goodarzi. If you’re looking for a skilled
              and motivated JavaScript developer, you’ve come to the right place
              !
            </p>
          </div>
          <div className="buttons">
            <Button icon={<Files />}>Donwload CV</Button>
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
        <section>
          <div className="section_title">
            <p className="tip">EXPLORE MY WAY</p>
            <div className="bg_blue_grad">1</div>
            <h2 className="text_blue_grad">About Me</h2>
            <h3 className="text_simple_grad">I'm doing my best</h3>
          </div>
          <div className="description">
            <p>
              I enjoy creating user-friendly interfaces, writing clean and
              maintainable code, and solving complex problems. I am looking for
              a challenging and rewarding position where I can apply my skills
              and grow as a developer.
            </p>
          </div>
        </section>
        <section>
          <div className="section_title">
            <div className="bg_purple_grad">2</div>
            <h2 className="text_purple_grad">Experiences</h2>
            <h3 className="text_simple_grad">... Building my hopes up</h3>
          </div>
          <div className="description">
            <p>
              I am always eager to learn new skills and tools, and I value
              teamwork and collaboration.
            </p>
          </div>
          <ExpRoadMap />
        </section>
        <section>
          <div className="section_title">
            <div className="bg_orange_grad">3</div>
            <h2 className="text_orange_grad">Educations</h2>
            <h3 className="text_simple_grad">... working hard</h3>
          </div>
          <div className="educations_wrapper">
            <EduCard
              title="Bachelor of Computer Engineering"
              years="2017 - 2021"
              uniName="ABRU University"
              uniLocation="Iran, Borujerd"
              imagePosition="bg-left-bottom dark:bg-left-top"
              link="https://abru.ac.ir"
            />
            <EduCard
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
    </div>
  );
};

export default Home;
