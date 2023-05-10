import InfoBlock from './info-block'
import './projects.css';

function Projects() {
  
    return (
      <div className="App-body">
        <InfoBlock
            header="Wormhole"
            text="Wormhole is a window manager written in C for the Xorg display server. A window manager is a system program that controls the placement and appearance of windows in a desktop environment, allowing several windowed applications to be rendered simultaneously. Wormhole also provides built-in keybind support." 
            attribution="Computer icons created by Smashicons - Flaticon" 
            attLink="https://www.flaticon.com/free-icons/computer" 
            attName="computer icons" 
            icon={require("../assets/windows.png")}
            onClick={() => window.location.href = 'https://Github.com/Benjru/Wormhole/'}
            numComponents='4'
        />
        <InfoBlock
            header="Portfolio Site"
            text="I created this website using React and Github Pages. Routing was implemented with react-router (specifically HashRouter). To learn more about this project or see the source code, you can click here to be redirected to the Github repository." 
            attribution="Atom icons created by Freepik - Flaticon" 
            attLink="https://www.flaticon.com/free-icons/atom" 
            attName="atom icons" 
            icon={require("../assets/atom.png")}
            onClick={() => window.location.href = 'https://Github.com/Benjru/Portfolio/'}
            numComponents='4'
        />
        <InfoBlock
            header="Qwirkle"
            text="A collaborative python-based full-stack implementation of the board game 'Qwirkle'. This project was done agile-style, with my main responsibilities being the implementation of the user interface, as well as designing control-flow and class UML diagrams." 
            attribution="Board icons created by Paul J. - Flaticon" 
            attLink="https://www.flaticon.com/free-icons/board" 
            attName="board icons" 
            icon={require("../assets/dice.png")}
            onClick={() => window.location.href = 'https://Github.com/COMP-4721-Group-5/Frontend/'}
            numComponents='4'
        />
        <InfoBlock
            header="Space Cats"
            text="A collaborative web-based implementation of the card game 'Space Cats Fight Fascism'. We used Java/Spring/Gradle for the backend, and React for the frontend. My main responsibilities involved designing UML class diagrams, designing test cases, and debugging React components." 
            attribution="Astronaut icons created by Freepik - Flaticon" 
            attLink="https://www.flaticon.com/free-icons/astronaut" 
            attName="astronaut icons" 
            icon={require("../assets/astronaut.png")}
            onClick={() => window.location.href = 'https://Github.com/Benjru/SCFF-BNW'}
            numComponents='4'
        />
      </div>
    );
  }
  
export default Projects;