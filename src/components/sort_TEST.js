import React, {useEffect, useState} from 'react';

function Table() {
    const myArr = [
        {
            Quantity: 34,
            Distance: 12,
            Name: "Apple",
            Date: 2020
        },
        {
            Quantity: 36,
            Distance: 45,
            Name: "Orange",
            Date: 2020
        },
        {
            Quantity: 38,
            Distance: 23,
            Name: "Banana",
            Date: 2020
        },
        {
            Quantity: 39,
            Distance: 87,
            Name: "Mango",
            Date: 2020
        },
    ];

    const [sortedArr, setSortedArr] = useState(myArr);
    const [mask, setMask] = useState("");
    const [currentColumn, setCurrentColumn] = useState();
    const [currentCondition, setCurrentCondition] = useState();

    useEffect(() => {
        SortQuantity(currentCondition, currentColumn);
        SortDistance(currentCondition, currentColumn)

    }, [currentCondition, currentColumn, mask]);

    function SortQuantity (currentCondition, currentColumn) {
        if (currentColumn === "Quantity" && currentCondition === "less") {
            console.log(mask);
            setSortedArr(
                myArr.filter(item => item.Quantity < mask)
            )
        } else if (currentColumn === "Quantity" && currentCondition === "greater") {
            console.log(mask);
            setSortedArr(
                myArr.filter(item => item.Quantity > mask)
            )
        } else if (currentColumn === "Quantity" && currentCondition === "equal") {
            console.log(mask);
            setSortedArr(
                myArr.filter(item => item.Quantity.toString() === mask)
            )
        }
    }

    function SortDistance (currentCondition, currentColumn) {
        if (currentColumn === "Distance" && currentCondition === "less") {
            console.log(mask);
            setSortedArr(
                myArr.filter(item => item.Distance < mask)
            )
        } else if (currentColumn === "Distance" && currentCondition === "greater") {
            console.log(mask);
            setSortedArr(
                myArr.filter(item => item.Distance > mask)
            )
        } else if (currentColumn === "Distance" && currentCondition === "equal") {
            console.log(mask);
            setSortedArr(
                myArr.filter(item => item.Distance.toString() === mask)
            )
        }
    }


    // useEffect(() => {
    //     SortAge(currentCondition, currentColumn)
    // }, [currentCondition, currentColumn, mask]);
    //
    // function SortAge(currentCondition, currentColumn) {
    //     if (currentColumn === "age" && currentCondition === "less") {
    //         setSortedArr(
    //             users.sort((a, b) => {
    //                 console.log(a.age);
    //                 return parseFloat(a.age) - parseFloat(b.age)
    //             })
    //         )
    //     } else if (currentColumn === "age" && currentCondition === "greater") {
    //         setSortedArr(
    //             users.sort((a, b) => {
    //                 console.log(a.age);
    //                 return parseFloat(b.age) - parseFloat(a.age)
    //             })
    //         )
    //     } else if (currentColumn === "age" && currentCondition === "equal") {
    //         console.log(mask);
    //         setSortedArr(
    //             users.filter(item => item.age.toString() === mask)
    //         )
    //     }
    // }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <input type="text" onChange={e => setMask(e.target.value)}/>
                </div>
                <div className="col">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Выбор колонки
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <span
                        className="dropdown-item"
                        onClick={() => {
                            setCurrentColumn("Quantity");
                            console.log(currentColumn, currentCondition)
                        }}
                    >
                        Quantity
                    </span>
                            <span
                                className="dropdown-item"
                                onClick={() => {
                                    setCurrentColumn("Distance");
                                    console.log(currentColumn, currentCondition)
                                }}
                            >
                        Distance
                    </span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Выбор условия
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <span
                        className="dropdown-item"
                        onClick={() => {
                            setCurrentCondition("greater");
                            console.log(currentColumn, currentCondition)
                        }}
                    >
                        Больше
                    </span>
                            <span
                                className="dropdown-item"
                                onClick={() => {
                                    setCurrentCondition("less");
                                    console.log(currentColumn, currentCondition)
                                }}
                            >
                        Меньше
                    </span>
                            <span
                                className="dropdown-item"
                                onClick={() => {
                                    setCurrentCondition("equal");
                                    console.log(currentColumn, currentCondition)
                                }}
                            >
                        Равно
                    </span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <input type="text" onChange={e => setMask(e.target.value)}/>
                </div>
            </div>

            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Quantity</th>
                    <th>Distance</th>
                </tr>
                </thead>
                <tbody>
                {sortedArr.map((value, index) => (
                    <tr key={index}>
                        <th scope="row">
                            {index + 1}
                        </th>
                        <td>{value.Quantity}</td>
                        <td>{value.Distance}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;