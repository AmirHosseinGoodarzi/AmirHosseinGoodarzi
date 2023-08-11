import BrokenImage from "~/assets/images/broken.png";
import Button from "~/components/Button";

const Err404 = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="container p-5">
        <div className="flex items-center justify-center flex-wrap">
          <div className="w-3/4 lg:w-1/2 flex flex-col items-center justify-center">
            <img src={BrokenImage} alt="error :(" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <h1 className="text-red-500 text-[6rem] lg:text-[7rem] drop-shadow-2xl">
              Not Found
            </h1>
            <h2 className="font-bold text-xl my-2">This route is wrong</h2>
            <br />
            <Button>Back to home</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Err404;
