import React from "react";
import ROUTES_OBJECT from "~/routes/RoutesObject";
class ErrorBoundary extends React.Component<
  { children: any },
  { hasError: boolean; errorMessage: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    this.setState({ errorMessage: error.message });
    console.table(error);
    console.table(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen w-full set_row_middle">
          <div className="container">
            <div className="set_row_middle flex-wrap">
              <div className="w-3/4 lg:w-1/2 set_col_middle">da sfasdad</div>
              <div className="w-full lg:w-1/2 set_col_middle">
                <h1 className="text-red-500 text-[6rem] lg:text-[8rem] drop-shadow-2xl">
                  Error
                </h1>
                <h2 className="font-bold text-2xl my-2">
                  با عرض پوزش، خطایی رخ داده است
                </h2>
                <p className="text-gray-700 text-lg my-5 text-center">
                  {this.state.errorMessage}
                </p>

                <a href={ROUTES_OBJECT.home}>بازگشت به صفحه اصلی</a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
