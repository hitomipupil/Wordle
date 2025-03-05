import { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import InputGrid from "./components/InputGrid";
import Enter from "./components/Enter";

const countryArr = [
    "CHILE",
    "CHINA",
    "INDIA",
    "ITALY",
    "JAPAN",
    "QATAR",
    "SUDAN",
    "YEMEN",
    "EGYPT",
    "GABON",
    "GHANA",
    "KENYA",
    "LIBYA",
    "NIGER",
    "SAMOA",
    "SPAIN",
    "SYRIA",
    "TONGA",
    "BENIN",
    "MALTA",
    "HAITI"
];

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
    const [answer, setAnswer] = useState("");

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    useEffect(() => {
        const newAnswer =
            countryArr[getRandomInt(countryArr.length)].toUpperCase();
        setAnswer(newAnswer);
    }, []);

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
                        return inputLetter.toUpperCase(); // switch the value to the input
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
        const input = inputArr[currentRow].join("").toUpperCase();
        console.log(answer, input);

        if (input.length < 5) {
            console.log("Not enough letters");
            return;
        }
        if (currentRow === 5) {
            setIsAppDisabled(true);
            window.alert("game over");
            return;
        }

        if (answer === input) {
            setIsAppDisabled(true);
            window.alert("You Win!");
        } else if (!countryArr.includes(input)) {
            window.alert("Not in the country list");
            return;
        } else {
            setCurrentRow((prevRow) => prevRow + 1);
        }
    };

    return (
        <>
            <Title title={"Guess Country Name"} />
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
