import AbsoluteShape from "~/components/AbsoluteShape";
import PortfoCard from "./PortfoCard";
import "./portfolio.scss";
import data from "~/data/portfolios";

const Portfolio = () => {
  return (
    <div className="container">
      <AbsoluteShape
        position="top_right"
        colors="from-blueGradStart to-blueGradEnd"
      />
      <div className="portfolio_wrapper">
        <div className="page_title">
          <h1 className="text_simple_grad">Portfolio</h1>
          <p className="description">
            Over the past 3 years as a front-end developer, I've worked on
            projects ranging from company websites to mobile applications.
          </p>
        </div>
        <div className="projects_wrapper">
          {data.map((item, index) => {
            return <PortfoCard key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
