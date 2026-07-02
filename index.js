require("dotenv").config();
const { sendTelegramMessage } = require("./telegram");
const { getTopStoryIDs, getStoryByID, getTopNStories} = require("./hackernews");

const message = "Hello from Node.js!";

async function main() {
    const Nstories = await getTopNStories(5);
    console.log(Nstories);

    // const StoryIDs = await getTopStoryIDs();
    // const firstStory = await getStoryByID(StoryIDs[0]);
    // console.log(firstStory);

    // const data = await sendTelegramMessage(message);
    // console.log(data);
}

main();