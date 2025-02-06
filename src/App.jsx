import { useCallback, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import LetterInputField from "./components/LetterInputField";
import NumberSelect from "./components/NumberSelect";

const App = () => {
    const [numOfLetters, setNumOfLetters] = useState(0);

    const selectHandler = useCallback(
        (event) => {
            setNumOfLetters(event.target.value);
        },
        [numOfLetters]
    );

    return (
        <>
            <Title title={"Wordle"} />
            <NumberSelect selectHandler={selectHandler} />
            <LetterInputField numberOfLetters={numOfLetters} />
        </>
    );
};

export default App;
