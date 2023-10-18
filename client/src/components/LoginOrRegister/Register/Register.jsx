
function Register() {
  return (
    <div>
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
  )
}

export default Register