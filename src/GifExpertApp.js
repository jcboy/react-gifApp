import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['friends']);
    
    //const handleAdd = () => {
    //    //setCategories(['Man1', ...categories]);
    //    setCategories(cats => ['Huljk', ...cats]);
    // }

    return (
        <div className='container'>
            <h2>GifApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ul>
                {
                    categories.map( category  => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ul>
            
        </div>
    )
}
