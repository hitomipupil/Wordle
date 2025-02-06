import "./LetterInput.css";

const LetterInput = ({ inputHandler, numberOfLEtters, value }) => {
    return (
        <input
            onChange={inputHandler}
            type="text"
            className="letterInput"
            maxLength={numberOfLEtters}
            value={value}
        />
    );
};

export default LetterInput;
