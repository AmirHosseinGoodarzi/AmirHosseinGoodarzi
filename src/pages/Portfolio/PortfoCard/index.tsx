import { ReactComponent as Desktop } from "~/assets/images/icons/desktop.svg";
import { ReactComponent as Mobile } from "~/assets/images/icons/mobile.svg";

type Props = {
  title: string;
  image: string;
  desc: string;
  teamMembers: number;
  year: number;
  projectDurationDays: number;
  myRole: string;
  link: string;
  technologies: string[];
  type: string;
};
const PortfoCard = ({
  title,
  image,
  desc,
  teamMembers,
  year,
  projectDurationDays,
  myRole,
  link,
  technologies,
  type,
}: Props) => {
  return (
    <a href={link} target="_blank">
      <article className="portfo_card">
        <header className="card_thumbnail">
          <img src={image} />
        </header>
        <div className="card_icon bg_blue_grad">
          {type === "mobile" ? <Mobile /> : <Desktop />}
        </div>
        <div className="card_body">
          <div className="category bg_blue_grad">{year}</div>
          <h2 className="title text_blue_grad">{title}</h2>
          <div className="text-sm">{desc}</div>
          <div className="card_desc">
            <ul className="text-xs flex flex-col gap-2">
              <li>Role: {myRole}</li>
              <li>Duration: {projectDurationDays} days</li>
              <li>Team: {teamMembers} people</li>
              <li className="flex flex-wrap gap-2">
                {technologies.map((item) => (
                  <span className="tech_item">{item}</span>
                ))}
              </li>
            </ul>
          </div>
          {/* <p>Click to see More &rarr;</p> */}
        </div>
      </article>
    </a>
  );
};

export default PortfoCard;
