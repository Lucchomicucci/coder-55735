import { useState } from "react";

const InputVocales = () => {

        
    const [inputValue, setInputValue] = useState('');
    
    const handleKeyDown = (event) => {
        const key = event.key.toLowerCase();
        const vocales = ['a', 'e', 'i', 'o', 'u'];
        
        if (vocales.includes(key)) {
            event.preventDefault(); // Cancela el evento si se presiona una vocal
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="App">
        <header className="App-header">
        <h1>Input sin vocales</h1>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Ingresa texto sin vocales"
            />
        </header>
    </div>
    );
}

export default InputVocales