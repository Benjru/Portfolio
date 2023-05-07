import pfp from '../assets/pfp.jpg';
import './header-profile.css';

function HeaderProfile() {
    return (
        <header className="App-header">
            <img src={pfp} className="Profile-photo" alt="Profile"/>
            <div className="Profile-header">
                <p className="Full-name">Benjamin Isaiah Hallihan</p>
                <p className="Degree-text">B.A. Major Computer Science, Minor Commerce</p>
            </div>
        </header>
    );
}

export default HeaderProfile;