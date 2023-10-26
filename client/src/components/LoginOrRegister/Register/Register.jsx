import styles from './Register.module.css';


function Register() {
  return (
    <div className={styles.container}>
       <div className={styles.text}>
        <h1>Registrate</h1>
       </div>
       <div className={styles.form}>
        <form>
          <label>
            Nombre
            <input type="text" />
          </label>
          <label>
            Apellido
            <input type="text" />
          </label>
          <label>
            Nombre de Usuario
            <input type="text" />
          </label>
          <label>
            Fecha de Nacimiento
            <input type="date" />
          </label>
          <label>
            Email
            <input type="text" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
          <label>
            Confirme Password
            <input type="password" />
          </label>
          <button>Registrate</button>
        </form>
       </div>
    </div>
  )
}

export default Register