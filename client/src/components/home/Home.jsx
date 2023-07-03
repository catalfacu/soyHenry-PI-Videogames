import { useSelector, useDispatch } from 'react-redux';
import {getAllGames, getAllGenres} from '../../redux/actions';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../card/Card';
import styles from './home.module.css';
import Paginacion from '../paginacion/Paginacion';
import FilterAndOrder from '../filter-and-order/FilterAndOrder';
import Loader from '../loader/Loader';


function Home(props) {
  //?------------PAGINATED, ALLGAMES AND ALL GENRES -----------------
  const [page, setPage] = useState(1);
  const [amountPerPage, setAmountPerPage] = useState(15);
  const [input, setInput] = useState(1);
  const [allOk, setAllOk] = useState(false);

  const genres = useSelector((state) => state.genres);
  const allGames = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allGames.length === 0) {
      setAllOk(true);
      dispatch(getAllGenres());
      dispatch(getAllGames());
    } else {
      setAllOk(false);
    }
  }, [allGames]);

  const max = allGames.length / amountPerPage;

  return (
    <div className={styles.container}>
      <FilterAndOrder
        genres={genres}
        page={page}
        setPage={setPage}
        input={input}
        setInput={setInput}
      />

      {allOk ? <Loader /> : null}
      
      <div className={styles.cards}>
        {allGames
          .slice(
            (page - 1) * amountPerPage,
            (page - 1) * amountPerPage + amountPerPage
          )
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
        <Paginacion
          page={page}
          setPage={setPage}
          max={max}
          input={input}
          setInput={setInput}
        />
      </div>
    </div>
  );
};

export default Home;
