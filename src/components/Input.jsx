import "./Input.css";

const Input = ({
    inputHandler,
    isDisabled,
    rowIdx,
    inputIdx,
    backgroundcolor,
    inputLetter
}) => {
    const handleKeyDown = (e) => {
        if (e.key === " ") {
            e.preventDefault(); // if the user input ' ', nothing happens
        }
    };

    return (
        <input
            id={inputIdx}
            rowIdx={rowIdx}
            type="text"
            maxLength="1"
            onChange={(event) =>
                inputHandler(rowIdx, inputIdx, event.target.value)
            }
            onKeyDown={handleKeyDown}
            disabled={isDisabled}
            // style={{ backgroundColor: backgroundcolor[inputIdx]}}
            value={inputLetter}
        />
    );
};

export default Input;
