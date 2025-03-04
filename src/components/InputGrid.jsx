import "./InputGrid.css";
import InputRow from "./InputRow";

const InputGrid = ({
    inputHandler,
    isAppDisabled,
    currentRow,
    arrAnswer,
    inputArr
}) => {
    return (
        <div id="inputGrid">
            {inputArr.map(
                (
                    innerArr,
                    idx // show 6 rows
                ) => (
                    <InputRow
                        rowIdx={idx}
                        key={idx}
                        inputHandler={inputHandler}
                        isAppDisabled={isAppDisabled}
                        currentRow={currentRow}
                        arrAnswer={arrAnswer}
                        inputRowArr={innerArr}
                    />
                )
            )}
        </div>
    );
};

export default InputGrid;
