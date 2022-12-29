import Bot from '~/structures/Bot'
require('dotenv').config()

const bot = new Bot(process.env.TOKEN)

bot.connect()
