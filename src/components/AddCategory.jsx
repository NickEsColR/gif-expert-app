import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories(cats => cats.includes(inputValue) ? cats : [...cats, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit} className="mt-5">
            <div className="row">
                <div className="col-md-6 offset-3">
                    <input
                        type="text"
                        placeholder="Buscar gifs"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="px-2 border rounded-3 form-control"
                    />
                </div>
                <div className="col-md-1">
                    <input
                        type="submit"
                        value="Agregar"
                        className="btn btn-primary px-4"
                    />
                </div>
            </div>
        </form>
    );
};
