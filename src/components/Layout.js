import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Layout(props){
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/Home" activeStyle={{color:'red'}}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Blogs" activeStyle={{color:'red'}}>Blogs</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact" activeStyle={{color:'red'}}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/Profile/1/VanTTN" activeStyle={{color:'red'}}>Profile</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Layout;