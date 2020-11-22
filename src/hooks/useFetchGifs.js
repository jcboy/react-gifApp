import { useState, useEffect } from 'react'
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {  // esto se lanza solo cuando se cambia la categoria

        getGifs(category)
            .then( (imgs) => {

                // setTimeout(()=>{

                    setState({data: imgs, loading: false});

                // }, 3000)

            } )
        // getGifs(category).then(setImages); // es igual à imgs => setImages(imgs)
    }, [category] )

    /*setTimeout( () => {setState({ data: ['bla', 'ble', 'bli'], loading: false})}, 3000)*/

    return state; // { data:[], loading: true };

}


