import {useState,useRef, useEffect}from 'react'
import styles from './Login.module.css';

function Login({modalVisible,setModalVisible}) {

  //const [modalVisible, setModalVisible] = useState(false);
  // const modalRef = useRef(null);

  // useEffect(() => {
  //   // Función para cerrar el modal cuando se hace clic fuera de él
  //   function handleClickOutside(event) {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       // El clic ocurrió fuera del modal, cierra el modal aquí
  //       setModalVisible(false);
  //     }
  //   }

  //   // Agrega un oyente de eventos de clic al documento cuando el modal está visible
  //   if (modalVisible) {
  //     console.log('first')
  //     document.addEventListener("click", handleClickOutside);
  //   }

  //   // Limpia el oyente de eventos cuando el componente se desmonta
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [modalVisible]);

  return (
    <div className={styles.container}>
      <div className={styles.LoginRegister}>
        <section className={styles.forms}>
          <h1>Accede a tu cuenta</h1>
          <form>
            <label>
              e-mail
              <input type="email" required />
            </label>
            <label>
              contraseña
              <input type="password" required/>
            </label>
            <button>acceder</button>
          </form>
        </section>

        <section className={styles.forms}>
          <h1>Registrate</h1>
          <form>
            <label>
              Nombre de Usuario
              <input type="text" />
            </label>
            <label>
              Edad
              <input type="number" />
            </label>
            <label>
              Contraseña
              <input type="password" />
            </label>
            <label>
              Confirme la contraseña
              <input type="password" />
            </label>
            <button>Registrate</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login