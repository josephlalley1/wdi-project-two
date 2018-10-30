const env = require('../config/environment');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const Articles = require('../models/articles');
const User = require('../models/user');

Articles.collection.drop();
User.collection.drop();

const userData = [
  {
    profilepic: 'https://data.whicdn.com/images/263815632/large.jpg',
    username: 'kb',
    email: 'kodakbl@ck',
    password: 'pass'
  }
];

User.create(userData).then(users => {
  return Articles.create([
    {
      title: 'How to Protect Yourself From SIM Swapping Hacks',
      coverimg: 'https://video-images.vice.com/articles/5b351708d8e55300086c3290/lede/1530205983061-how2avoidhacking.jpeg?crop=0.9977777777777778xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A',
      frontPageSummary: 'Here’s a guide on how to prevent and protect yourself against the threat of hackers taking over your phone number and going after your online accounts.',
      content: 'Criminal hackers have been targeting Instagram users with short or unique usernames, as well as people who own Bitcoin. To steal the victim’s accounts or cryptocurrencies, the hackers first seize the cell phone numbers of targets, which gives them the ability to reset passwords on any account linked to a given number.',
      addedBy: users[0]
    },
    {
      title: 'An ISP Left Corporate Passwords, Keys, and All its Data Exposed on the Internet',
      coverimg: 'https://video-images.vice.com/articles/5bcf506f61347e00069d9daa/lede/1540314056277-shutterstock_582236128.jpeg?crop=1xw%3A0.7959214808787632xh%3Bcenter%2Ccenter&resize=2000%3A',
      frontPageSummary: 'The ISP, called Pocket iNet, left 73 gigabytes of extremely sensitive internet available for anyone to see.',
      content: 'In what’s becoming a bit of a trend in modern technical incompetence, yet another company has left oodles of private company data sitting openly accessible on an Amazon cloud server. According to a new report by the security researchers at UpGuard, a Washington-based ISP by the name of Pocket iNet left 73 gigabytes of essential operational data publicly exposed in a misconfigured Amazon S3 storage bucket for months.',
      addedBy: users[0]
    }
  ]).then(() => mongoose.connection.close());
});
