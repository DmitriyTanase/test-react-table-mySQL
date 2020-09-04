import {useState, useEffect} from 'react';

export const usePagination = (sortedItems = [], defaultPage = 1, amountPerPage = 2) => {
    const [currentPage, setCurrentPage] = useState(defaultPage);
    const [currentItems, setCurrentItems] = useState([]);
    const [amountOfPages, setAmountOfPages] = useState(0);

    useEffect(() => {
        updateUsers();
        updateAmountOfPages();
    }, [currentPage, sortedItems]);

    const updateUsers = () => {
        const indexOfLastPost = currentPage * amountPerPage;
        const indexOfFirstPost = indexOfLastPost - amountPerPage;
        const updatedUsers = sortedItems.slice(indexOfFirstPost, indexOfLastPost);
        setCurrentItems(updatedUsers);
    };

    const updateAmountOfPages = () => {
        const updatedAmount = Math.ceil(sortedItems.length / amountPerPage);
        setAmountOfPages(updatedAmount);
    };

    return {
        setCurrentPage,
        amountOfPages,
        currentItems,
    };
};