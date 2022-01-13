import "./App.css";
import Home from "./pages";
import ContactMePage from "./pages/contactme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact-me" element={<ContactMePage />} exact />
      </Routes>
    </Router>
  );
}
export default App;
