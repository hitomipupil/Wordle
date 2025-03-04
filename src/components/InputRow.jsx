import { useEffect, useState } from "react";
import Input from "./Input";
import "./InputRow.css";

// return an array of inputs.
const InputRow = ({
    inputHandler,
    rowIdx,
    isAppDisabled,
    currentRow,
    arrAnswer,
    inputRowArr
}) => {
    const isNotCurrentRow = rowIdx !== currentRow;
    const isAppDisaplbed = isAppDisabled;
    const shouldDisalbeInput = isAppDisaplbed || isNotCurrentRow;

    const shouldColorInput = isAppDisabled || rowIdx < currentRow;

    const color = (inputLetter, idx) => {
        if (shouldColorInput) {
            if (inputLetter === arrAnswer[idx]) {
                return "green";
            } else if (arrAnswer.includes(inputLetter)) {
                return "yellow";
            } else {
                return "#BBB";
            }
        }
    };

    return (
        <div id={rowIdx}>
            {inputRowArr.map((inputLetter, idx) => (
                <Input
                    rowIdx={rowIdx}
                    inputIdx={idx}
                    key={idx}
                    inputHandler={inputHandler}
                    isDisabled={shouldDisalbeInput}
                    backgroundcolor={color(inputLetter, idx)}
                    inputLetter={inputLetter}
                />
            ))}
        </div>
    );
};

export default InputRow;
