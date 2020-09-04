import {useState, useEffect} from 'react';

export const useSearch = (users) => {
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        updateUsersByFilter();
    }, [search, users]);

    const updateUsersByFilter = () => {
        setFilteredUsers(
            users.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            ));
    };

    return {
        filteredUsers,
        setSearch
    };
};