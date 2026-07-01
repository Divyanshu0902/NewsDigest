// To load environment variables from .env into the process.env object in the process of the program
require("dotenv").config();

// retrieve those environment variables from the process.env obj to seperate variables. 
const botToken = process.env.BOT_TOKEN;
const chatID = process.env.CHAT_ID;

// printing them --
console.log("========CONFIGURATION LOADED========");
console.log("Bot Token:",botToken.substring(0,20)+"...");
console.log("Chat ID:",chatID);