class Twitter {
    constructor() {
        this.tweets = new Map();
        this.follows = new Map();
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId).push([tweetId, this.time++]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const users = new Set([userId]);
        if (this.follows.has(userId)) {
            this.follows.get(userId).forEach((f) => users.add(f));
        }

        const allTweets = [];
        users.forEach((uid) => {
            if (this.tweets.has(uid)) {
                allTweets.push(...this.tweets.get(uid));
            }
        });

        allTweets.sort((a, b) => b[1] - a[1]);
        return allTweets.slice(0, 10).map((t) => t[0]);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.follows.has(followerId)) {
            this.follows.set(followerId, new Set());
        }
        this.follows.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.follows.has(followerId)) {
            this.follows.get(followerId).delete(followeeId);
        }
    }
}
