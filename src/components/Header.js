import "./Header.css";
import logo from "./images/logo-white.png"


function Header() {
  return (
    <div className="Header">
      <img className="logo" src={logo}/>
        <ul className="ul-pages">
          <li className="list-item"> <a href="#" className="hyper-link" >Home</a></li>
          <li className="list-item"> <a href="#" className="hyper-link" >Portfolio</a></li>
          <li className="list-item"> <a href="#" className="hyper-link" >Jobs</a></li>
          <li className="list-item"> <a href="#" className="hyper-link" >About</a></li>
          <li className="list-item"> <a href="#" className="hyper-link" >Contact</a></li>
        </ul>
    </div>
  );
}

export default Header;
