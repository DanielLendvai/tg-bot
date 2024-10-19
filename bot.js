const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();

app.use(express.json());


const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token);

const url = 'https://tg-bot-git-main-daniellendvais-projects.vercel.app/api'; 
const webhookPath = `/bot${token}`;
bot.setWebHook(url + webhookPath);

app.post(webhookPath, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText && messageText.toLowerCase().includes('tibi')) {
    bot.sendMessage(chatId, 'Who is Tibi?');
  }
});
module.exports = app;
