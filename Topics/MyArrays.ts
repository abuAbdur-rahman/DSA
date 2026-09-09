// cutom Arrray
export class MyArray {

    declare length: number
    declare data: any

    constructor(){
        this.length = 0;
        this.data = {}
    }
    
    push(item: string): number{
        this.data[this.length] = item
        this.length ++
        return this.length
    }
    get(index: number): string{
        return this.data[index]
    }
    pop(): string{
        const popItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return popItem
    }
    shift(): string {
        const shiftItem = this.data[0]
        for(let i = 0; i < this.length; i++){
            this.data[i] = this.data[i+1]
        }
        this.length--
        delete this.data[this.length]
        return shiftItem
    }
    deleteByIndex(index: number){
        const deleteItem = this.get(index)
        if(!deleteItem) throw new Error(`No item found at the index ${index}`)
        for(let i = index; i < this.length; i++){
            this.data[i] = this.data[i+1]
        }
        this.length--
        delete this.data[this.length]
        return deleteItem
    }
}
// function constructor(length: number, number: any, data: any, any: any, arg4: {}) {
//     throw new Error("Function not implemented.");
// }

// function push(item: any, string: any) {
//     throw new Error("Function not implemented.");
// }


// function get(index: any, number: any) {
//     throw new Error("Function not implemented.");
// }
