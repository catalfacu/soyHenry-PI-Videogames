import styles from './Register.module.css';


function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Registrate</h1>
      </div>
      <div className={styles.form}>
        <form>
          <div className={styles.containerForm}>

            <section className={styles.personalInformation}>
            <label>Nombre</label>
            <input type="text" />
            <label>Apellido</label>
            <input type="text" />
            <label>Nombre de Usuario</label>
            <input type="text" />
            <label>Fecha de Nacimiento</label>
            <input type="date" />
          </section>

          <section className={styles.RegisterInformation}>
            <label>Email</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <label>Confirme Password</label>
            <input type="password" />
          </section>
          
          </div>
          
          <button>Registrate</button>
        </form>
      </div>
    </div>
  );
}

export default Register