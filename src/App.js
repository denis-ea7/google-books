import './App.css';
import img from "./img.jpg"
import SearchInput from "./components/SearchInput/SearchInput";
import DropDownList from "./components/drop-down-list/DropDownList";
import GetBooks from "./store/GetBooks";
import Books from "./components/Books/Books";
import ShowMore from "./components/Books/Show-more";
import FoundResults from "./components/found-results/Found-results";
import Book from "./components/Book/Book";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
function App() {
    return (
            <div className="App">
            <h1>Поиск книг</h1>
            <SearchInput/>
                <Book/>
            <FoundResults/>
            <DropDownList/>
            <DropDownList/>
                <BreadCrumbs/>
                <Books />
            <ShowMore/>
        </div>
    );
}
export default App;
