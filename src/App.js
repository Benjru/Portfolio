import './App.css';
import HeaderIcons from './components/header-icons'
import HeaderProfile from './components/header-profile'
import Home from './components/home-page'

function App() {
  return (
    <div>
      <div className="App">
        <HeaderProfile/>
        <HeaderIcons/>
      </div>
        <Home/>
    </div>
  );
}

export default App;
