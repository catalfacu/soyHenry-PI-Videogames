
import { useState } from 'react';
import styles from './landingPage.module.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function LandingPage(props) {
    const navigate = useNavigate();
    const [loginOK, setLoginOK] = useState(false);

function goHome() {
    Swal.fire({
        title: 'Quieres ingresar a tu cuenta?',
        imageUrl: "https://res.cloudinary.com/dmgkhl6ys/image/upload/v1696021257/Pi/rIgiQBm4Af9qP69eXA_zily18.gif",
        imageHeight: 400,
        imageWidth:400,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Ok',
        denyButtonText: `No gracias`,
        background: '#F079C5',
        color: 'whitesmoke',
        backdrop: `rgba(0,0,123,0.4)`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        setLoginOK(true);
        console.log(loginOK);
        } else if (result.isDenied) {
        navigate('/home')
        }
      })

};
    return(
        <div className={styles.container}>
            <div className={styles.textPresentation}>
           <img src="https://fontmeme.com/permalink/230701/4c15be69eeb4dd1df9eaead2c7758433.png" alt="fuente-grand-theft-auto" border="0"/>
            </div>
            <div className={styles.button}>
             <button className={styles.landingButton} onClick={goHome}>START!</button>
            </div>
            
            <div className={styles.aboutMe}>
            <img src="https://fontmeme.com/permalink/230701/bc677451588e40819330a9718ea3f3b5.png" alt="fuente-grand-theft-auto" border="0"/>
            </div>
            <div className={styles.socialNetworks}>
                <a href="https://www.instagram.com/facucata23/?hl=es-la" target='blank'>IG</a>
                <a href="https://github.com/catalfacu" target='blank'>Github</a>
                <a href="https://www.linkedin.com/in/facundo-cataldo-9a0031272/" target='blank'>Linkedln</a>
            </div>
        </div>
    );
};

export default LandingPage;