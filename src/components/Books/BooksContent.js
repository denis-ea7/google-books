import React from 'react';
import GetBooks from "../../store/GetBooks";
const BooksContent = ({book}) => {
    let d = (id) => {
       GetBooks.getBook(id)
    }
    return (
        <div key={book.id} onClick={() => d(book.id)} className='p-3 border bg-light BooksContent'>
            {book.volumeInfo.imageLinks === undefined ? <img/> :
            <img style={{boxShadow: "10px 5px 5px darkgray"}} src={book.volumeInfo.imageLinks.thumbnail}/>}
            <div style={{textDecoration: 'underline', color: 'gray'}}>{book.volumeInfo.categories}</div>
            <div style={{fontWeight: 'bold'}}>{book.volumeInfo.title}</div>
            <div style={{color: 'gray'}}>{book.volumeInfo.authors}</div>
        </div>
    );
};
export default BooksContent;