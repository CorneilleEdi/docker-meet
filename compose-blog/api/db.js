require('dotenv').config();
const mongoose = require('mongoose');


const username= process.env.MONGODB_USER
const password = process.env.MONGODB_PASSSWORD
const host = process.env.MONGODB_HOST

console.log({username,password, host});

mongoose.connect(`mongodb://${host}/compose-blog`, {
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                            useFindAndModify: false,
                            useCreateIndex: true,
                            user: username,
                            pass: password,
                            "auth": { "authSource": "admin" },
                          });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("MongoDB Connected...");
});

module.exports = db
