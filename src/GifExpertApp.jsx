import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);

    const onAddCategory = (newCategory) => {
        // setCategories([...categories, "HunterXHunter"]); //opcion 1
        //setCategories(cats => [...cats, "HunterXHunter"]); //opcion 2
        setCategories((cats) =>
            cats.includes(newCategory) ? cats : [newCategory,...cats]
        ); //opcion 3 filtrando
    };
    return (
        <div className="px-4 py-5 text-center">
            <h1>GifExpertApp</h1>
            <AddCategory
                // setCategories={setCategories} //tiende a ocultar la implementacion
                onNewCategory={onAddCategory}
            />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </div>
    );
};
