import Bot from '~/structures/Bot'
import Command from '~/structures/interactions/Command'
import loadFiles from '~/handlers/FileHandler'
// @ts-ignore
import Ascii from 'ascii-table'

module.exports = (bot: Bot) => {
    const table = new Ascii('Commands')
    const commands: string[] = loadFiles('./src/commands/', true)

    commands.forEach((path: string) => {
        const command: Command = require(`~/commands/${path}`)

        if (!command.name) return table.addRow(command.name, command.description, command.category, '🔸 FAILED', `Missing command's name!`)
        if (!command.description) return table.addRow(command.name, command.description, command.category, '🔸 FAILED', `Missing command's description!`)
        if (!command.category) return table.addRow(command.name, command.description, command.category, '🔸 FAILED', `Missing command's category!`)

        bot.commands.set(command.name, command)
        table.addRow(command.name, command.description, command.category, '🔹 SUCCESS')
    })

    if (commands.length !== 0) console.log(table.toString())
}
