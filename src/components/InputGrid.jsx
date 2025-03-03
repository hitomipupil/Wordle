import "./InputGrid.css";
import InputRow from "./InputRow";

// show 6 rows
const InputGrid = ({
    inputHandler,
    isAppDisabled,
    currentRow,
    backgroundcolor
}) => {
    const arrOfInputRows = [1, 2, 3, 4, 5, 6];
    return (
        <div id="inputGrid">
            {arrOfInputRows.map((num) => (
                <InputRow
                    rowId={num}
                    key={num}
                    inputHandler={inputHandler}
                    isAppDisabled={isAppDisabled}
                    currentRow={currentRow}
                    backgroundcolor={backgroundcolor}
                />
            ))}
        </div>
    );
};

export default InputGrid;
