import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("");

    const onSubmit = (e) => { 
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        
        // setCategories(cats => cats.includes(inputValue) ? cats : [...cats, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <input type="submit" value="Agregar" />
        </form>
    );
};
