import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { ImMail } from 'react-icons/im'
import './header-icons.css';

function HeaderIcons() {
    return (
      <div className="Icons">
        <div className="Icon-wrapper">
            <a href="https://github.com/benjru" className="Text-properties"><FaGithubSquare size={50}/></a>
            <text>Github</text>
        </div>
        <div className="Icon-wrapper">
            <a href="https://www.linkedin.com/in/benjamin-hallihan-074983189/" className="Text-properties"><FaLinkedin size={50}/></a>
            <text>Linkedin</text>
        </div>
        <div className="Icon-wrapper">
            <a href="mailto:ben.hallihan1@gmail.com" className="Text-properties"><ImMail size={50}/></a>
            <text>E-Mail</text>
        </div>
      </div>
    );
  }

export default HeaderIcons