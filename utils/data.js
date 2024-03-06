// Seed data 

// User data 
const users = [
    {
        username: 'alice',
        email: 'alice@example.com'
    },
    {
        username:'bob',
        email: 'bob@example.com'
    },
    {
        username: 'travis',
        email: 'kelce@example.com'
    }
];

const thoughts = [ 
    {
        thoughtText: 'This is a thought that Alice Posted',
        username: 'alice',
        reactions: [
            {
                reactionBody: 'Great thought, Alice!',
                username: 'bob'
            }
        ]
    },
    {
        thoughtText: 'This is a thought that Travis Posted',
        username: 'travis',
        reactions: [
            {
                reactionBody: 'Interesting thought, Travis!',
                username: 'alice'
            }
        ]
    }
];

module.exports = {
    users,
    thoughts
};