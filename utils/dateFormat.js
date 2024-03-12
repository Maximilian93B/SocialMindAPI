// utils/dateFormat.js
const dateFormat = (date) => {
    // Format the date as a string
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  module.exports = dateFormat;
  