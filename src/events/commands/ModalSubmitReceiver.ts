import Event from "~/structures/interactions/Event";
import Bot from "~/structures/Bot";
import {Interaction} from "discord.js";
import Component from "~/structures/interactions/Component";

module.exports = new Event('interactionCreate', async (bot: Bot, interaction: Interaction) => {
    if (!interaction.isModalSubmit()) return

    const modal: Component | undefined = bot.modals.get(interaction.customId)
    if (!modal) return interaction.reply({
        content: undefined,
        embeds: [
            /*new Embed(client, {
                color: '#EE3E63',
                description: `:x: This command doesn't exist!`
            }).build()*/
        ],
        ephemeral: true
    })
    await modal.execute(bot, interaction)
})
