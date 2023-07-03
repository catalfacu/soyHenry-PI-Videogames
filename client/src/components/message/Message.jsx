import styles from './message.module.css'

export default function Message(props) {
    return (
        <div className={styles.container}>
            <h1>{props.errors}</h1>
        </div>
    )
};