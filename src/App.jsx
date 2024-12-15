import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WrapperComponent from "./pages/WrapperComponent";
import { Home } from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="Eco-Shop" element={<WrapperComponent />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
