import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import styles from './navBar.module.css';

export default function NavBar(props) {
    return (
        <div className={styles.container}>
           
            <NavLink to="/">
                Landing
            </NavLink>
            
            <NavLink to="/home">
                <button>Home</button>
            </NavLink> 
            <SearchBar/>
            <NavLink to="/form">
                <button>Create videogame</button>
            </NavLink>
        </div>
    )
};