import React from 'react';
import GetBooks from "../../store/GetBooks";
import {observer} from "mobx-react";

const ShowMore = () => {
    return (
        <div>
            <span onClick={()=>GetBooks.startIndex++} className='show-more'>показать еще...</span>
        </div>
    );
};

export default observer(ShowMore) ;