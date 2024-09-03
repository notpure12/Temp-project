import "../styling/Navbar.css";
import '../assets/fonts/fonts.css'
import userIcon from "../assets/img/Frame.svg";
const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-logo">
        <a href="#"><h1 className="nav-h1"><span className="UP">UP</span>CONNECT</h1></a>
      </div>
      <ul className="nav-group-item">
        <li className="nav-group-item1">
          <a href="#"><h1 className="history">Emotion History</h1></a>
        </li>
        <li className="nav-group-item2">
          <a href="#">
            <img src={userIcon} width={50}height={50}></img>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
