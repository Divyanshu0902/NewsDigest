async function getTopStoryIDs(){
    const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
    );

    const IDs = response.json();
    return IDs;
}

async function getStoryByID(id){
    const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );

    const story = response.json();
    return story;
}

async function getTopNStories(limit){
    const IDSresponse = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
    );

    const IDs = await IDSresponse.json();

    const stories = [];

    for(let i=0; i<limit; i++){
        const response = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${IDs[i]}.json`
        );
        const story = await response.json();

        stories.push(story);
    }

    return stories;
}

module.exports = {
    getTopStoryIDs,
    getStoryByID,
    getTopNStories
};