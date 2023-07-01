import { useState } from 'react';
import styles from './form.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { createGame } from '../../redux/actions';
import validation from './Validation';


export default function Form(props) {
   const [formCreate, setFormCreate] = useState({
      name: "",
      description: "",
      platforms: [],
      image: "",
      released: "",
      rating: 0,
      genre: []
   });

   const [errors, setErrors] = useState({
      name: "",
      description: "",
      platforms: "",
      image: "",
      released: "",
      rating: 0,
      genre: ""
   });
   
//?---------HANDLERS----------------
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormCreate({
         ...formCreate,
         [name] : value,
      })

      setErrors(validation({
         ...formCreate,
         [name] : value
      }))
   };
   
   const handleClickP = (e) =>{
      const {checked,value} = e.target;
      if(checked) {
         setFormCreate({
            ...formCreate,
            platforms: [...formCreate.platforms, value] 
         });
      } else {
         setFormCreate({
            ...formCreate,
            platforms: formCreate.platforms.filter(platform => platform !== value)
         })
      }
   };

   const handleClickG = (e) =>{
      const {checked,value} = e.target;
      if(checked) {
         setFormCreate({
            ...formCreate,
            genre: [...formCreate.genre,value]
         });
      } else {
         setFormCreate({
            ...formCreate,
            genre: formCreate.genre.filter(genre => genre !== value)
         })
      }
   };

//!------ GENRES AND PLATFORMS------------  
   const platforms = ["Playstation","Xbox","Nintendo","PC","Android","IOS","Other"];
   const genres = useSelector(state => state.genres);
   const dispatch = useDispatch();


//! -------- SEND INFO ------------------
   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createGame(formCreate));
   };

   return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>

           <label>Nombre: <br /> 
           {errors.name && <p>{errors.name}</p>} 
              <input
               name="name"
               value= {formCreate.name}
               type="text"
               placeholder="ingrese un nombre..."
               onChange= {handleChange} /> 
           </label>

           <label>Descripcion: <br />
           {errors.description && <p>{errors.description}</p>}
           <textarea 
               value={formCreate.description}
               name="description"
               onChange={handleChange}>
               </textarea>
           </label>

           <label>Imagen: <br />
             <input
               name="image"
               value={formCreate.image}  
               type="url"
               placeholder="coloque una imagen..."
               onChange= {handleChange} />  
           </label>

           <label>Plataformas: <br />
            {errors.platforms && <p className={styles.platforms}>{errors.platforms}</p>}
         <div className={styles.selects}>
            {
               platforms.map((platform,index) => {
                  return <label key={index}>{platform}
                     <input
                     key={index}
                     type="checkbox" 
                     name="platforms" 
                     value={platform}
                     onClick={handleClickP} />
                  </label>
               })
            }
         </div>
          </label> 
          


           <label>Genero/s: <br />
            {errors.genre && <p className={styles.genres}>{errors.genre}</p>}
           <div className={styles.selects}>
             {
               genres.map((genre,index) => {
                  return <label key={index}>{genre.name}
                  <input
                     key={index} 
                     type="checkbox" 
                     name="genre" 
                     value={genre.name}
                     onClick={handleClickG} />
                  </label>
               })
            }
           </div>
           
           </label>

           <label>Fecha de Lanzamiento: <br />
           {errors.released && <p>{errors.released}</p>}
               <input
               name="released"
               value= {formCreate.released}  
               type="date"
               onChange={handleChange} />
           </label>

           <label>Rating: <br />
           {errors.rating && <p>{errors.rating}</p>}
               <input 
               name="rating"
               value= {formCreate.rating}
               type="number"
               min= "0"
               max= "5"
               step="0.01"
               onChange={handleChange} />
           </label>
           

           <button 
            type="submit" 
            disabled={errors.name || errors.description || errors.image || errors.platforms || errors.genre || errors.released || errors.rating}
            >GUARDAR</button>  
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
////Posibilidad de seleccionar/agregar varios géneros en simultáneo.
//// Botón para crear el nuevo videojuego.