import styles from './FormUsers.module.css';
import Login from './Login/Login';
import Register from './Register/Register';

function FormUsers() {

  return (
    <div className={styles.container}>
      <Login/>
      <div className={styles.image}>
        <img 
        src="https://res.cloudinary.com/dmgkhl6ys/image/upload/v1697671127/Pi/UkthDW7BN3JVF8qmF2_1_dmdskw.gif" 
        alt="gta_image" />
        <h2>No tienes una cuenta?<br />Registrate!</h2>
      </div>
    </div>
  );
}

export default FormUsers;