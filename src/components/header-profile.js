import pfp from '../assets/pfp.jpg';
import './header-profile.css';

function HeaderProfile() {
  const handleClick = () => {
    window.location.href = 'https://benjru.github.io/Portfolio/';
  };

  return (
    <header className="App-header">
      <div
        className="Profile-photo"
        style={{ backgroundImage: `url(${pfp})` }}
        onClick={handleClick}
      ></div>
      <div className="Profile-header">
        <p className="Full-name">Benjamin Isaiah Hallihan</p>
        <p className="Degree-text">B.A. Major Computer Science, Minor Commerce</p>
      </div>
    </header>
  );
}

export default HeaderProfile;
