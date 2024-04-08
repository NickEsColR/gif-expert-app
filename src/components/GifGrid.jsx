import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const {gifs,  isLoading} = useFetchGifs(category);



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
