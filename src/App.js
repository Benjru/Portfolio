import './App.css';
import HeaderIcons from './components/header-icons'
import HeaderProfile from './components/header-profile'
import InfoBlock from './components/info-block'

function App() {
  return (
    <div>
      <div className="App">
        <HeaderProfile/>
        <HeaderIcons/>
      </div>
      <div className="App-body">
        <InfoBlock
          header="Projects"
          text="Want to learn more about the projects I've been working on? Click here to see a detailed breakdown of each one. Alternatively, you can click the github icon to go directly to my Github profile." 
          attribution="Code icons created by Freepik - Flaticon" 
          attLink="https://www.flaticon.com/free-icons/code" 
          attName="code icons" 
          icon={require("./assets/code.png")}
        />
        <InfoBlock
          header="Education" 
          text="Want more detailed information about my education? Click here to see for the full breakdown"
          attribution="Education icons created by Freepik - Flaticon"
          attLink="https://www.flaticon.com/free-icons/education"
          attName="education icons"
          icon={require("./assets/education.png")}
        />
        <InfoBlock
          header="About" 
          text="Want to learn about my skills, experience, and interests? Click here."
          attribution="About person icons created by Freepik - Flaticon"
          attLink="https://www.flaticon.com/free-icons/about-person"
          attName="about person icons"
          icon={require("./assets/id-card.png")}
        />
      </div>
    </div>
  );
}

export default App;
