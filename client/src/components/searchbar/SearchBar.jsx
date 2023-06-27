import styles from './searchBar.module.css';

export default function SearchBar(props) {
    return(
        <div className={styles.container}>
            <input type="text" />
            <button>Search</button>
        </div>
    )
};