import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Scifi from "./components/Scifi";
import Humor from "./components/Humor";
import Navbar from "./Navbar";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>

    </div>
  );
}

export default App;
