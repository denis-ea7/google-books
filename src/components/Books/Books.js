import React from 'react';
import {observer} from "mobx-react";
import GetBooks from "../../store/GetBooks";
const Books = () => {
    const DataTitle = GetBooks.title
    // console.log(GetBooks.getData())
    return (<div className='Books'>
        {DataTitle.map((person) =>
                <div className='p-3 border bg-light BooksContent' key={person.volumeInfo.id}>
                    <img src={person.volumeInfo.imageLinks.thumbnail}/>
                    <div style={{textDecoration: 'underline', color: 'gray'}}>{person.volumeInfo.categories}</div>
                    <div style={{fontWeight: 'bold'}}>{person.volumeInfo.title}</div>
                    <div style={{color: 'gray'}}>{person.volumeInfo.authors}</div>
                </div>
        )}
    </div>)
};

export default observer(Books);
