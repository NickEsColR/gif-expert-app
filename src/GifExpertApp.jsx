import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);

    const onAddCategory = (newCategory) => {
        // setCategories([...categories, "HunterXHunter"]); //opcion 1
        //setCategories(cats => [...cats, "HunterXHunter"]); //opcion 2
        setCategories(cats => cats.includes("HunterXHunter") ? cats : [...cats, "HunterXHunter"]); //opcion 3 filtrando
    }
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                // setCategories={setCategories} //tiende a ocultar la implementacion
                onNewCategory={onAddCategory}
            />

            {/* Listado de gifs */}
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
        </>
    );
};
