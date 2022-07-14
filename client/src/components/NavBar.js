import { Link } from 'react-router-dom';
import "../styles/navBar.css";

export default function NavBar() {
  return(  
    <div className="navbar">
        <Link to="/createCharacter">
            <button className="navbar-button">Crear Personaje</button>
        </Link>
  </div>
)}
