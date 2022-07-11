import React from 'react';
import GetBooks from "../../store/GetBooks";

const SearchInput = () => {
    const input = (e) => {
        if ((e.keyCode === 13)||(e.target.value=='btn')) {
            GetBooks.getData(e.target.value)
        }
    }

    return (
        <div className='SearchInput'>
            <div className="input-group rounded">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                       onKeyDown={(e) => input(e)}
                       aria-describedby="search-addon"/>
            </div>
            <button className='btn' style={{border: 'solid 0.5px'}} value='btn' onClick={(e)=>input(e)}>Search</button>
        </div>
    );
};

export default SearchInput;