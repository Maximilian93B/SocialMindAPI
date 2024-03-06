const mongoose = require('mongoose');
const { User, Thought } = require('../models/index');
const { users, thoughts} = require('./data');

mongoose.connect('mongodb://127.0.0.1:27017/socialmedia', {
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
    const createdThought = await Thought.create({ ...thought });
    // Assuming `thought.username` matches a User's username
    await User.findOneAndUpdate(
      { username: thought.username }, 
      { $push: { thoughts: createdThought._id } }
    );
  }

  // Loop that established friendships amoung users 
  // Example: Establishing friendships (simplified)
  // Assuming you want to make each user friends with every other user
  const userIds = createdUsers.map(user => user._id);
  for (const userId of userIds) {
    await User.findByIdAndUpdate(userId, {
      $addToSet: { friends: { $each: userIds.filter(id => !id.equals(userId)) } }
    });
  }
  console.log('Friendships established.');

    // Log inserted users
  const insertedUsers = await User.find({});
  console.log('Inserted Users',insertedUsers);

  // Log inserted thoughts
  const insertedThoughts = await Thought.find({});
  console.log('Inserted Thoughts', insertedThoughts);
  console.log('Seeding complete..');
  };

  seedDB().then(() =>{
    console.log('Closing Connection');
    console.log('Please restart the sever');
    mongoose.connection.close();
  });