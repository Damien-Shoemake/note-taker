//sourced from activity 26

//creates a random string of letters and numbers for the 'id'

module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);