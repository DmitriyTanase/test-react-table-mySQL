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
                        placeholder="Search"
                        onChange={e => setSearch(e.target.value)}
                        id="name-user"
                    />
                </div>
            </div>
        </div>

        // <div>
        //     <span className="glyphicon glyphicon-search"/>
        //     <input
        //         name="search"
        //         type="text"
        //         className="form-control"
        //         placeholder="search"
        //         onChange={e => setSearch(e.target.value)}
        //     />
        // </div>

    )
};

export default Search;