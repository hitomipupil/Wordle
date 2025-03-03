import { useEffect, useState } from "react";
import Input from "./Input";
import "./InputRow.css";

// return an array of inputs.
const InputRow = ({
    inputHandler,
    rowId,
    isAppDisabled,
    currentRow,
    backgroundcolor
}) => {
    // const [isFocused, setIsFocused] = useState(false);
    const arrOfInput = [1, 2, 3, 4, 5]; // show 5 inputs

    // When the page is loaded, focus on the first input
    // useEffect(()=>{

    // }, [input])
    // const focusHandler = (id) => {
    // if(id === 1){
    //     setIsFocused(true);
    // }
    // }
    // When the user input, move the focus to the next input

    const isNotCurrentRow = rowId !== currentRow;
    const isAppDisaplbed = isAppDisabled;
    const shouldDisalbeInput = isAppDisaplbed || isNotCurrentRow;

    return (
        <div id={rowId}>
            {arrOfInput.map((num) => (
                <Input
                    inputId={`input${num}`}
                    key={num}
                    inputHandler={inputHandler}
                    isDisabled={shouldDisalbeInput}
                    backgroundcolor={backgroundcolor}
                />
            ))}
        </div>
    );
};

export default InputRow;
