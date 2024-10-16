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

const members = ['Márk', 'Máté', 'Norbi', 'Dani'];

bot.onText(/\/kiabuzi/, (msg) => {
  const chatId = msg.chat.id;

  const randomIndex = Math.floor(Math.random() * members.length);
  const selectedMember = members[randomIndex];

  bot.sendMessage(chatId, `🎉 Te vagy a buzi: ${selectedMember}! 🎉`);
})

// Listen for any message that contains "Tibi"
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText && messageText.toLowerCase().includes("tibi")) {
    bot.sendMessage(chatId, "De ki az a Tibi?");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
