export default class Component {
    id: string
    type: string
    execute: Function

    constructor(id: string, type: string, callback: Function) {
        this.id = id
        this.type = type
        this.execute = callback
    }
}
