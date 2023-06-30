import { useSelector, useDispatch } from 'react-redux';
import { filterByCreation, filterByGenre, getAllGames, getAllGenres, orderedByAbc, orderedByRating } from '../../redux/actions';
import { useEffect } from 'react';
import Card from '../card/Card';
import styles from './home.module.css';
import { useState } from 'react';
import Paginacion from '../paginacion/Paginacion';
import FilterAndOrder from '../filter-and-order/FilterAndOrder';


function Home(props) {

//?------------PAGINATED, ALLGAMES AND ALL GENRES -----------------
    const [page, setPage] = useState(1);
    const [input, setInput] = useState(1);
    const [amountPerPage, setAmountPerPage] = useState(15);
    
    const genres = useSelector(state => state.genres);
    const allGames = useSelector(state => state.games);
    const dispatch = useDispatch();
    
    const handleAllGames = () => {
        return dispatch(getAllGames());
    };

    useEffect(()=>{ dispatch(getAllGenres())},[]);

    useEffect(()=> { return handleAllGames() },[]);
    
    const max = allGames.length / amountPerPage;

  const handleFilterOrigin = (e) => {
    const {value} = e.target;
    e.preventDefault();
    dispatch(filterByCreation(value));
    setPage(1);
    setInput(1);
  };

  const handleFilterGenre = (e) => {
    const {value} = e.target;
    e.preventDefault();
    dispatch(filterByGenre(value));
    setPage(1);
    setInput(1);
  };

  const handleOrderByAbc = (e) => {
    const {value} = e.target;
    e.preventDefault();
    dispatch(orderedByAbc(value));
    setPage(1);
    setInput(1);
  };

  const handleOrderByRating = (e) => {
    const {value} = e.target;
    e.preventDefault();
    dispatch(orderedByRating(value));
    setPage(1);
    setInput(1);
  };

    return (
      <div className={styles.container}>

        <FilterAndOrder genres={genres} handleFilterOrigin={handleFilterOrigin} handleFilterGenre={handleFilterGenre} handleOrderByAbc={handleOrderByAbc} handleOrderByRating={handleOrderByRating}/>
        
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
                rating={game.rating}
              />
            );
          })}
        </div>

        <div>
            <Paginacion page={page} setPage={setPage} max={max} input={input} setInput={setInput}/>
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

