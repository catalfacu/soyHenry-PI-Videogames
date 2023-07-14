import React, { useEffect, useState } from 'react';
import styles from './searchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {getGamesByName} from '../../redux/actions';
import Swal from 'sweetalert2';

export default function SearchBar(props) {
    const [name, setName] = useState("");
    const errors = useSelector(state => state.errors);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const {value} = e.target;
        setName(value);
    };

    const onSearch = () => {
       dispatch(getGamesByName(name));
    };

    useEffect(()=>{
        if(errors) {
            Swal.fire(`${errors.data}`)
            setName("");
        }
    },[errors])
    console.log(errors);
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