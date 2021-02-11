import React from 'react';
import './SearchBar.styles.css';

const SearchBar = (props) => {
    console.log(props);

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
            <input className="button" type="submit" />
        </form>
    );
};

export default SearchBar;