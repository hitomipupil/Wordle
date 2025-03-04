import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import InputGrid from "./components/InputGrid";
import Enter from "./components/Enter";

const App = () => {
    const [isAppDisabled, setIsAppDisabled] = useState(false);
    const [inputArr, setInputArr] = useState([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
    ]);
    const [currentRow, setCurrentRow] = useState(0);

    const answer = "power";
    const arrAnswer = answer.split("");

    // find the right row and column in the state and replace the value to the input letter
    const inputHandler = (rowIdx, colIdx, inputLetter) => {
        const newArr = inputArr.map((innerArr, idx) => {
            // iterate 6 input rows
            if (idx === rowIdx) {
                // if the row matches
                const newRowArr = innerArr.map((elem, idx) => {
                    // iterate input columns
                    if (idx === colIdx) {
                        // if the column matches
                        return inputLetter; // switch the value to the input
                    } else {
                        return elem; // if not, don't change the value
                    }
                });
                return newRowArr;
            } else {
                return innerArr;
            }
        });
        setInputArr(newArr);
    };

    const clickHandler = () => {
        if (inputArr[currentRow].join("").length === 5) {
            if (currentRow === 5) {
                setIsAppDisabled(true);
                console.log("game over");
            } else {
                setCurrentRow((prevRow) => prevRow + 1);
            }
        } else {
            console.log("Not enough letters");
        }
    };

    return (
        <>
            <Title title={"Wordle"} />
            <InputGrid
                inputHandler={inputHandler}
                isAppDisabled={isAppDisabled}
                currentRow={currentRow}
                arrAnswer={arrAnswer}
                inputArr={inputArr}
            />
            <Enter clickHandler={clickHandler} />
        </>
    );
};

export default App;
