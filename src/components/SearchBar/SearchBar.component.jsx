import React from 'react';
import './SearchBar.styles.css';

const SearchBar = (props) => {
    const onSearchChange = (e) => {
        props.handleChange(e.target.value);
    }

    const submitSearch = (e) => {
        e.preventDefault();
        props.handleSubmit(props.q);
    }

    return (
        <form className="search-form" onSubmit={submitSearch}>
            <input
                onChange={onSearchChange}
                className="search-bar"
                type="text"
                value={props.q}
                placeholder="Search For A Book..." />
            <button className="search-button" type="submit">
                <i className="fa fa-search"></i>
            </button>
        </form>
    );
};

export default SearchBar;