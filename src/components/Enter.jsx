import "./Enter.css";

const Enter = ({ clickHandler }) => {
    return (
        <button onClick={clickHandler} id="enterBtn">
            Guess!
        </button>
    );
};

Enter.propTypes = {};

export default Enter;
