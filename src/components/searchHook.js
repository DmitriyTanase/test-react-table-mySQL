import {useState, useEffect} from 'react';

export const useSearch = (items) => {
    const [search, setSearch] = useState("");
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        updateUsersByFilter();
    }, [search, items]);

    const updateUsersByFilter = () => {
        setFilteredItems(
            items.filter(item =>
                item.Name.toLowerCase().includes(search.toLowerCase())
            ));
        console.log(filteredItems)
    };

    return {
        filteredItems,
        setSearch
    };
};