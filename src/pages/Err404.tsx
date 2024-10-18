import { Link } from "react-router-dom";
import BrokenImage from "~/assets/images/broken.png";
import Button from "~/components/Button";
import ROUTES_OBJECT from "~/routes/RoutesObject";

const Err404 = () => {
  return (
    <div className="min-h-[calc(100vh-70px)] w-full flex items-center justify-center">
      <div className="container p-5">
        <div className="flex items-center justify-center flex-wrap">
          <div className="w-3/4 lg:w-1/2 flex flex-col items-center justify-center">
            <img
              src={BrokenImage}
              alt="error :("
              className="w-full lg:w-3/4"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <h1 className="text_simple_grad text-8xl">404</h1>
            <h2 className="text_simple_grad text-6xl">Not Found</h2>
            <br />
            <h2 className="text-xl my-2">This route is wrong</h2>
            <br />
            <Link to={ROUTES_OBJECT.home}>
              <Button icon="<-">Back to home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Err404;
