import React from 'react';
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifGridItem} from "./GifGridItem";

export const GifGrid = ({category}) => {
    //const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category); // :images change the name of data
    /*console.log(images); console.log(loading);*/

    return (
        <div>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>loading</p> } {/*loading ? 'Cargando' : 'Data cargada'*/}

            <div className="card-grid">
                {images.map(  img  => (       // widthout destructuring = (img);
                    // {...img} esto envia cada una de la propiedades de manera indendiente
                    <GifGridItem key={ img.id } { ...img } /> //<GifGridItem key={img.id} img={img} />
                    )
                )}

                {/*
                <ul>
                    {images.map( ({id, title}) => (       // widthout destructuring = (img);
                         <li key={id }> {title} </li>
                        )
                    )}
                </ul>
                */}
            </div>
        </div>
    )
}
