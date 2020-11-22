import React from 'react'

export const GifGridItem = ({title, url}) => {  // esto {id, title, url} en lugar de props
    console.log({title, url});
    return (
        <div className="card animate__animated animate__fadeIn ">

            <img src={url}  alt={title}/>
            <p>{title}</p>
        </div>
    )
}
