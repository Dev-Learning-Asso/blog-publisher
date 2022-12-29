import Command from "~/structures/interactions/Command";
import Bot from "~/structures/Bot";
import {
    CommandInteraction,
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle,
    ApplicationCommandOptionType
} from "discord.js";

module.exports = new Command('publish', 'Blog', `Publish some content on the blog channel.`, async (bot: Bot, interaction: CommandInteraction) => {
    const title: ActionRowBuilder<any> = new ActionRowBuilder().addComponents(
        new TextInputBuilder()
            .setCustomId("blog-modal-title")
            .setLabel("Title")
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            .setPlaceholder(`Ex: New Musk post on Twitter!`)
    )
    const content: ActionRowBuilder<any> = new ActionRowBuilder().addComponents(
        new TextInputBuilder()
            .setCustomId("blog-modal-description")
            .setLabel("Content")
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true)
            .setPlaceholder("Ex: Discover the new TextBuilder deve...")
    )
    const image: ActionRowBuilder<any> = new ActionRowBuilder().addComponents(
        new TextInputBuilder()
            .setCustomId("blog-modal-image")
            .setLabel("Image URL")
            .setStyle(TextInputStyle.Short)
            .setPlaceholder("Ex: https://www.unsplash.com/abrREfsF...")
    )

    const modal = new ModalBuilder()
        .setTitle(`Blog Editing - ${interaction.options.get('role')}`)
        .setCustomId("blog-publish")
        .setComponents(title, content, image)

    await interaction.showModal(modal)
})
