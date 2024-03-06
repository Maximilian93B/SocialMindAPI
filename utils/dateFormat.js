// utils/dateFormat.js
const dateFormat = (date) => {
    // Format the date as a string in the desired format
    // This is a very simple example; you might need something more complex
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  module.exports = dateFormat;
  