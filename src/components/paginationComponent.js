import React, {useState, useEffect, useMemo} from "react";

const Pagination = ({amountOfPages, setCurrentPage}) => {
    const [pageNumbers, setPageNumbers] = useState([]);

    // useEffect(() => {
    //     calculatePageNumbers();
    // }, [amountOfPages]);
    //
    // function calculatePageNumbers() {
    //     const updatedPageNumbers = [];
    //     for (let i = 1; i <= amountOfPages; i++) {
    //         updatedPageNumbers.push(i);
    //     }
    //     setPageNumbers(updatedPageNumbers);
    // }

    const paginationItems = useMemo(() => {
        const updatedPageNumbers = [];

        for (let i = 1; i <= amountOfPages; i++) {
            updatedPageNumbers.push(i);
        }
        setPageNumbers(updatedPageNumbers);
    }, [amountOfPages]);

    const handleSetCurrentPage = number => {setCurrentPage(number)};

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button
                            onClick={() => handleSetCurrentPage(number)}
                            type="button"
                            className="page-link"
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;