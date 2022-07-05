import React from 'react';
const SearchInput = () => {
    return (
        <div>
            <div className="input-group rounded">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                       aria-describedby="search-addon"/>
                <span className="input-group-text border-0" id="search-addon"></span>
            </div>
        </div>
    );
};

export default SearchInput;