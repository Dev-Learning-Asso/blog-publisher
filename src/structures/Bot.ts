import { Client, Collection } from 'discord.js'
import * as console from "console";
import Command from "~/structures/interactions/Command";
import Component from "~/structures/interactions/Component";

export default class Bot extends Client {
    commands: Collection<string, Command>
    modals: Collection<string, Component>
    bot_token: string | undefined

    constructor (token: string | undefined) {
        super({ intents: 32767 });

        this.bot_token = token
        this.commands = new Collection()
        this.modals = new Collection()
    }

    connect () {
        require('~/handlers/EventsHandler')(this)
        require('~/handlers/CommandsHandler')(this)
        require('~/handlers/ComponentsHandler')(this)

        this.login(this.bot_token).then(_ => console.log(`Logged in!`)).catch(err => console.log(`An error occurred!`, err))
    }
}
