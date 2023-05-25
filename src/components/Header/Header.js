
import './Header.css';
import { Link } from 'react-router-dom';



function Header(props){
    return  <div className="header">
                <Link to="/" className="logo"><img src = "./img/logo.png" alt="logo"/></Link>
                <Link to="/nuevo-video" className="botonNuevo" onClick={props.cambiarEstado}>Agregar Video</Link>
            </div> 
}

export default Header;