import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";


export default function NavBar(props) {
    return (
        <div>
            <SearchBar/>
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
            <NavLink to="/form">
                <button>Create videogame</button>
            </NavLink>
        </div>
    )
};