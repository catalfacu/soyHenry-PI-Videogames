
function LandingPage(props) {
    return(
        <div>
            <h1>PROYECTO INDIVIDUAL <br/>HENRY!</h1>
            <h2>VIDEOGAMES</h2>
            <button onClick={props.button}>GO HOME!</button>
            <h3>Designed by: </h3>
            <h3>Facundo Cataldo</h3>
        </div>
    );
};

export default LandingPage;