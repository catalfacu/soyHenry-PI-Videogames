import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { clearDetail, getGameDetail } from "../../redux/actions";

export default function Detail(props) {
    const {id} = useParams();
    const gameDetail = useSelector(state => state.game);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGameDetail(id))
        return () => {
            dispatch(clearDetail());
        }
    },[]);

    console.log(gameDetail);
    return (
        <div>
            <h1>Detail</h1>
            <h2>{gameDetail.name}</h2>
            <h3>{gameDetail.id}</h3>
            <h3>{gameDetail.platforms}</h3>
            <h3>{gameDetail.description}</h3>
            <h3>{gameDetail.released}</h3>
            <h3>{gameDetail.rating}</h3>
            <h3>{gameDetail.genres}</h3>
            <img src={gameDetail.image} alt={gameDetail.name} />
        </div>
    )
};



//// ID.
//// Nombre.
//// Imagen.
//// Plataformas.
//// Descripción.
//// Fecha de lanzamiento.
//// Rating.
//// Géneros.