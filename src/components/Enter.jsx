import "./Enter.css";

const Enter = ({ clickHandler }) => {
    return (
        <button onClick={clickHandler} id="enterBtn">
            Enter
        </button>
    );
};

Enter.propTypes = {};

export default Enter;
