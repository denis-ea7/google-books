import React from 'react';
import {observer} from "mobx-react";
import GetBooks from "../../store/GetBooks";
import BooksContent from "./BooksContent";

const Books = () => {
    const DataTitle = GetBooks.title
    return (<div className='Books'>
        {DataTitle.map(function (book, index) {
            if ((GetBooks.filter == '' || GetBooks.filter == 'All') ||
                (book.volumeInfo.categories == GetBooks.filter)) {
                return <BooksContent book={book}/>
            }
        })}
    </div>)
};

export default observer(Books);
