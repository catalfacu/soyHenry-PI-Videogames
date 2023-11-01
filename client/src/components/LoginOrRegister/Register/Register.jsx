import styles from './Register.module.css';
import {useForm} from 'react-hook-form';

function Register() {

const {register,handleSubmit, formState: {errors}, watch } = useForm();
console.log(errors); 
const onSubmit= handleSubmit((data)=> { 
  console.log(data);
})

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Registrate</h1>
      </div>
      <div className={styles.form}>
        <form onSubmit={onSubmit}>
          <div className={styles.containerForm}>

            <section className={styles.personalInformation}>
            <label>Nombre</label>
            <input 
            type="text"
            { ...register("name", {
              required: {
                value: true,
                message: "Nombre es requerido"
              },
              minLength: {
                value: 2,
                message: "El nombre debe tener mas de 2 caracteres"
              },
              maxLength: {
                value: 20,
                message: "El nombre no puede tener mas de 20 caracteres"
              }
            })}
            />
            {
              errors.name && <span>{errors.name.message}</span>
            }

            <label>Apellido</label>
            <input 
            type="text"
            { ...register("lastname",{
              required: {
                value: true,
                message: "Apellido es requerido"
              },
              minLength: {
                value: 2,
                message: "El apellido debe tener mas de 2 caracteres"
              },
              maxLength: {
                value: 20,
                message: "El apellido no puede tener mas de 20 caracteres"
              }
            })}
            />
            {
              errors.lastname && <span>{errors.lastname.message}</span>
            }

            <label>Nombre de Usuario</label>
            <input 
            type="text" 
            { ...register("nickname",{
              required: {
                value: true,
                message: "Nombre de usuario es requerido"
              },
              minLength: {
                value: 2,
                message: "El nombre de usuario debe tener mas de 2 caracteres"
              },
              maxLength: {
                value: 20,
                message: "El nombre de usuario no puede tener mas de 20 caracteres"
              }
            })}
            />
            {
              errors.nickname && <span>{errors.nickname.message}</span>
            }

            <label>Fecha de Nacimiento</label>
            <input 
            type="date" 
            { ...register("birthday",{
              required: {
                value: true,
                message: "La fecha de nacimiento es requerida"
              }
            })}
            />
            {
              errors.birthday && <span>{errors.birthday.message}</span>
            }
          </section>

          <section className={styles.RegisterInformation}>
            <label>Email</label>
            <input 
            type="text" 
            { ...register("email",{
              required: {
                value: true,
                message: "El email es requerido"
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,4}$/,
                message: "Email no valido"
              }
            })}
            />
            {
              errors.email && <span>{errors.email.message}</span>
            }

            <label>Password</label>
            <input 
            type="password"
            { ...register("password", {
              required: {
                value: true,
                message: "El password es requerido"
              },
              minLength: {
                value: 8,
                message: "El password debe tener 8 caracteres minimo"
              }
            })}
             />
             {
              errors.password && <span>{errors.password.message}</span>
             }
             
            <label>Confirme Password</label>
            <input 
            type="password"
            { ...register("confirmarPassword", {
              required: {
                value: true,
                message: "Confirmar password es requerido"
              },
              validate: value => value === watch('password') || 'Los passwords no coinciden' 
            })}
            />
            {
              errors.confirmarPassword && <span>{errors.confirmarPassword.message}</span>
            }
          </section>
          
          </div>
          
          <button type='submit'>Registrate</button>
        </form>
      </div>
    </div>
  );
}

export default Register