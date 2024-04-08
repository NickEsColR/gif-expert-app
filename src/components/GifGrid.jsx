import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    const [gifs, setGifs] = useState([]);

    const initializeGifs = async () => {
        const gifs = await getGifs(category);
        setGifs(gifs);
    };

    useEffect(() => {
        initializeGifs();
    }, []);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {gifs.map(({ id, title, url }) => (
                    <GifItem key={id} title={title} url={url} />
                ))}
            </div>
        </>
    );
};
