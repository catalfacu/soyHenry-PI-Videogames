
export default function({genres,handleFilterOrigin,handleFilterGenre,handleOrderByAbc,handleOrderByRating}) {
    return(
        <div>
          <label>Filtrar por origen:  
        <select name="filtarPorOrigen" onChange={(e)=> handleFilterOrigin(e)}>
          <option value="D">Default</option>
          <option value="A">API</option>
          <option value="DB">Base de datos</option>
         </select>
        </label>

        <label> Filtrar por genero: 
            <select name="filtrarPorGenero" onChange={(e)=> handleFilterGenre(e)}>
                <option value="D">Default</option>
                {
                  genres.map((genre,id) => {
                    return <option key={id} value={genre.name}>{genre.name}</option>
                  })
                }
            </select>
        </label>
        
        <label>Ordenar alfabeticamente:  
            <select name="ordenar por ABC" onChange={(e)=>handleOrderByAbc(e)}>
          <option value="D">Default</option>
          <option value="AA">Ascendente ABC</option>
          <option value="DA">Descendente ABC</option>
            </select>
        </label> 

        <label>Ordenar por Rating:
          <select name="ordenar por rating" onChange={(e) => handleOrderByRating(e)}>
          <option value="D">Default</option>
          <option value="AR">Ascendente rating</option>
          <option value="DR">Descendente rating</option>
          </select>
          </label>  
        </div>
    )
};