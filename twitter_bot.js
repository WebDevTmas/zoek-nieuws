/*
The twitterbot class, requiring twitter access tokens in order to run.
 */
const replyToNewMentions = require("./twitter_access").replyToNewMentions;
const executeEveryCoupleMinutes = require('./execute_loop').executeEveryCoupleMinutes;
const mentionReplier = require("./bot").mentionReplier;

// Dealing with run duration
const runTimeMinutes = process.argv[2] || 1,
    checkEveryMinutes = process.argv[3] || 5;

(async () => {
    await executeEveryCoupleMinutes(runTimeMinutes, checkEveryMinutes, await replyToNewMentions(mentionReplier));
})();
