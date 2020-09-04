import React from "react";
import "./input.icon.css"

const Search = ({setSearch}) => {

    return (
        <div className="container">
            <div className="form-group">
                <div className="name-user position-relative">
                    <i className="position-absolute fas fa-search" id="searchIcon"/>
                    <input
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Поиск по имени"
                        onChange={e => setSearch(e.target.value)}
                        id="name-user"
                    />
                </div>
            </div>
        </div>
    )
};

export default Search;