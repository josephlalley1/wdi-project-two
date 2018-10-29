const env = require('../config/environment');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const Articles = require('../models/articles');

const newArticles = [
  {
    title: 'How to Protect Yourself From SIM Swapping Hacks',
    coverimg: 'https://video-images.vice.com/articles/5b351708d8e55300086c3290/lede/1530205983061-how2avoidhacking.jpeg?crop=0.9977777777777778xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A',
    frontPageSummary: 'Here’s a guide on how to prevent and protect yourself against the threat of hackers taking over your phone number and going after your online accounts.',
    content: 'Criminal hackers have been targeting Instagram users with short or unique usernames, as well as people who own Bitcoin. To steal the victim’s accounts or cryptocurrencies, the hackers first seize the cell phone numbers of targets, which gives them the ability to reset passwords on any account linked to a given number.'
  },
  {
    title: 'The SIM Hijackers',
    coverimg: 'https://video-images.vice.com/articles/5b324d2cf3af8d00076a6d11/lede/1530023267166-hackers_motherboard5.jpeg?crop=0.9977777777777778xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A',
    frontPageSummary: 'Meet the hackers who flip seized Instagram handles and cryptocurrency in a shady, buzzing underground market for stolen accounts and usernames. Their victims’ weakness? Phone numbers.',
    content: 'It seemed like any other warm September night in the suburbs of Salt Lake City. Rachel Ostlund had just put her kids to bed and was getting ready to go to sleep herself. She was texting with her sister when, unexpectedly, her cell phone lost service. The last message Rachel received was from T-Mobile, her carrier. The SIM card for her phone number, the message read, had been “updated.”'
  }
];

Articles.create(newArticles);
