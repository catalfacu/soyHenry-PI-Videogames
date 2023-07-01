
import styles from './landingPage.module.css';

function LandingPage(props) {
    return(
        <div className={styles.container}>
            <div className={styles.textPresentation}>
           <img src="https://fontmeme.com/permalink/230701/4c15be69eeb4dd1df9eaead2c7758433.png" alt="fuente-grand-theft-auto" border="0"/>
            </div>
            <div className={styles.button}>
             <button className={styles.landingButton} onClick={props.button}>START!</button>
            </div>
            <div className={styles.aboutMe}>
            <img src="https://fontmeme.com/permalink/230701/bc677451588e40819330a9718ea3f3b5.png" alt="fuente-grand-theft-auto" border="0"/>
            </div>
        </div>
    );
};

export default LandingPage;