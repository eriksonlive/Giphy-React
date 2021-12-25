import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const apiKey = 'i2Bt2xgpxmdD6CYtIIlbL1sDRE7jVob3';

    const [categories, setcategories] = useState(['Fairy Tail']);

    /*
    const handleApp = () => {
        setcategories( [...categories, 'Hunter X Hunter'] );
    }*/

    return (
        <div className='container'>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setcategories } />
            <hr />
            <ol>
                {
                    categories.map( category => 
                        <GifGrid key={ category } category={ category } />
                    )
                }
            </ol>
        </div>
    )
}