import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { clearDetail, getGameDetail } from "../../redux/actions";
import styles from "./detail.module.css";

export default function Detail(props) {

    const {id} = useParams();
    let gameDetail = useSelector(state => state.game);
    let errors = useSelector(state => state.errors);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getGameDetail(id))
        return () => {
            dispatch(clearDetail());
        }
    },[dispatch,id]);
    console.log(errors);
    return (
        <div className={styles.container}>
            <h1 style={{'fontSize':'50px'}}>{gameDetail.name}</h1>
            <h3>{gameDetail.id}</h3>
            <img src={gameDetail.image} alt={gameDetail.name} />
            <h2>🎮Plataformas: </h2>
            <ul>{gameDetail.platforms?.map((platform,index) => <li key={index}>{platform}</li> )}</ul>
            <h2>⚔️Generos</h2>
            <ul>{gameDetail.genres?.map((genre,index)=> <li key={index}>{genre}</li>)}</ul>
            <h2>🗓️Fecha de lanzamiento</h2>
            <h3>{gameDetail.released}</h3>
            <h2>⭐Rating</h2>
            <h3>{gameDetail.rating}</h3>
            <h2>📖Descripcion</h2>
            <p style={{'font-size':'18px'}}>{gameDetail.description}</p>
        </div>
    )
};
