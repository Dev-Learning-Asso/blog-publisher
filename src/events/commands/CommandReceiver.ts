import Event from '~/structures/interactions/Event'
import Bot from "~/structures/Bot";
import {Interaction} from "discord.js";
import Command from "~/structures/interactions/Command";

module.exports = new Event('interactionCreate', async (bot: Bot, interaction: Interaction) => {
    if (!interaction.isCommand()) return

    const command: Command | undefined = bot.commands.get(interaction.commandName)
    if (!command) return interaction.reply({
        content: undefined,
        embeds: [
            /*new Embed(client, {
                color: '#EE3E63',
                description: `:x: This command doesn't exist!`
            }).build()*/
        ],
        ephemeral: true
    })
    await command.execute(bot, interaction)
})
