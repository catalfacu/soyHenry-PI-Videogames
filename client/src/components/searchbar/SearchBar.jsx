import React, { useState } from 'react';

import styles from './searchBar.module.css';
import { useDispatch } from 'react-redux';
import {getGamesByName} from '../../redux/actions';

export default function SearchBar(props) {
    const [name, setName] = useState("");
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const {value} = e.target;
        setName(value);
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
                placeholder=' Buscar juegos...'
                />
            <button onClick={()=> onSearch()}>Search</button>
        </div>
    )
};