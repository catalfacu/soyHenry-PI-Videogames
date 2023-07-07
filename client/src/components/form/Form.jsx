import { useEffect, useState } from 'react';
import styles from './form.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { createGame, getAllGames } from '../../redux/actions';
import {useNavigate} from 'react-router-dom';
import validation from './Validation';


export default function Form(props) {
   const [loading, setLoading] = useState(false);
   const [allOk, setAllOK] = useState(false);
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
      rating: "",
      genre: ""
   });

//!------ GENRES,ERRORS AND PLATFORMS------------  
      const platforms = ["Playstation","Xbox","Nintendo","PC","Android","IOS","Other"];
      const error = useSelector(state => state.errors);
      const genres = useSelector(state => state.genres);
      const dispatch = useDispatch();
      const navigate = useNavigate();
   
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

//! -------- SEND INFO ------------------
   const handleSubmit = (e) => {
      if(Object.keys(errors).length === 0) {
      e.preventDefault();
      setLoading(true);
       dispatch(createGame(formCreate));

       setFormCreate({
         name: "",
         description: "",
         platforms: [],
         image: "",
         released: "",
         rating: 0,
         genre: []
       });
       setAllOK(true);
      } else {
         return window.alert(error);
      }
   };

   useEffect(()=>{
      setTimeout(setLoading(false),5000)
   },[allOk]);


   const backToHome = () => {
      dispatch(getAllGames);
      navigate('/home');
   };

   return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>

         <div className={styles.option}>
            <label>Nombre: <br /> 
              <input
               name="name"
               value= {formCreate.name}
               type="text"
               placeholder="ingrese un nombre..."
               onChange= {handleChange} /> 
           </label> 
            {errors.name && <p>{errors.name}</p>} 
         </div>
          
         <div className={styles.option}>
           <label>Imagen: <br />
             <input
               name="image"
               value={formCreate.image}  
               type="url"
               placeholder="coloque una imagen..."
               onChange= {handleChange} />  
           </label>
           {errors.image && <p>{errors.image}</p>}
         </div>
           
         <div className={styles.option}>
           <label>Fecha de Lanzamiento: <br />
               <input
               name="released"
               value= {formCreate.released}  
               type="date"
               onChange={handleChange} />
           </label> 
            {errors.released && <p>{errors.released}</p>}
         </div>

         <div className={styles.option}>
            <label>Rating: <br />
               <input 
               name="rating"
               value= {formCreate.rating}
               type="number"
               min= "0"
               max= "5"
               step="0.01"
               onChange={handleChange} />
           </label>
            {errors.rating && <p>{errors.rating}</p>}
         </div>

         <div className={styles.checkbox}>
             <label>Plataformas: <br />
            {errors.platforms && <p>{errors.platforms}</p>}
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
         </div>
           
          
         <div className={styles.checkbox}>
           <label>Genero/s: <br />
            {errors.genre && <p>{errors.genre}</p>}
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
         </div>
             
           
         <div className={styles.option}>
            <label>Descripcion: <br />
           <textarea 
               value={formCreate.description}
               name="description"
               onChange={handleChange}>
               </textarea>
           </label>
            {errors.description && <p>{errors.description}</p>}
         </div>

         <button disabled={Object.keys(errors).length >= 1}>
            {loading ? <>Guardando...</> : allOk ? <>Guardado!</> : <>Guardar</>}
         </button>  
        </form>
        {allOk && <h1 className={styles.gameSaved}>¡JUEGO CREADO CORRECTAMENTE!</h1>}
        {allOk && <button onClick={()=> backToHome()} className={styles.backToHome}>Back to Home</button>}
        
    </div>
   ) 
}; 
