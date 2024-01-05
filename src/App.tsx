import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "~/routes";
import ThemeContextProvider from "./context/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="App">
      <ErrorBoundary>
        <ThemeContextProvider>
          <Router>
            <Navbar />
            <AllRoutes />
          </Router>
        </ThemeContextProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
