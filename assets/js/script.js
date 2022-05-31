/* Importing the Multimedia class from the multimedia.js file. */
import Multimedia from './multimedia.js'

/* A IIFE (Immediately Invoked Function Expression) that returns an object with a public method that
calls a private method. */
const miEspacio = (() => {
    let funcionPrivada = (url, id) =>{
        document.getElementById(id).setAttribute("src", url);
    };
    return{
        funcionPublica: (url, id) => {
            funcionPrivada(url, id);
        }
    }
})();


/* Reproductor is a class that extends Multimedia and has a constructor that takes a url and an id*/
class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        this._id = id;
    }
    get id(){
        return this._id;
    }
    /* Calling the public function in the miEspacio object. */
    playMultimedia(){
        miEspacio.funcionPublica(this.url, this.id);
    };
    /* Setting the start time of the video. */
    setInicio(tiempo){
        document.getElementById(this.id).setAttribute('src', `${this.url}?start=${tiempo}`)
    };
};


/* Creating three new objects of the Reproductor class. */
let musica1 = new Reproductor('https://www.youtube.com/embed/mbVF-vePtpg', 'musica');
let pelicula1 = new Reproductor('https://www.youtube.com/embed/7N8wkVA4_8s', 'peliculas' );
let serie1 = new Reproductor('https://www.youtube.com/embed/IEEbUzffzrk', 'series');

/* Calling the public function in the miEspacio object. */
musica1.playMultimedia();
pelicula1.playMultimedia();
serie1.playMultimedia();

/* Setting the start time of the video to 44 seconds. */
musica1.setInicio(44);
