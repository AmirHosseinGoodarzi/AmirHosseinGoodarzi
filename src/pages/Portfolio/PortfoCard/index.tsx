import { Link } from "react-router-dom";
import { ReactComponent as Desktop } from "~/assets/images/icons/desktop.svg";
import { ReactComponent as Mobile } from "~/assets/images/icons/mobile.svg";
import ROUTES_OBJECT from "~/routes/RoutesObject";

type Props = {
  id: number;
  title: string;
  image: string;
  desc: string;
  teamMembers: number;
  projectDurationDays: number;
  myRole: string;
  link: string;
  technologies: string[];
  type: string;
};
const PortfoCard = ({ id, title, image, desc, type }: Props) => {
  return (
    <Link to={ROUTES_OBJECT.portfolio + "/" + id}>
      <div className="portfo_card">
        <div className="card_thumbnail">
          <img src={image} alt={title} />
        </div>
        <div className="card_body">
          <div>
            <div>{type === "mobile" ? <Mobile /> : <Desktop />}</div>
            <h6>{title}</h6>
          </div>
          <div className="card_desc">
            <p>{desc}</p>
            <footer>Click to see More &rarr;</footer>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfoCard;
