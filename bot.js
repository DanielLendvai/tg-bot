const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;
const PORT = process.env.PORT || 3000;
const URL = `https://tg-bot-git-main-daniellendvais-projects.vercel.app/api`;

const bot = new TelegramBot(token, {
  webHook: {
    port: PORT,
  },
});

bot.setWebHook(`${URL}/api`);

const app = express();

app.use(bot.webHookCallback('/api'));

const members = ['Márk', 'Máté', 'Norbi', 'Dani'];

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText && messageText.toLowerCase().includes('tibi')) {
    bot.sendMessage(chatId, 'Who is Tibi?');
  }
});


module.exports = app;
