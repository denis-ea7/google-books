import {autorun, extendObservable, makeAutoObservable, makeObservable, observable} from "mobx";
import axios from "axios";
import {configure} from "mobx";
import showMore from "../components/Books/Show-more";

class GetBooks {
    title = []
    startIndex = 0
    data = ''
    totalItems = 0
    showMore = false
    filter = ''
    relevance = 'relevance'
    small = null

    constructor() {
        configure({
            useProxies: "never",
            enforceActions: "never"
        })
        makeAutoObservable(this, {
            title: observable,
            startIndex: observable,
            filter:observable,
            relevance:observable,
            small:observable
        })
    }
    relevanceMethod(res){
        this.totalItems = res.data.totalItems
        this.title = res.data.items
        this.showMore = true
    }
    getBook(id){
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then((res)=>{
                this.title = []
                this.small  = res.data
                this.showMore = false
                // console.log(this.small)
            })

    }

    getData(data) {

        if (this.data != data) {
            this.startIndex = 0;
            this.title = []
        }
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${data}
            &startIndex=${this.startIndex}&orderBy=${this.relevance}&maxResults=30&
                key=AIzaSyCJs7EPRmqH2mKVKO31t2NcYnHmkLVfjmA`)
            .then((res) => {
                this.small = null
                this.data = data
                if (this.title.length === 0) {
                    this.relevanceMethod(res)
                } else {
                    if (res.data.items.length > 28) {
                        this.showMore = true
                    } else {
                        this.showMore = false
                    }
                    if((this.relevance == 'newest') || (this.relevance == 'relevance')){
                        this.relevanceMethod(res)
                    }
                    this.title = this.title.concat(res.data.items)
                }

            })
    }

}

export default new GetBooks