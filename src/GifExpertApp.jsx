import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);

    const onAddCategory = () => {
        // setCategories([...categories, "HunterXHunter"]); //opcion 1
        //setCategories(cats => [...cats, "HunterXHunter"]); //opcion 2
        setCategories(cats => cats.includes("HunterXHunter") ? cats : [...cats, "HunterXHunter"]); //opcion 3 filtrando
    }
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory/>
            <button onClick={onAddCategory}>Agregar</button>

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
