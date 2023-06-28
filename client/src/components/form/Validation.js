export default function validation(input) {
    const error = {};
    const imageURLRegex = /^(http(s)?:\/\/)([^\/\s]+\/)(.*)\.(jpeg|jpg|gif|png|svg)$/i;

    if(!input.name) {
        error.name = "Debe ingresar un nombre";
    };
    if(!input.name.length > 50) {
        error.name = "El nombre debe contener hasta 50 caracteres";
    };
    if(!input.description.length < 10) {
        error.description = "La descripcion debe ser mas larga";
    };
    if(input.platforms.length === 0) {
        error.platforms = "Seleccione por lo menos una plataforma";
    };
    if(!imageURLRegex.test(input.image)) {
        error.image = "Ingrese una URL valida";
    };
    if(input.released.length === 0) {
        error.released = "Ingrese una fecha";
    };
    if(input.rating.length <= 0 || input.rating.length > 5) {
        error.rating = "Ingrese un rating valido";
    };
    if(input.genre.length === 0) {
        error.genre = "Seleccione por lo menos un genero";
    };

    return error;

};





