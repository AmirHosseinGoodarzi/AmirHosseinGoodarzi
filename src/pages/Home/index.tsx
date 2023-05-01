import { useState, useRef, useEffect } from "react";
import "./home.scss";
import Button from "~/components/Button";
import { ButtonTypes } from "~/utils/enums";
import { Link } from "react-router-dom";
import ROUTES_OBJECT from "~/routes/RoutesObject";
import EducationCard from "./educationCard";

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
            <Button
              icon={
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M146.217 28.218l-100.07 42.86 106.296 248.194 41.188-17.64-27.606-191.945-1.28-8.909 78.567-11.3-12.519-29.23c-16.682 3.773-28.871 3.449-47.402 21.062l-5.993 5.693-6.181-5.484c-18.118-16.072-20.828-36.566-25-53.301zm18.912.492c3.243 12.805 5.535 24.275 12.777 33.68 12.818-10.212 24.447-14.227 34.951-16.733-14.485-7.674-29.652-12.217-47.728-16.947zm127.746 71.826l-107.752 15.496 38.436 267.25 36.978-5.318 23.188-193.996 1.068-8.936 86.086 10.29-4.598-31.96c-17.092-.671-28.78-4.14-51.24 8.076l-7.26 3.95-4.552-6.899c-13.34-20.213-10.655-40.708-10.354-57.953zm18.139 5.367c-.182 13.21-.937 24.883 3.625 35.842 15.025-6.547 27.298-7.415 38.093-7.117-12.006-11.162-25.481-19.477-41.718-28.725zm-10.485 89.139l-32.043 268.092 172.77 20.648 24.598-205.793c-16.337-5.073-26.73-11.452-51.586-5.465l-8.034 1.936-2.61-7.84c-7.655-22.977.243-42.079 4.997-58.658zm124.225 22.799c-3.594 12.713-7.345 23.792-5.775 35.558 16.207-2.435 28.286-.097 38.636 2.985-8.708-13.889-19.571-25.409-32.861-38.543z"></path>
                </svg>
              }
            >
              Donwload CV
            </Button>
            <div id="glowing_button" className={`active${activedTitleIndex}`}>
              <Button type={ButtonTypes.Outline}>Get in touch.</Button>
            </div>
          </div>
        </section>
        <section>
          <div className="section_title">
            <p className="tip">EXPLORE MY WAY</p>
            <div className="bg_blue_grad">1</div>
            <h2 className="text_blue_grad">About Me</h2>
            <h3>I'm doing my best</h3>
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
            <h2 className="text_purple_grad">Expriences</h2>
            <h3>... Building my hopes up</h3>
          </div>
          <div className="description">
            <p>
              I am always eager to learn new skills and tools, and I value
              teamwork and collaboration.
            </p>
          </div>
          <div className="exp_road_map">
            <div className="exp_card">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h5>Junior FrontEnd Developer</h5>
              <h6>Freelancer</h6>
              <span>2019 - 2021</span>
              <p>
                Collaborating with talented people and Create web products for
                both business and consumer use.
              </p>
            </div>
            <div className="exp_card reversed">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h5>Mid-Level FrontEnd Dev</h5>
              <h6>Kahkeshan Group of Companies</h6>
              <span>2021 - ...</span>
              <p>
                Creating successful responsive websites that are fast, easy to
                use, and built with best practices.
              </p>
            </div>
            <div className="exp_card">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h5>Junior FrontEnd Dev</h5>
              <span className="!text-purpleGradEnd">Now Available</span>
              <Link
                to={ROUTES_OBJECT.contact}
                className="w-fit bg-slate-900 rounded-full text-white hover:text-purpleGradEnd transition-all py-1 px-5 text-sm"
              >
                let's create something special &rarr;
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="section_title">
            <div className="bg_orange_grad">3</div>
            <h2 className="text_orange_grad">Educations</h2>
            <h3>... working hard</h3>
          </div>
          <div className="educations_wrapper">
            <EducationCard
              title="Bachelor of Computer Engineering"
              years="2017 - 2021"
              uniName="ABRU University"
              uniLocation="Iran, Borujerd"
              imagePosition="bg-left-bottom dark:bg-left-top"
              link="https://abru.ac.ir"
            />
            <EducationCard
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
