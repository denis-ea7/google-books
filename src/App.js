import './App.css';
import img from "./img.jpg"
import SearchInput from "./components/SearchInput/SearchInput";
import DropDownList from "./components/drop-down-list/DropDownList";
import GetBooks from "./store/GetBooks";
import {useEffect} from "react";
import Books from "./components/Books/Books";
import {observer} from "mobx-react";
import ShowMore from "./components/Books/Show-more";
function App() {
let tit = GetBooks.title
    // useEffect(()=>{
    //     GetBooks.getData()
    // })
    return (
        // style={{backgroundImage: `url(${img})` }}
        <div className="App">
            <h1>Поиск книг</h1>
            <SearchInput/>
            <DropDownList/>
            <DropDownList/>
            <Books DataTitle={tit}/>
            <ShowMore/>
        </div>
    );
}
export default App;
