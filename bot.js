const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const token = '8146313524:AAG2XTS6iDVNqZj80MnOb4Kq64zCNuLgd-k';
const bot = new TelegramBot(token);
const app = express();


bot.setWebHook(`https://tg-bot-git-main-daniellendvais-projects.vercel.app/api`);

app.use(express.json());

app.post(`/api`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Listen for any message that contains "Tibi"
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText && messageText.toLowerCase().includes("tibi")) {
    bot.sendMessage(chatId, "De ki a faszom az a Tibi?");
  } else if (messageText && messageText.toLowerCase().includes("román")) {
    bot.sendMessage(chatId, "Ne románozzál te geci")
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
