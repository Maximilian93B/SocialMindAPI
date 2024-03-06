const mongoose = require('mongoose');
const { User, Thought } = require('../models/index');
const { users, thoughts} = require('./data');

mongoose.connect('mongodb://localhost:27017/socialMediaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log(' connected to DB'))
  .catch(err => console.log(err));

// Seed the Db 
const seedDB = async() => {
    // Clear exisiting data 
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log('Exisiting users and thoughts deleted.');
    //Insert the users data 
    const createdUsers = await User.insertMany(users);
    console.log(`${createdUsers.length} users inserted.`);

    // Create a Map of usernames to MongoDB
    const userMap = {};

    createdUsers.forEach(user => {
        userMap[user.username] = user.id;
    });

    // Insert the seed thoughts 
    for (const thought of thoughts) {

        const createdThought = await Thought.create(thought); // `thought` already includes a `username`
        console.log(`Thought created: ${createdThought.thoughtText} by ${createdThought.username}`);
    }

    await User.findOneAndUpdate(
        { username: 'alice' }, 
        { $addToSet: { friends: userMap['bob'] } }
    );
     
    await User.findOneAndUpdate(
        { username: 'bob' }, 
        { $addToSet: { friends: userMap['alice'] } }
    );  

    // Log inserted users
  const insertedUsers = await User.find({});
  console.log(insertedUsers);

  // Log inserted thoughts
  const insertedThoughts = await Thought.find({});
  console.log(insertedThoughts);

    console.log('Database seeded!');
};

seedDB().then(() =>{
    console.log('Database seeded. Closing Connection. Please start the server');
    mongoose.connection.close();
});