import Bot from '~/structures/Bot'
import Event from '~/structures/interactions/Event'
import loadFiles from '~/handlers/FileHandler'
// @ts-ignore
import Ascii from 'ascii-table'

module.exports = (bot: Bot) => {
    const table: Ascii = new Ascii('Events')
    const events: string[] = loadFiles('./src/events/', true)

    events.forEach((path: string) => {
        const event: Event = require(`~/events/${path}`)

        if (!event.name) return table.addRow('( ╯□╰ )', '🔸 FAILED', `Missing event's name!`)

        if (event.once) bot.once(event.name, event.execute.bind(null, bot))
        else bot.on(event.name, event.execute.bind(null, bot))
        table.addRow(event.name, '🔹 SUCCESS')
    })

    if (events.length !== 0) console.log(table.toString())
}
