import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import styles from './navBar.module.css';

export default function NavBar(props) {
    return (
        <div className={styles.container}>
           
            <NavLink to="/">
            <img src="https://fontmeme.com/permalink/230701/3f7dd7ffeb6b8fbb7ad1755be8ba8359.png" alt="landing" border="0"/>
            </NavLink>
            
            <NavLink to="/home">
            <img src="https://fontmeme.com/permalink/230701/91a089a7a418491605b6eb56a9bd97dd.png" alt="home" border="0"/>
            </NavLink> 
            <SearchBar/>
            <NavLink to="/form">
            <img src="https://fontmeme.com/permalink/230701/8e1f5e5b26905243e0a07e75453bb69f.png" alt="createGame" border="0"/>
            </NavLink>
        </div>
    )
};