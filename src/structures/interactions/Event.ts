export default class Event {
    name: string
    execute: Function
    once: boolean

    constructor (name: string, callback: Function, once?: boolean) {
        this.name = name
        this.execute = callback
        this.once = once || false
    }
}
