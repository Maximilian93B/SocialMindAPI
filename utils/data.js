// Avengers-themed Seed Data

// User Data
const users = [
    { username: 'TonyStark', email: 'ironman@example.com' },
    { username: 'SteveRogers', email: 'cap@example.com' },
    { username: 'NatashaRomanoff', email: 'blackwidow@example.com' },
    { username: 'Thor', email: 'thundergod@example.com' },
    { username: 'BruceBanner', email: 'hulk@example.com' },
    { username: 'ClintBarton', email: 'hawkeye@example.com' },
    { username: 'PeterParker', email: 'spidey@example.com' },
    { username: 'ScottLang', email: 'antman@example.com' },
    { username: 'TChalla', email: 'blackpanther@example.com' },
    { username: 'CarolDanvers', email: 'captainmarvel@example.com' }
  ];
  
  // Thoughts (with humorous reactions from other Avengers)
  const thoughts = [
    {
      thoughtText: "Just because something works, doesn't mean it can't be improved. #ShuriWisdom",
      username: 'TChalla',
      reactions: [
        { reactionBody: 'Preach! Also, can we talk about upgrading my suit next?', username: 'TonyStark' },
        { reactionBody: 'Could use some of that wisdom for my web-shooters.', username: 'PeterParker' }
      ]
    },
    {
      thoughtText: "I'm convinced that coffee is the solution to all our problems. #CaffeinePoweredHero",
      username: 'NatashaRomanoff',
      reactions: [
        { reactionBody: 'Agreed. But have you tried coffee with a splash of thunder?', username: 'Thor' },
        { reactionBody: 'Coffee... or whatever/s in Thor/s flask.', username: 'TonyStark' }
      ]
    },
    {
      thoughtText: "Doth mother know you weareth her drapes? #ClassicTony",
      username: 'TonyStark',
      reactions: [
        { reactionBody: 'Tony, thou art lucky I have a sense of humor.', username: 'Thor' },
        { reactionBody: 'Stark, you have the humor of a child.', username: 'SteveRogers' }
      ]
    },
    {
      thoughtText: "Can we PLEASE get a Starbucks on the Quinjet?",
      username: 'ClintBarton',
      reactions: [
        { reactionBody: 'Only if they serve Asgardian mead.', username: 'Thor' },
        { reactionBody: 'How about a green smoothie bar instead?', username: 'BruceBanner' }
      ]
    },
    {
      thoughtText: "Sometimes I'm envious of Tony's facial hair. #BeardEnvy",
      username: 'SteveRogers',
      reactions: [
        { reactionBody: 'It/s not the beard on the outside that counts, but the beard on the inside. #Deep', username: 'ScottLang' },
        { reactionBody: 'Let\'s not make this a competition, Cap.', username: 'TonyStark' }
      ]
    },
    {
      thoughtText: "If anyone needs me, I'll be in my lab inventing a time machine... or napping.",
      username: 'BruceBanner',
      reactions: [
        { reactionBody: 'Why not invent a machine that naps for you?', username: 'ScottLang' },
        { reactionBody: 'Time travel, huh? Might come in handy.', username: 'SteveRogers' }
      ]
    },
    {
      thoughtText: "Note to self: Don't engage in a dance-off to save the universe. It's embarrassing.",
      username: 'PeterParker',
      reactions: [
        { reactionBody: 'But did you win?', username: 'ScottLang' },
        { reactionBody: 'I found it rather amusing.', username: 'Thor' }
      ]
    },
    {
      thoughtText: "The next time aliens invade Earth, can someone please text me?",
      username: 'CarolDanvers',
      reactions: [
        { reactionBody: 'Will do. Adding you to the Avengers group chat.', username: 'NatashaRomanoff' },
        { reactionBody: 'Sorry, who are you again?', username: 'TonyStark' }
      ]
    },
    {
      thoughtText: "I still can't believe we're calling ourselves 'Avengers'. Sounds like we're overcompensating.",
      username: 'ScottLang',
      reactions: [
        { reactionBody: 'Would you prefer "The Revengers"?', username: 'Thor' },
        { reactionBody: 'It/s grown on me. Like Stark\'s ego.', username: 'SteveRogers' }
      ]
    },
    {
      thoughtText: "Is it too much to ask for a suit that doesn't smell like Hulk after a fight?",
      username: 'TChalla',
      reactions: [
        { reactionBody: 'Consider it a mark of honor.', username: 'BruceBanner' },
        { reactionBody: 'You get used to it. Eventually.', username: 'ClintBarton' }
      ]
    }
  ];
  
  module.exports = { users, thoughts };
  