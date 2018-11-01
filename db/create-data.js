const env = require('../config/environment');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const Articles = require('../models/articles');
const User = require('../models/user');

Articles.collection.drop();
User.collection.drop();

const userData = [
  {
    profilepic: 'https://cdn3.iconfinder.com/data/icons/character/512/41-512.png',
    username: 'Administrator',
    email: 'admin@hp',
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
    },
    {
      title: '10 Years of the Blockchain: What Is Bitcoin, Really?',
      coverimg: 'https://video-images.vice.com/articles/5bd8c896595ea8000612d2d9/lede/1540935973418-GettyImages-1011245260.jpeg?crop=0.9986635797240575xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A',
      frontPageSummary: 'It’s been 10 years since someone going by the pseudonym Satoshi Nakamoto posted the white paper describing Bitcoin to a cryptography mailing list, and we are all very tired.',
      content: 'Whether you like it or not, the original cryptocurrency is a part of most of our lives now. If you’re not an ultra-libertarian net warrior yourself, then you’ve probably been exposed to someone babbling about blockchains at a party, or at a coffee shop, or on the news, or, god help you, around the dinner table. Even people who’ve never heard of Bitcoin can be affected by it—say, in the towns where the industry’s intense energy needs have suddenly become everybody’s problem.',
      addedBy: users[0]
    },
    {
      title: 'The SIM Hijackers',
      coverimg: 'https://video-images.vice.com/articles/5b324d2cf3af8d00076a6d11/lede/1530023267166-hackers_motherboard5.jpeg?crop=0.9977777777777778xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A',
      frontPageSummary: 'Meet the hackers who flip seized Instagram handles and cryptocurrency in a shady, buzzing underground market for stolen accounts and usernames. Their victims’ weakness? Phone numbers.',
      content: 'It seemed like any other warm September night in the suburbs of Salt Lake City. Rachel Ostlund had just put her kids to bed and was getting ready to go to sleep herself. She was texting with her sister when, unexpectedly, her cell phone lost service. The last message Rachel received was from T-Mobile, her carrier. The SIM card for her phone number, the message read, had been “updated.”',
      addedBy: users[0]
    },
    {
      title: 'How ‘Mr. Hashtag’ Helped Saudi Arabia Spy on Dissidents',
      coverimg: 'https://video-images.vice.com/articles/5bd742a90f03a20006492022/lede/1540835851715-Screen-Shot-2018-10-29-at-15643-PM.png?crop=1xw%3A0.8356481481481481xh%3Bcenter%2Ccenter&resize=2000%3A',
      frontPageSummary: 'Earlier this month, security researchers revealed that the Saudi Arabian government tried to hack a prominent Saudi dissident and human rights worker who lives in Canada.',
      content: 'This came just a few weeks after Amnesty International accused the country of using sophisticated spyware to hack one of its researchers. Then, the New York Times revealed that the Saudis have turned a Twitter employee into a spy who helped them keep tabs on digital rights activists by accessing their accounts and private messages.',
      addedBy: users[0]
    },
    {
      title: 'Russian Malware Was Apparently Used in an Attempt to Sabotage a Saudi Petrol Plant',
      coverimg: 'https://video-images.vice.com/articles/5bcf43295016250006b89f40/lede/1540310259299-shutterstock_624964346.jpeg?crop=0.9985185185185186xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A',
      frontPageSummary: 'The hackers who created a malware that is believed to have sabotaged a Saudi Arabia petrochemical plant last year were working for the Russian government, according to a new report by a cybersecurity firm.',
      content: 'Earlier this year, researchers revealed a new type of malware that reportedly could have made a Saudi plant explode. They called the malware Triton or Trisis. Now, security firm FireEye revealed in a blog post that the Russian government was behind Triton, after a German daily broke the news of the attribution.',
      addedBy: users[0]
    }
  ]).then(() => mongoose.connection.close());
});
