import { useNavigate } from 'react-router-dom';
import InfoBlock from './info-block'
import './home-page.css';

function Home() {

    const navigate = useNavigate();

    const handleInfoBlockClick = (route) => {
      navigate(route);
    };

    return(
        <div className="App-body">
            <InfoBlock
                header="Projects"
                text="Want to learn more about the projects I've been working on? Click here to see a detailed breakdown of each one. Alternatively, you can click the Github icon to go directly to my Github profile." 
                attribution="Code icons created by Freepik - Flaticon" 
                attLink="https://www.flaticon.com/free-icons/code" 
                attName="code icons" 
                icon={require("../assets/code.png")}
                onClick={() => handleInfoBlockClick('/projects')}
                numComponents='3'
            />
            <InfoBlock
                header="Education" 
                text="Want more detailed information about my education? Click here to see the full breakdown."
                attribution="Education icons created by Freepik - Flaticon"
                attLink="https://www.flaticon.com/free-icons/education"
                attName="education icons"
                icon={require("../assets/education.png")}
                onClick={() => handleInfoBlockClick('/education')}
                numComponents='3'
            />
            <InfoBlock
                header="About" 
                text="Want to learn about my skills, experience, and interests? Click here."
                attribution="About person icons created by Freepik - Flaticon"
                attLink="https://www.flaticon.com/free-icons/about-person"
                attName="about person icons"
                icon={require("../assets/id-card.png")}
                onClick={() => handleInfoBlockClick('/about')}
                numComponents='3'
            />
        </div>
    );
}

export default Home
