import { useEffect, useState } from "react"

import getGif from '../helpers/getGif'


const useFetchGifs = category => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

     //HOOK que me permite renderizar solo la primera vez un cierto componente o funcion.
    useEffect(() => {
            //getGif devuelve una promesa que devuelve un objeto, por lo cual debo hacer un .then
            getGif(category)
            .then( img => 
                setState(
                {
                data: img,
                loading: false,
                }
              ))
              
    }, [category])


    return state;

}


export default useFetchGifs
