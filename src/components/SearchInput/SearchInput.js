import React from 'react';
import GetBooks from "../../store/GetBooks";

const SearchInput = () => {
    const input = (e) => {
        if (e.keyCode === 13) {
            GetBooks.getData(e.target.value)
        }
    }

    return (
        <div className='SearchInput'
        >
            <div className="input-group rounded">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                       onKeyDown={(e) => input(e)}
                       aria-describedby="search-addon"/>
            </div>
        </div>
    );
};

export default SearchInput;