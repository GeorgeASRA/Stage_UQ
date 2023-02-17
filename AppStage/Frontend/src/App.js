import "bootstrap/dist/css/bootstrap.min.css";
import "./style/AppStyle.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar";
import { ListeDeCours } from "./pages/ListeDeCours";
import { CoursEtMateriels } from "./pages/CoursEtMateriels";

function App() {

  return (
    <div>
      <Navbar/>
      <CoursEtMateriels/>
      <Router>
          <Routes>
              <Route path='/listeDeCours' element={<ListeDeCours/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
