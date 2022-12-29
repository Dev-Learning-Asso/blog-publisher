import Bot from '~/structures/Bot'
import Event from '~/structures/interactions/Event'
import { ActivityType, Guild } from 'discord.js'

module.exports = new Event('ready', async (bot: Bot) => {
    await bot.user?.setPresence({
        activities: [
            {
                name: 'in dev',
                type: ActivityType.Playing
            }
        ],
        status: 'dnd'
    })
    const guild: Guild | undefined = await bot.guilds.cache.get(process.env.GUILD_ID ?? '1057303892972539945')
    await guild?.commands.set(bot.commands.map(cmd => cmd))
})
