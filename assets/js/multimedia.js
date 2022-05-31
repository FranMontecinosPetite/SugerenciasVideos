/* The class Multimedia has a constructor that takes a url as a parameter and sets it as a private
property. It also has a getter for the url property */
export default class Multimedia {
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
        };
    get url(){
        return this.getUrl();
    };
    /* A method that returns a string. */
    setInicio(){
        return ('Este método es para realizar un cambio en la URL del video');
    };
}
