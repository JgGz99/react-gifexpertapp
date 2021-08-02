import React,{useState} from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid'
 const GifExpertApp = () => {

// const categorias = ['One Punch','Samurai X','Dragon Ball'];
const [categoria, setCategoria] = useState(['Dragon Ball']);

// const handleAdd =()=>{
//     setCategoria([...categoria,'anime']);
// }

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <AddCategory categoria={categoria}
                        setCategoria ={setCategoria}
            />
            <ol>
             {
                categoria.map((categoria,i) => 
                        <GifGrid
                        key={categoria}
                        categoria={categoria}/>
                    )
             }
            </ol>
        </>
     );
}
 
export default GifExpertApp;