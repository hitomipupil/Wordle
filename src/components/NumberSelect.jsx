import "./NumberSelect.css";

const NumberSelect = ({ selectHandler }) => {
    return (
        <div className="numberSelectField">
            <div className="numberSelectText">Choose word lengths</div>
            <select onChange={selectHandler}>
                <option value=""></option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
        </div>
    );
};

export default NumberSelect;
