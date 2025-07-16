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
  ...otherProps
}: Props) => {
  return (
    <a href={link} target="_blank" {...otherProps}>
      <div className="group mx-auto w-[320px] h-[350px] border rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all bg-background">
        <div className="h-[40%] flex items-center justify-center">
          <div
            className={`size-24 bg-[url('/assets/images/uniLogos.png')] bg-size-[200%] ${imagePosition}`}
          ></div>
        </div>
        <div className="flex flex-col justify-between h-[60%] rounded-t-3xl p-5 bg-black">
          <div className="text-white">
            <p>{title}</p>
            <p>{years}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <p>{uniName}</p>
              <p>{uniLocation}</p>
            </div>
            <div>
              <button className="size-10 text-xl border rounded-full transition-all group-hover:bg-background group-hover:-rotate-45">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default EduCard;
