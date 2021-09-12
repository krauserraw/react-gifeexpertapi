// @ts-check

import React, { useState } from 'react'
import { AddCategory } from '../components/AddCategory';
import { GifGrid } from '../components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Push', 'Samura X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Push']);

    // const handleAdd = () => setCategories([...categories,'New valor']);

    // const handleAdd = () => setCategories(cats => [...cats, 'New Hunter']);

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
