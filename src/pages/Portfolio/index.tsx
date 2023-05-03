import PortfoCard from "./PortfoCard";
import "./portfolio.scss";
import data from "~/data/portfolios";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="portfolio_wrapper">
        <div className="section_title">
          <h1 className="text_simple_grad">Portfolio</h1>
          <p className="description">
            Here you can see my projects Here you can see my projects Here you
            can see my projects
          </p>
        </div>
        <div className="projects_wrapper">
          {data.map((item) => {
            return <PortfoCard key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
