import {autorun, extendObservable, makeAutoObservable, makeObservable, observable} from "mobx";
import axios from "axios";
import {configure} from "mobx";

class GetBooks {
    title = []
    img = []
    startIndex=0

    constructor() {
        configure({
            useProxies: "never",
            enforceActions: "never"
        })
        makeAutoObservable(this, {
            title: observable,
            img: observable
        })
    }

    getData(data) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${data}&startindex=${this.startIndex}&key=AIzaSyCJs7EPRmqH2mKVKO31t2NcYnHmkLVfjmA`)
            .then((res) => {
               console.log(this.startIndex)
                if (this.title.length === 0) {
                    this.title = res.data.items
                } else {
                    this.title = this.title.concat(res.data.items)
                }

            })
    }

}

export default new GetBooks