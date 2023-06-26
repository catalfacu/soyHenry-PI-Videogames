function Cards(props) {
    return (
        <div>
            <h1>HOME</h1>
            <label>Filtrar por: </label>
            <select name="Filtar">
                <option value="G">Genero</option>
                <option value="A">API</option>
                <option value="DB">Base de datos</option>
            </select>
            <label>Ordenar por: </label>
            <select name="Ordenar">
                <option value="AA">Ascendente ABC</option>
                <option value="DA">Descendente ABC</option>
                <option value="AR">Ascendente rating</option>
                <option value="DR">Descendente rating</option>
            </select>
        </div>
    );
};

export default Cards;

//TODO: 2 select:
//TODO: 1er select: FILTRAR
//              a_ filtrar por genero
//              b_ origen de la api
//              c_ origen de la Db

//TODO: 2do select: ORDENAMIENTO
//              a_ascendente por orden alfabetico
//              a_1_descendente por orden alfabetico

//              b_ascendente por rating
//              b_1_descendente por rating

