import { useState } from 'react';
import { filterByCreation, filterByGenre, getAllGames, orderedByAbc, orderedByRating } from '../../redux/actions';
import styles from './filterAndOrder.module.css';
import {useDispatch} from 'react-redux';

export default function(props) {
const [aux, setAux] = useState(false);
const dispatch = useDispatch();

  const handleFilterOrigin = (e) => {
    const {value} = e.target;
    e.preventDefault();
    dispatch(filterByCreation(value));
    props.setPage(1);
    props.setInput(1);
  };

  const handleFilterGenre = (e) => {
    const {value} = e.target;
    e.preventDefault();
    dispatch(filterByGenre(value));
    props.setPage(1);
    props.setInput(1);
  };

  const handleOrderByAbc = (e) => {
    const {value} = e.target;
    e.preventDefault();
    dispatch(orderedByAbc(value));
    aux ? setAux(false) : setAux(true);
    props.setPage(1);
    props.setInput(1);
  };

  const handleOrderByRating = (e) => {
    const {value} = e.target;
    e.preventDefault();
    dispatch(orderedByRating(value));
    aux ? setAux(false) : setAux(true);
    props.setPage(1);
    props.setInput(1);
  };

  const handleDefaultGames = () => {
    dispatch(getAllGames());
    props.setPage(1);
    props.setInput(1);
  };

    return(
        <div className={styles.container}>
          <label>Filtrar por origen:  
        <select name="filtarPorOrigen" onChange={handleFilterOrigin}>
          <option value="D">All</option>
          <option value="A">API</option>
          <option value="DB">Created</option>
         </select>
        </label>

        <label> Filtrar por genero: 
            <select name="filtrarPorGenero" onChange={handleFilterGenre}>
                <option value="D">All</option>
                {
                  props.genres.map((genre,id) => {
                    return <option key={id} value={genre.name}>{genre.name}</option>
                  })
                }
            </select>
        </label>
        <label> Resetear: 
          <button onClick={()=> handleDefaultGames()} >
          Default
        </button>
        </label>
        

        <label>Ordenar alfabeticamente:  
            <select name="orderByABC" onChange={handleOrderByAbc}>
          <option value="D">Default</option>
          <option value="AA">Ascendente ABC</option>
          <option value="DA">Descendente ABC</option>
            </select>
        </label> 

        <label>Ordenar por Rating:
          <select name="orderByrating" onChange={handleOrderByRating}>
          <option value="D">Default</option>
          <option value="AR">Ascendente rating</option>
          <option value="DR">Descendente rating</option>
          </select>
          </label>  
        </div>
    )
};