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
        <h1>Create your videogame!</h1>
        <form className={styles.form} onSubmit={handleSubmit}>

           <label>Nombre: <br /> 
              <input
               name="name"
               value= {formCreate.name}
               type="text"
               placeholder="ingrese un nombre..."
               onChange= {handleChange} /> 
           </label> 

           <label>Imagen: <br />
             <input
               name="image"
               value={formCreate.image}  
               type="url"
               placeholder="coloque una imagen..."
               onChange= {handleChange} />  
           </label>
           

           <label>Descripcion: <br />
           <textarea 
               value={formCreate.description}
               name="description"
               onChange={handleChange}>
               </textarea>
           </label>

          <label>Plataformas: <br />
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
          </label>
               <br />
           <label>Fecha de Lanzamiento: <br />
               <input
               name="released"
               value= {formCreate.released}  
               type="date"
               onChange={handleChange} />
           </label>

           <label>Rating: <br />
               <input 
               name="rating"
               value= {formCreate.rating}
               type="number"
               min= "0"
               max= "5"
               step="0.1"
               onChange={handleChange} />
           </label>
           

           <label>Genero/s: <br />
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
           </label>
           <button type="submit" disabled={errors.length}>GUARDAR</button>  
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