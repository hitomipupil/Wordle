import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import InputGrid from "./components/InputGrid";
import Enter from "./components/Enter";

const App = () => {
    const [numOfLetters, setNumOfLetters] = useState(0);
    const [isAppDisabled, setIsAppDisabled] = useState(false);
    const [input, setInput] = useState([]);
    const [currentRow, setCurrentRow] = useState(1);
    const [userAnswer, setUserAnswer] = useState("");
    const [backgroundcolor, setBackgroundcolor] = useState("white");

    const answer = "power";
    const arrAnswer = answer.split("");

    const backgroundcolorHandler = () => {
        input.map((inputLetter) => {
            if (arrAnswer.includes(inputLetter)) {
                if (
                    input.indexOf(inputLetter) ===
                    arrAnswer.findIndex((str) => str === inputLetter)
                ) {
                    setBackgroundcolor("green");
                } else {
                    setBackgroundcolor("yellow");
                }
            } else {
                setBackgroundcolor("gray");
            }
        });
    };

    const inputHandler = (e) => {
        const value = e.target.value.trim();
        if (value !== "") {
            input.push(value);
            setUserAnswer(input);
        }
        console.log(input);
    };

    const clickHandler = () => {
        if (input.length === 5) {
            setCurrentRow((id) => id + 1);
            setInput([]);
            console.log("You win!");
            backgroundcolorHandler();
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
                backgroundcolor={backgroundcolor}
            />
            <Enter numOfLetters={numOfLetters} clickHandler={clickHandler} />
        </>
    );
};

export default App;
