import { useState } from "react";
import LetterInput from "./LetterInput";
import "./LetterInputField.css";

const LetterInputField = ({ numberOfLetters }) => {
    const [input, setInput] = useState("");

    const inputHandler = (e) => {
        setInput(e.target.value.toUpperCase());
    };

    const inputArr = Array.from({ length: numberOfLetters }, (v, i) => i);

    return (
        <div className="LetterInputField">
            {inputArr.map((num, i) => (
                <LetterInput key={i} inputHandler={inputHandler} />
            ))}
        </div>
    );
};

export default LetterInputField;
