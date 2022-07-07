import React from 'react';
import GetBooks from "../../store/GetBooks";
import {observer} from "mobx-react";

const ShowMore = () => {
    const countIndex = () => {
        GetBooks.startIndex++;
        GetBooks.getData(GetBooks.data)
    }
    return (
        <div>
            <span onClick={() => countIndex()} className='show-more'>показать еще..</span>
        </div>
    );
};

export default observer(ShowMore);