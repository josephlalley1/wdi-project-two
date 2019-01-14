![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Project 2: Honeypot

### Overview

Honeypot is a cyber security based blogging platform, allowing users to post their articles on the site for others to read and comment on. Each comment is moderated by the administrators before it is published to the site.

### Project Brief

Create a platform for reviewing racing circuits that meets the following technical requirements:

- Have at least 2 models – one representing a user and one that represents the main resource of your app.
- Include relationships - embedded or referenced.
- The app should include authentication.
- Have complete RESTful routes for at least one of your resources with all CRUD actions.
- Be deployed online and accessible to the public.

[**Heroku**](https://honeypot-app.herokuapp.com/articles)

[**GitHub Repository**](https://github.com/josephlalley1/wdi-project-two)



---

### Technologies:

For this project I have used the following technologies:

- EJS
- CSS3
- Bulma CSS Framework
- JavaScript(ES6)
- Git
- GitHub
- Heroku
- MongoDB
- Express
- Node.js


---

### My Project Screenshots
Front page:
<img width="1383" alt="front page" src="https://i.imgur.com/IfT3iOj.png">

Register page:
<img width="1383" alt="register page" src="https://i.imgur.com/nWb7ENl.png">

Log in page:
<img width="1383" alt="log in page" src="https://i.imgur.com/g8P04xG.png">

User profile page:
<img width="1383" alt="user profile page" src="https://i.imgur.com/N64bRkj.png">

Create an article page:
<img width="1383" alt="create article page" src="https://i.imgur.com/Nbvlgqh.png">

Show an article page:
<img width="1383" alt="show article page" src="https://i.imgur.com/Tr659Ct.png">

Edit an article page:
<img width="1383" alt="edit article page" src="https://i.imgur.com/K4pNzII.png">

Comment moderation page:
<img width="1383" alt="comment moderation page" src="https://i.imgur.com/NcsEsG0.png">


---

### Code Wins

This snippet below shows how the comment moderation worked in relation to the "Articles" model and the "comments" embedded schema.

```
comments: [{
  profilepic: { type: String },
  user: { type: String, required: true },
  content: { type: String },
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  moderated: { type: Number, default: 0, min: 0, max: 1 }
}]
```
It was a huge win as a comment was defaulted to 0, and where the comments were supposed to be shown on the Article show page, there was code that meant that they would only be shown if the value was equal to 1 (where it would be turned to 1 via the moderation page).

---

### Challenges and Problems

- Making the moderation system work was a huge challenge and understanding how I was going to approach the problem was a big thing. In the end, I added a field in the embedded schema of "comments" for articles to mark a comment as "moderated" or not.

---

### Wins

- Adding a moderation system for the comments was a big deal for me as I couldn't have a site that had some sort of a community feature, with anyone being able to comment whatever they like. I really enjoyed adding this feature in and I think it was huge personal win for this project.


---

### Future Features

Features I would have liked to include:

- I would like to add moderation to my articles, so that the Administrator (me)
can read over articles and check whether they are appropriate, as well as fitting
the site's content.

- I would also like to add a complete Administration panel where the amount of users,
posts and comments can be tracked, as well as the possibility for the Administrator
to approve / decline posts, as well as comments.

- Encryption of passwords using Bcrypt is something that will be looked into and
implemented as one of the first updates to Honeypot.
