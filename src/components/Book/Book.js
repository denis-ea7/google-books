import React from 'react';
import GetBooks from "../../store/GetBooks";
import {observer} from "mobx-react";

const Book = () => {
    const small  = GetBooks.small
    if(small!=null){
        return (
            <div className='Book'>
                <div className='p-5 border bg-light BookDiv'>
                    { <img src={small.volumeInfo.imageLinks.small} alt=""/>}
                </div>
                <span className='BookContent'>
                    <h3>хлебные крошки</h3>
                    <h2>{small.volumeInfo.title}</h2>
                    <div>{small.volumeInfo.description}</div>
                </span>
            </div>
        );
    }

};

export default observer(Book) ;