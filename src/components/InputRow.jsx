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
    const [backgroundcolor, setBackgroundcolor] = useState([]);

    const isNotCurrentRow = rowIdx !== currentRow;
    const isAppDisaplbed = isAppDisabled;
    const shouldDisalbeInput = isAppDisaplbed || isNotCurrentRow;

    // const backgroundcolorHandler = () => {
    //     input.map((inputLetter) => {
    //         // when the letter is included in the answer,
    //         if (arrAnswer.includes(inputLetter)) {
    //             if ( // if the positions are the same,
    //                 input.indexOf(inputLetter) ===
    //                 arrAnswer.findIndex((str) => str === inputLetter)
    //             ) {
    //                 backgroundcolor.push("green")
    //             } else { // when the position is different
    //                 backgroundcolor.push("yellow");
    //             }
    //         } else { // when the letter is not included in the answer
    //             backgroundcolor.push("gray");
    //         }
    //     });
    // };

    return (
        <div id={rowIdx}>
            {inputRowArr.map(
                (
                    inputLetter,
                    idx // show 3 (= length of inputRowArr) inputs
                ) => (
                    <Input
                        rowIdx={rowIdx}
                        inputIdx={idx}
                        key={idx}
                        inputHandler={inputHandler}
                        isDisabled={shouldDisalbeInput}
                        backgroundcolor={backgroundcolor}
                        inputLetter={inputLetter}
                    />
                )
            )}
        </div>
    );
};

export default InputRow;
