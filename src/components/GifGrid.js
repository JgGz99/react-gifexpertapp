import React from 'react'
import { useFetchGif } from '../Hooks/useFetchGifs'
//import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ categoria }) => {


    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGif(categoria);

    return (
        <div className ="container">
            <h3>{categoria}</h3>
            {loading ? 
                <div className="sk-cube-grid">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
            </div> : null}
            <div className="row">

                {images.map((img) => {
                    return <GifGridItem key={img.id} {...img} />
                })}

            </div>
        </div>
    )
}

export default GifGrid;