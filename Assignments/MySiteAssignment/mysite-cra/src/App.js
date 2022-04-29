// import logo from './logo.svg';
// import './App.css';
import './style.css'
import './boostrap/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from './components/Navigation';
import Main from './components/Main';
import About from './components/About'
import Summary from './components/Summary';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer';
// import MainPage from './layouts/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <div className="content">

          <Routes>
            <Route exact path="/" element={
              <>
                <Main />
                <About />
                <Summary />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
