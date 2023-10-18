
function Login() {
  return (
    <div>
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
        </div>
    </div>
  )
}

export default Login