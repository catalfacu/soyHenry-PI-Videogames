import { useState } from 'react';
import styles from './FormUsers.module.css';
import Login from './Login/Login';
import Register from './Register/Register';

function FormUsers({formsVisibility, handleFormsVisibility}) {
const [changeForm, setChangeForm] = useState(false);

const handleChangeFormTrue = () => {
    setChangeForm(true);
};
const handleChangeFormFalse = () => {
    setChangeForm(false);
};

const handlerOpenCloseForms = () => {
  handleFormsVisibility();
};
  return (
    <div className={formsVisibility ? styles.container : styles.disabled}>
      {
        changeForm 
        ? <Register/>
        : <Login/>
      }

      {
        changeForm
        ? <div className={styles.image}>
        <h2>tienes una cuenta?<br />Logueate!</h2>
        <a onClick={handleChangeFormFalse}>
          <img 
        src="https://res.cloudinary.com/dmgkhl6ys/image/upload/v1697671125/Pi/NcjUqfjygaljY9uXQG_s2s4mt.gif" 
        alt="gta_image" />
        </a>
        
      </div>
        : <div className={styles.image}>
        <h2>No tienes una cuenta?<br />Registrate!</h2>
        <a onClick={handleChangeFormTrue}>
          <img 
        src="https://res.cloudinary.com/dmgkhl6ys/image/upload/v1697671127/Pi/UkthDW7BN3JVF8qmF2_1_dmdskw.gif" 
        alt="gta_image" />
        </a>
        
      </div>
      }
      <button onClick={handlerOpenCloseForms}>X</button>
    </div>
  );
}

export default FormUsers;