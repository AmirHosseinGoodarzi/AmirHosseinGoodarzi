import "./absoluteShape.scss";

type Props = {
  position?: string;
  colors?: string;
};

const AbsoluteShape = ({
  colors = "from-blueGradStart via-purpleGradStart to-orangeGradStart",
  position = "top_left",
}: Props) => {
  return (
    <div className={`absolute_shape ${position}`} aria-hidden="true">
      <div className={colors}></div>
    </div>
  );
};

export default AbsoluteShape;
