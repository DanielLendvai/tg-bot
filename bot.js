const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();

app.use(express.json());


const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token);

const url = 'https://tg-bot-git-main-daniellendvais-projects.vercel.app'; 
const webhookPath = `/bot${token}`;
bot.setWebHook(url + webhookPath);

app.post(webhookPath, async (req, res) => {
  try {
    await bot.processUpdate(req.body); 
    res.sendStatus(200);
  } catch (error) {
    console.error('Error processing update:', error);
    res.sendStatus(500);
  }
});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText && messageText.toLowerCase().includes('tibi')) {
    bot.sendMessage(chatId, 'Who is Tibi?');
  }
});
module.exports = app;
