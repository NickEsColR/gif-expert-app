import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

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
            {gifs.map(({ id, title, url }) => (
                <div key={id} className="card">
                    <img src={url} alt={title} />
                    <p>{title}</p>
                </div>
            ))}
        </>
    );
};
