const url = require('url');

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear() 
    }`;
  },
  getImagePath: (className) => {
    const imagePath = url.resolve('/images/ClassImages/', `${className.toLowerCase()}.png`);
    return imagePath;
  },
};
