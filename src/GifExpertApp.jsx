import { useState } from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}

            {/* Listado de gifs */}
            <ol>
                {
                    categories.map(category => (
                        <li key={category}>{category}</li>
                    ))
                }
            </ol>
                {/* GifItem */}
        </>
    );
};
