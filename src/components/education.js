import InfoBlock from './info-block'
import './education.css';

function Education() {
  
    return (
      <div className="App-body">
        <InfoBlock
            header="Degree"
            text="From September 2019 to April 2023, I completed a B.A. Majoring in Computer Science and Minoring in Commerce at Mount Allison University in New Brunswick, Canada. Mount Allison University is currently (and has repeatedly been) ranked as the #1 Undergraduate school in Canada by Maclean's." 
            attribution="University icons created by Smashicons - Flaticon" 
            attLink="https://www.flaticon.com/free-icons/university" 
            attName="university icons" 
            icon={require("../assets/school.png")}
            onClick={() => window.location.href = 'https://mta.ca/'}
            numComponents='3' // Number of components is actually 2, but this creates more visually pleasing result
        />
        <InfoBlock
            header="Courses"
            text="I achieved excellent performance in several advanced Computer Science courses, including Computer Organization and Architecture, Artificial Intelligence, Operating Systems, Software Design, and Computer Networks. " 
            attribution="Furniture and household icons created by Futuer - Flaticon" 
            attLink="https://www.flaticon.com/free-icons/furniture-and-household" 
            attName="furniture and household icons" 
            icon={require("../assets/open-book.png")}
            onClick={() => window.location.href = 'https://mta.ca/'}
            numComponents='3' // Number of components is actually 2, but this creates more visually pleasing result
        />
      </div>
    );
  }
  
export default Education;