import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    const {gifs,  isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && <p>Loading...</p>}
            <div className="card-grid">
                {gifs.map(({ id, title, url }) => (
                    <GifItem key={id} title={title} url={url} />
                ))}
            </div>
        </>
    );
};
