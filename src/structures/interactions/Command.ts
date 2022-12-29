import {ApplicationCommandOption} from 'discord.js'

export default class Command {
    name: string
    category: string
    description: string
    options: ApplicationCommandOption[]
    execute: Function

    constructor (name: string, category: string, description: string, callback: Function, options?: ApplicationCommandOption[]) {
        this.name = name
        this.category = category
        this.description = description
        this.options = options || []
        this.execute = callback
    }
}
