import styles from './form.module.css';

export default function Form(props) {
   return (
    <div className={styles.container}>
        <h1>Create your videogame!</h1>
        <form className={styles.form}>

           <label>Nombre: </label>
           <input 
                type="text"
                placeholder="ingrese un nombre..." /> 

           <label>Imagen: </label>
           <input 
                type="text"
                placeholder="coloque una imagen..." />

           <label>Descripcion: </label>
           <textarea name="descripcion"></textarea>

           <label>Plataformas: </label>
             <label>Playstation<input type="checkbox" value="playstation" /></label>
             <label>Xbox<input type="checkbox" value="xbox" /></label>
             <label>Nintendo<input type="checkbox" value="nintendo" /></label>
             <label>PC<input type="checkbox" value="pc" /></label>
             <label>Mobile<input type="checkbox" value="mobile" /></label>
             <label>Otro<input type="checkbox" value="otro" /></label>

           <label>Fecha de Lanzamiento: </label>
           <input 
                type="text"
                placeholder="ingrese una fecha..." />

           <label>Rating: </label>
           <input 
                type="text"
                placeholder="ingrese un rating..." />

           <label>Genero/s: </label>
           <button>GUARDAR</button>  
        </form>
    </div>
   ) 
}; 


//// Nombre.
//// Imagen.
//// Descripción.
//// Plataformas.
//// Fecha de lanzamiento.
//// Rating.
//TODO: Posibilidad de seleccionar/agregar varios géneros en simultáneo.
//// Botón para crear el nuevo videojuego.