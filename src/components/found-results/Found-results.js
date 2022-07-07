import React from 'react';
import GetBooks from "../../store/GetBooks";
import {observer} from "mobx-react";
const FoundResults = () => {
    if(GetBooks.totalItems===0){

    }
    return (
        <div>
            <div className='found-results' style={GetBooks.totalItems===0?{}:{display: "block"}}>Найдено результатов: {GetBooks.totalItems}</div>
        </div>
    );
};

export default observer(FoundResults) ;