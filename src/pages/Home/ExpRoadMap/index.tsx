import "./expRoadMap.scss";
import { Link } from "react-router-dom";
import ROUTES_OBJECT from "~/routes/RoutesObject";
import { ReactComponent as Users } from "~/assets/images/icons/users.svg";
import { ReactComponent as Activity } from "~/assets/images/icons/activity.svg";
import { ReactComponent as Wifi } from "~/assets/images/icons/wifi.svg";

const ExpRoadMap = () => {
  return (
    <div className="exp_road_map">
      <div className="exp_card" data-aos="fade-up">
        <div className="icon">
          <Wifi />
        </div>
        <h5>A motivate developer</h5>
        <span className="!text-purpleGradEnd">Now Available</span>
        <Link to={ROUTES_OBJECT.contact} className="featured_link">
          let's create something special &rarr;
        </Link>
      </div>
      <div className="exp_card reversed" data-aos="fade-up">
        <div className="icon">
          <Users />
        </div>
        <h5>Mid-Level React Dev</h5>
        <h6>Kahkeshan Group of Companies</h6>
        <span>2021 - ...</span>
        <p>
          Creating successful responsive websites that are fast, easy to use,
          and built with best practices.
        </p>
      </div>
      <div className="exp_card" data-aos="fade-up">
        <div className="icon">
          <Activity />
        </div>
        <h5>Junior FrontEnd Developer</h5>
        <h6>Freelancer</h6>
        <span>2019 - 2021</span>
        <p>
          Collaborating with talented people and Create web products for both
          business and consumer use.
        </p>
      </div>
    </div>
  );
};

export default ExpRoadMap;
