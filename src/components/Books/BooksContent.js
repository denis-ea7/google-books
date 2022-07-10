import React from 'react';
const BooksContent = ({book}) => {
    return (
        <div className='p-3 border bg-light BooksContent'>
            {book.volumeInfo.imageLinks === undefined ? <img src="" alt=""/> :
                <img style={{boxShadow: "10px 5px 5px darkgray"}} src={book.volumeInfo.imageLinks.thumbnail}/>}
            <div style={{
                textDecoration: 'underline',
                color: 'gray'
            }}>{book.volumeInfo.categories}</div>
            <div style={{fontWeight: 'bold'}}>{book.volumeInfo.title}</div>
            <div style={{color: 'gray'}}>{book.volumeInfo.authors}</div>
        </div>
    );
};

export default BooksContent;