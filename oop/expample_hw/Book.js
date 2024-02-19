
export default class Book {
    constructor(title) {
        this._title = title
    }

    get title(){
        return this._title
    }

    set title(value){
        if(typeof value !== "string"){
            console.error("Error: Title should be type of string")
            return
        }

        if(value.length < 1){
            console.error("Error: Title length should be at least 1 symbol")
            return
        }

        this._title = value
    }

    static findOldestBook(books){

    }
}
