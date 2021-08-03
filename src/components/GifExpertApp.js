import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid'
const GifExpertApp = () => {

    // const categorias = ['One Punch','Samurai X','Dragon Ball'];
    const [categoria, setCategoria] = useState(['']);

    // const handleAdd =()=>{
    //     setCategoria([...categoria,'anime']);
    // }

    return (
        <>
            <h2 className="py-3 px-3 bg-dark text-light">GifExpertApp</h2>
            <div className="container">
                <AddCategory categoria={categoria}
                    setCategoria={setCategoria}
                />
                <ol>
                    {
                        categoria.map((categoria, i) =>
                            <GifGrid
                                key={i}
                                categoria={categoria} />
                        )
                    }
                </ol>
            </div>

        </>
    );
}

export default GifExpertApp;