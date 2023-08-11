import React from "react";
import BrokenImage from "~/assets/images/broken.png";
import Button from "./Button";

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
        <div className="h-screen w-full flex items-center justify-center">
          <div className="container">
            <div className="flex items-center justify-center flex-wrap">
              <div className="w-3/4 lg:w-1/2 flex flex-col items-center justify-center">
                <img src={BrokenImage} alt="error :(" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                <h1 className="text-red-500 text-[6rem] lg:text-[8rem] drop-shadow-2xl">
                  Error
                </h1>
                <h2 className="font-bold text-xl my-2">
                  Something went wrong!
                </h2>
                <br />
                <Button>Back to home</Button>
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
