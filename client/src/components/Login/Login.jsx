import styles from './Login.module.css';

function Login() {

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
              Nombre
              <input type="text" />
            </label>
            <label>
              Apellido
              <input type="text" />
            </label>
            <label>
              Cumpleaños
              <input type="date" />
            </label>
            <label>
              Nombre de Usuario
              <input type= "text" />
            </label>
            <label>
              E-mail
              <input type="email" />
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