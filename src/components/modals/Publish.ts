import Component from "~/structures/interactions/Component";
import Bot from "~/structures/Bot";
import {EmbedBuilder, ModalSubmitInteraction, User} from "discord.js";

module.exports = new Component('blog-publish', 'modal', async (bot: Bot, interaction: ModalSubmitInteraction) => {
    const author: User = interaction.user
    const title: string = interaction.fields.getTextInputValue("blog-modal-title")
    const description: string = interaction.fields.getTextInputValue("blog-modal-description")
    const imageURL: string = interaction.fields.getTextInputValue("blog-modal-image")

    const embed: EmbedBuilder = new EmbedBuilder()
        .setColor('#FFFFFF')
        .setTitle(title)
        .setAuthor({
            name: author.username,
            iconURL: author.avatarURL({}) || 'https://images.unsplash.com/photo-1558433916-90a36b44753f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        })
        .setDescription(description)
        .setImage(imageURL)
        .setTimestamp()

    await interaction.channel?.send({
        // @ts-ignore
        content: `|| @here ||`,
        embeds: [ embed ]
    }).then(async _ => {
        await interaction.reply({
            content: undefined,
            embeds: [
                new EmbedBuilder()
                    .setColor('#FFFFFF')
                    .setDescription(`"**${title}**" has been shared!`)
            ],
            ephemeral: true
        })
    })
})
