import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGifs";

export const useFetchGif = (categoria) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGif(categoria)
            .then(imgs => {
                
                    setState({
                        data: imgs,
                        loading: false
                    })
               
            });
    }, [categoria])

    return state
}