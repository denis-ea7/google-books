import GetBooks from "../../store/GetBooks";
import {observer} from "mobx-react";
const DropDownList = () => {
    const handleChange = (e) => {
       GetBooks.filter = e.target.value
    }
    const HandleChange = (e)=>{
        GetBooks.relevance = e.target.value
        GetBooks.getData(GetBooks.data)
    }
    return (
        <div className='DropDownList'>
           <span style={{paddingRight: '1em'}}>Categories</span>
            <select onChange={(e) => handleChange(e)} className="btn btn-secondary dropdown-toggle">
                <option selected>All</option>
                <option value="Art">Art</option>
                <option value="Biography">Biography</option>
                <option value="Computers">computers</option>
                <option value="history">history</option>
                <option value="medical">medical</option>
                <option value="poetry">poetry</option>
            </select>
            <span style={{paddingLeft:'2em'}}>Sorting by</span>

            <select onChange={(e)=>HandleChange(e)} className="btn btn-secondary dropdown-toggle" style={{marginLeft: "15px"}}>
                <option selected value='relevance'>Relevance</option>
                <option value="newest">Newest</option>

            </select>

        </div>
    );
};

export default observer(DropDownList) ;