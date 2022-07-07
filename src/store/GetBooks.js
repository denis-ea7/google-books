import {autorun, extendObservable, makeAutoObservable, makeObservable, observable} from "mobx";
import axios from "axios";
import {configure} from "mobx";
import showMore from "../components/Books/Show-more";

class GetBooks {
    title = []
    img = []
    startIndex = 0
    data = ''
    totalItems = 0
    showMore = false

    constructor() {
        configure({
            useProxies: "never",
            enforceActions: "never"
        })
        makeAutoObservable(this, {
            title: observable,
            img: observable,
            startIndex: observable
        })
    }

    getData(data) {
        if (this.data != data) {
            this.startIndex = 0;
            this.title = []
        }
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${data}
            &startIndex=${this.startIndex}&maxResults=40&
                key=AIzaSyCJs7EPRmqH2mKVKO31t2NcYnHmkLVfjmA`)
            .then((res) => {
                this.data = data
                console.log(this.startIndex)
                if (this.title.length === 0) {
                    this.totalItems = res.data.totalItems
                    this.title = res.data.items
                    this.showMore = true
                } else {
                    if (res.data.items.length > 38) {
                        this.showMore = true
                    } else {
                        this.showMore = false
                    }
                    this.title = this.title.concat(res.data.items)
                }

            })
    }

}

export default new GetBooks