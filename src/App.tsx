import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoutes } from "~/routes/index";
import Err404 from "~/pages/Err404";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {PublicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route path="*" element={<Err404 />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
