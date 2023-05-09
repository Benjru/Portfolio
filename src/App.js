import './App.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HeaderIcons from './components/header-icons'
import HeaderProfile from './components/header-profile'
import Home from './components/home-page'
import Projects from './components/projects'
import Education from './components/education'
import About from './components/about'

const App = () => {
  return (
    <Router>
      <div>
        <div className="App">
          <HeaderProfile />
          <HeaderIcons />
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
