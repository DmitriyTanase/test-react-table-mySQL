import React, {useEffect, useState} from 'react';
import {usePagination} from "./components/paginationHook";
import Pagination from "./components/paginationComponent";
import {useSort} from "./components/sortHook";
import Sort from "./components/sortComponents";
import Table from "./components/sort_TEST";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const {setMask, setCurrentColumn, setCurrentCondition, sortedItems} = useSort(items);
    const {setCurrentPage, currentItems, amountOfPages} = usePagination(sortedItems);

    useEffect(() => {
        const getData = () => {
            fetch('http://localhost:4000/items')
                .then(response => response.json())
                .then(json => {
                    setItems(json);
                    setIsLoaded(true);
                    console.log(json, "isLoaded:" + isLoaded);
                })
        };
        getData();

    }, []);

    return (
        <div>
            <div className="jumbotron" id="notification">
                <h1>Table with search, sort and pagination</h1>
            </div>
            <div className="container">
                <div className="row justify-content-start align-items-center" id="placingSort">
                    <div className="col-sm-auto">
                        <Sort
                            setMask={setMask}
                            setCurrentColumn={setCurrentColumn}
                            setCurrentCondition={setCurrentCondition}
                        />
                    </div>
                    <div className="col-sm-6"/>
                </div>
                { isLoaded ? (
                    <div className="table-responsive-sm" id="placingTable">
                        <table className="table table-striped table-hover">
                            <thead className="thead-dark">
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Distance</th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentItems.map((value, index) => (
                                <tr key={index}>
                                    <th scope="row">
                                        {value.Date}
                                    </th>
                                    <td>{value.Name}</td>
                                    <td>{value.Quantity}</td>
                                    <td>{value.Distance}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h2>Загрузка...</h2>
                )}
                <Pagination amountOfPages={amountOfPages} setCurrentPage={setCurrentPage}/>
            </div>
            {/*<Table/>*/}
        </div>
    );
}

export default App;
