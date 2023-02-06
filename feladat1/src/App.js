import "./App.css"
import Footer from "./Footer";
import Content from "./Content";
import Header from "./Header"
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      
      <Header />
      
      <Content />

      <Footer />
    </Router>
  </div>
  );
}

export default App;
