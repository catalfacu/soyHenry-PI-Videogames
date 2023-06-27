import React, { useState } from 'react';

import styles from './searchBar.module.css';
import { useDispatch} from 'react-redux';
import { getAllGames, getGamesByName } from '../../redux/actions';

export default function SearchBar(props) {
    const [name, setName] = useState("");
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const {value} = e.target;
        setName(value);
        //console.log(name);
    };

    const onBlur = (e) => {
        const {value} = e.target;
        if(!value) {
            dispatch(getAllGames());
        }
    };

    const onSearch = () => {
        dispatch(getGamesByName(name));
    };


    return(
        <div className={styles.container}>
            <input 
                type="text"
                value={name}
                onChange={handleChange}
                onBlur = {onBlur()} />
            <button onClick={()=> onSearch(name)}>Search</button>
        </div>
    )
};