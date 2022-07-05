import './App.css';
import img from "./img.jpg"
import SearchInput from "./components/SearchInput/SearchInput";
import DropDownList from "./components/drop-down-list/DropDownList";
import GetBooks from "./store/GetBooks";
import {useEffect} from "react";
import {observer} from "mobx-react";
import {findAllByDisplayValue} from "@testing-library/react";
import Books from "./components/Books/Books";
function App() {
let tit = GetBooks.title
    useEffect(()=>{
        GetBooks.getData()
    })
    return (
        // style={{backgroundImage: `url(${img})` }}
        <div className="App">
            <h1>Search for books</h1>
            <SearchInput/>
            <DropDownList/>
            <DropDownList/>
            <Books DataTitle={tit}/>
        </div>
    );
}
export default  App;
