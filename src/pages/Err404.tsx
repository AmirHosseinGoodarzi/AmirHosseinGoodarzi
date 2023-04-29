import { Link } from "react-router-dom";
import ROUTES_OBJECT from "~/routes/RoutesObject";

const Err404 = () => {
  return (
    <div className="h-screen w-full set_row_middle">
      <div className="container">
        <div className="set_row_middle flex-wrap">
          <div className="w-3/4 lg:w-1/2 set_col_middle">asdasd</div>
          <div className="w-full lg:w-1/2 set_col_middle">
            <h1 className="text-red-500 text-[6rem] lg:text-[8rem] drop-shadow-2xl">
              404
            </h1>
            <h2 className="font-bold text-2xl my-2">آدرس اشتباه</h2>
            <p className="text-gray-700 text-lg my-5 text-center">
              صفحه مورد نظر یافت نشد
            </p>

            <Link to={ROUTES_OBJECT.home}>بازگشت</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Err404;
