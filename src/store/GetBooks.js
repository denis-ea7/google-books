import {autorun, makeAutoObservable, makeObservable, observable} from "mobx";
import axios from "axios";
import {configure} from "mobx";
class GetBooks {
    title = []
    img = []
    constructor() {
        configure({
            useProxies: "never"
        })
        makeAutoObservable(this, {
            title: observable,
            img: observable
        })
    }

    getData(data) {
        const APIKey = 'AIzaSyCJs7EPRmqH2mKVKO31t2NcYnHmkLVfjmA'
        // :keyes&key=${APIKey}
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${data}:keyes&key=${APIKey}`)
            .then((res) => {
                let title = res.data.items
                this.title = title
            })
    }
}

export default new GetBooks