import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "~/routes";
import ThemeContextProvider from "./context/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";

function App() {
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
