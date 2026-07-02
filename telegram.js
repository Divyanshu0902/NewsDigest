const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

async function sendTelegramMessage(message) {
    const url =
        `https://api.telegram.org/bot${botToken}/sendMessage` +
        `?chat_id=${chatId}` +
        `&text=${encodeURIComponent(message)}`;

    const response = await fetch(url);

    const data = await response.json();

    return data;
}

module.exports = {
    sendTelegramMessage
};