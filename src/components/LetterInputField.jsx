import { useState } from "react";
import LetterInput from "./LetterInput";
import "./LetterInputField.css";

const LetterInputField = ({ numberOfLetters }) => {
    const [lettersInput, setLettersInput] = useState("");

    const inputHandler = (e) => {
        setLettersInput(e.target.value.toUpperCase());
    };

    return (
        <div className="LetterInputField">
            <LetterInput
                numberOfLEtters={numberOfLetters}
                inputHandler={inputHandler}
                value={lettersInput}
            />
        </div>
    );
};

export default LetterInputField;
