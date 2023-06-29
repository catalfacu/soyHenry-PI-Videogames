import { useSelector, useDispatch } from 'react-redux';
import { getAllGames } from '../../redux/actions';
import { useEffect } from 'react';
import Card from '../card/Card';
import styles from './home.module.css';
import { useState } from 'react';
import Paginacion from '../paginacion/Paginacion';


function Home(props) {

    const [page, setPage] = useState(1);
    const [amountPerPage, setAmountPerPage] = useState(15);
    
    const allGames = useSelector(state => state.allGames);
    const dispatch = useDispatch();
    
    const handleAllGames = () => {
        return dispatch(getAllGames());
    };
    useEffect(()=> { return handleAllGames() },[])
    
    const max = allGames.length / amountPerPage;

    return (
      <div className={styles.container}>

        <div className={styles.filterAndOrder}>
        <label>Filtrar por origen:  
        <select name="filtarPorOrigen">
          <option value="A">API</option>
          <option value="DB">Base de datos</option>
         </select>
        </label>

        <label> Filtrar por genero: 
            <select name="filtrarPorGenero">
                <option value="Ac">Action</option>
                <option value="Ad">Adventure</option>
                <option value="Ar">Arcade</option>
                <option value="BG">Board Games</option>
                <option value="Ca">Card</option>
                <option value="Cs">Casual</option>
                <option value="Ed">Educational</option>
                <option value="Fa">Family</option>
                <option value="Fig">Fighting</option>
                <option value="In">Indie</option>
                <option value="MM">Massively Multiplayer</option>
                <option value="Puz">Puzzle</option>
                <option value="Plat">Platformer</option>
                <option value="Rac">Racing</option>
                <option value="RPG">RPG</option>
                <option value="Shoot">Shooter</option>
                <option value="Sim">Simulation</option>
                <option value="Sp">Sports</option>
                <option value="St">Strategy</option>
            </select>
        </label>
        
        <label>Ordenar por:  
            <select name="Ordenar">
          <option value="AA">Ascendente ABC</option>
          <option value="DA">Descendente ABC</option>
          <option value="AR">Ascendente rating</option>
          <option value="DR">Descendente rating</option>
            </select>
        </label>
         
        </div>
        
        <div className={styles.cards}>
          {allGames
          .slice( 
            (page - 1 ) * amountPerPage,
            (page - 1) * amountPerPage + amountPerPage)
          .map((game) => {
            return (
              <Card
                id={game.id}
                key={game.id}
                image={game.image}
                name={game.name}
                genre={game.genres}
              />
            );
          })}
        </div>

        <div>
            <Paginacion page={page} setPage={setPage} max={max} />
        </div>
      </div>
    );
};

export default Home;

//TODO: 2 select:
//TODO: 1er select: FILTRAR
//              a_ filtrar por genero
//              b_ origen de la api
//              c_ origen de la Db

//TODO: 2do select: ORDENAMIENTO
//              a_ascendente por orden alfabetico
//              a_1_descendente por orden alfabetico

//              b_ascendente por rating
//              b_1_descendente por rating

