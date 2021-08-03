import React,{useState} from 'react';
import PropTypes from 'prop-types'


const AddCategory = ({categoria,setCategoria}) => {


    const [anime, setAnime] = useState('');

    const leerAnime = (e)=>{
        setAnime(e.target.value)
    }

   const handleAdd=(e)=>{
        e.preventDefault();

        if(anime.trim().length>2){
            setCategoria([anime,...categoria])
            document.querySelector('form').reset();
            return;
        }

       
    }
    return ( 
        <>
            <h2>AddCategory</h2>
            <form onSubmit={handleAdd}>
                <div className="row justify-content-center">
                    <div className="col-md-5">
                    <input className="form-control" type="text" onChange={leerAnime} placeholder="Inserta tu anime aqui!!!"></input>
                
                    </div>
                </div>
            </form>
            
        </>
     );
}

AddCategory.propTypes={
    setCategoria:PropTypes.func.isRequired
}

export default AddCategory;