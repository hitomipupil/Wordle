import "./Input.css";

const Input = ({ inputHandler, isDisabled, inputId, backgroundcolor }) => {
    const handleKeyDown = (e) => {
        if (e.key === " ") {
            e.preventDefault(); // if the user input ' ', nothing happens
        }
    };

    return (
        <input
            id={inputId}
            type="text"
            maxLength="1"
            onChange={inputHandler}
            onKeyDown={handleKeyDown}
            disabled={isDisabled}
            style={{ backgroundColor: backgroundcolor }}
        />
    );
};

export default Input;
