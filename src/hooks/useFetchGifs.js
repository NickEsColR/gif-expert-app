import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const initializeGifs = async () => {
        const gifs = await getGifs(category);
        setGifs(gifs);
        setIsLoading(false);
    };

    useEffect(() => {
        initializeGifs();
    }, []);

    return{
        gifs,
        isLoading
    }
}