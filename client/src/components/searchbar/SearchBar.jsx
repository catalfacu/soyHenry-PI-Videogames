import React, { useState } from 'react';

import styles from './searchBar.module.css';
import { useDispatch, useSelector} from 'react-redux';
import {getGamesByName} from '../../redux/actions';

export default function SearchBar(props) {
    const [name, setName] = useState("");
    const games = useSelector(state => state.games);
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
            <button onClick={(name)=> onSearch(name)}>Search</button>
        </div>
    )
};