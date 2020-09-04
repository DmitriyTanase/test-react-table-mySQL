import React from "react";

const Sort = ({setMask, setCurrentColumn, setCurrentCondition}) => {

    const handleSetCurrentColumn = string => {
        setCurrentColumn(string)
    };
    const handleSetCurrentCondition = string => {
        setCurrentCondition(string)
    };
    const handleSetMask = string => {
        setMask(string)
    };

    return (
        <div className="container">
            <div className="row no-gutters justify-content-around align-items-center">
                <div className="col-sm-2">
                    <div className="dropdown">
                        <button className="btn bg-dark text-light dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Выбор колонки
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <span
                        className="dropdown-item"
                        onClick={() => handleSetCurrentColumn("Quantity")}
                    >
                        Quantity
                    </span>
                            <span
                                className="dropdown-item"
                                onClick={() => handleSetCurrentColumn("Distance")}
                            >
                        Distance
                    </span>
                            <span
                                className="dropdown-item"
                                onClick={() => handleSetCurrentColumn("Name")}
                            >
                        Name
                    </span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="dropdown">
                        <button className="btn bg-dark text-light dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Выбор условия
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <span
                        className="dropdown-item"
                        onClick={() => handleSetCurrentCondition("greater")}
                    >
                        Больше
                    </span>
                            <span
                                className="dropdown-item"
                                onClick={() => handleSetCurrentCondition("less")}
                            >
                        Меньше
                    </span>
                            <span
                                className="dropdown-item"
                                onClick={() => handleSetCurrentCondition("equal")}
                            >
                        Равно
                    </span>
                            <span
                                className="dropdown-item"
                                onClick={() => handleSetCurrentCondition("contains")}
                            >
                        Содержит
                    </span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <input
                        type="text"
                        onChange={e => handleSetMask(e.target.value)}
                        placeholder="Маска фильтра"
                    />
                </div>
            </div>
        </div>
    )
};

export default Sort;