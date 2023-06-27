import styles from './card.module.css';

export default function Card(props) {
    return (
        <div className={styles.card}>
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <h3>{props.genre}</h3>
        </div>
    )
};