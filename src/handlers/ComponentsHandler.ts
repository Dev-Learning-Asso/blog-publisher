import Bot from "~/structures/Bot";
import loadFiles from "~/handlers/FileHandler";
// @ts-ignore
import Ascii from 'ascii-table'

module.exports = (bot: Bot) => {
    const table: Ascii = new Ascii('Components')
    const components: string[] = loadFiles('./src/components/', true)

    components.forEach((path: string) => {
        const component: any = require(`~/components/${path}`)

        if (!component.type) return table.addRow(component.id, component.type, '🔸 FAILED', `Missing component's type!`)
        if (!component.id) return table.addRow(component.id, component.type, '🔸 FAILED', `Missing component's custom id!`)

        switch (component.type) {
            case 'modal':
                bot.modals.set(component.id, component)
                break
            default:
                return
        }

        table.addRow(component.id, component.type, `🔹SUCCESS`)
    })

    if (components.length !== 0) console.log(table.toString())
}
