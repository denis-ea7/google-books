import {autorun, makeAutoObservable, makeObservable, observable} from "mobx-react";
import axios from "axios";
class getBooks {
    persons = []
    constructor() {
        makeAutoObservable(this, {
        persons:observable
        })
    }
    getData(){
        axios.get('')
    }

}
export default new getBooks