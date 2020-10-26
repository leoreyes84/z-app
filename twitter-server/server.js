const express = require('express');
const Twitter = require('twit');
 
const app = express();
const client = new Twitter({
  consumer_key: 'KRy7l0v8wex3w8Sy5zThai3Ea',
  consumer_secret: 'X2eBm0Y21kYEuR74W3Frqc2JVIizOj8Q1EVGatDsEVVEJo0ucu',
  access_token: '1220032047516921859-otvXjhExyUTZ5GLxssc9h5ORqtPZja',
  access_token_secret: 'tmJKqM4ORfQW6CH7wIVV8uKNpmSEmeFAP8lYwGb19uYjj'
});
 
 
app.use(require('cors')());
app.use(require('body-parser').json());

app.get('/user_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 5, screen_name: req.query.screen_name };
   
    client
      .get(`statuses/user_timeline`, params)
      .then(timeline => {
         
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
      
});
 
app.listen(3000, () => console.log('Server running'));