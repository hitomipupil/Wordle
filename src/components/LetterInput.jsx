import "./LetterInput.css";

const LetterInput = ({ inputHandler, value }) => {
    return (
        <input
            onChange={inputHandler}
            type="text"
            className="letterInput"
            value={value}
        />
    );
};

export default LetterInput;
