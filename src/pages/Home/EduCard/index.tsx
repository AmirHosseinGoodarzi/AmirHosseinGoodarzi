import "./eduCard.scss";

type Props = {
  title: string;
  years: string;
  uniName: string;
  uniLocation: string;
  imagePosition: string;
  link: string;
};
const EduCard = ({
  title,
  years,
  uniName,
  uniLocation,
  imagePosition,
  link,
}: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="education_card">
        <div className="card_thumbnail">
          <div className={`image ${imagePosition}`}></div>
        </div>
        <div className="card_body">
          <div className="card_desc">
            <p>{title}</p>
            <p>{years}</p>
          </div>
          <div className="card_footer">
            <div>
              <p>{uniName}</p>
              <p>{uniLocation}</p>
            </div>
            <div>
              <button>&rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default EduCard;
