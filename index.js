require("dotenv").config();
const { sendTelegramMessage } = require("./telegram");
const { getTopStoryIDs, getStoryByID, getTopNStories} = require("./hackernews");

// const message = "Hello from Node.js!";

async function main() {
    const Nstories = await getTopNStories(5);
    // const message = JSON.stringify(Nstories);

    
        const message =
        `🔥 *Top ${Nstories.length} Hacker News Stories*\n\n` +
        Nstories.map((story, index) => {
            const articleLink = story.url || `https://news.ycombinator.com/item?id=${story.id}`;

            return `${index + 1}. 📰 *${story.title}*

        👤 Author: ${story.by}
        ⭐ Score: ${story.score}
        💬 Comments: ${story.descendants}

        🔗 ${articleLink}
        🗨️ https://news.ycombinator.com/item?id=${story.id}`;
        }).join("\n\n━━━━━━━━━━━━━━━━━━━━━━\n\n");


    // console.log(Nstories);

    // const StoryIDs = await getTopStoryIDs();
    // const firstStory = await getStoryByID(StoryIDs[0]);
    // console.log(firstStory);

    const data = await sendTelegramMessage(message);
    console.log(data);
}

main();

setInterval