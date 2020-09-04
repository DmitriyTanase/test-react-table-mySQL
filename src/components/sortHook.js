import {useEffect, useState} from 'react';

export const useSort = (items, isLoaded) => {

    const [sortedItems, setSortedItems] = useState(items);
    const [mask, setMask] = useState("");
    const [currentColumn, setCurrentColumn] = useState("");
    const [currentCondition, setCurrentCondition] = useState("");

    useEffect(() => {
        SortQuantity(currentCondition, currentColumn);
        SortDistance(currentCondition, currentColumn);
        SortName(currentCondition, currentColumn);

    }, [currentCondition, currentColumn, mask]);

    function SortQuantity (currentCondition, currentColumn) {
        if (currentColumn === "Quantity" && currentCondition === "less") {
            console.log(mask, currentCondition, currentColumn);
            setSortedItems(
                items.filter(item => item.Quantity < mask)
            )
        } else if (currentColumn === "Quantity" && currentCondition === "greater") {
            console.log(mask, currentCondition, currentColumn);
            setSortedItems(
                items.filter(item => item.Quantity > mask)
            )
        } else if (currentColumn === "Quantity" && currentCondition === "equal") {
            console.log(mask, currentCondition, currentColumn);
            setSortedItems(
                items.filter(item => item.Quantity.toString() === mask)
            )
        } else return items
    }

    function SortDistance (currentCondition, currentColumn) {
        if (currentColumn === "Distance" && currentCondition === "less") {
            console.log(mask, currentCondition, currentColumn);
            setSortedItems(
                items.filter(item => item.Distance < mask)
            )
        } else if (currentColumn === "Distance" && currentCondition === "greater") {
            console.log(mask, currentCondition, currentColumn);
            setSortedItems(
                items.filter(item => item.Distance > mask)
            )
        } else if (currentColumn === "Distance" && currentCondition === "equal") {
            console.log(mask, currentCondition, currentColumn);
            setSortedItems(
                items.filter(item => item.Distance.toString() === mask)
            )
        } else return items
    }

    function SortName (currentCondition, currentColumn) {
        if (currentColumn === "Name" && currentCondition === "contains") {
            console.log(mask, currentCondition, currentColumn);
            setSortedItems(
                items.filter(item =>
                    item.Name.toLowerCase().includes(mask.toLowerCase())
                )
            )
        } else return items
    }

    return {
        setMask,
        setCurrentColumn,
        setCurrentCondition,
        sortedItems
    }
};