import styles from './card.module.css';
import { Link } from 'react-router-dom';


export default function Card(props) {
    return (
        <div className={styles.card}>
            <Link to={`/detail/${props.id}`}>
            <img src={props.image} alt={props.name} />
            </Link>
            <h2>{props.name}</h2>
            <h3>{props.genre}</h3>
        </div>
    )
};