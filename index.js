require("dotenv").config();

const { sendTelegramMessage } = require("./telegram");

const message = "Hello from Node.js!";

async function main() {
    const data = await sendTelegramMessage(message);

    console.log(data);
}

main();