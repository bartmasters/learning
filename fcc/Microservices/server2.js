let express = require('express');
let mongo = require('mongodb');
let mongoose = require('mongoose');

let cors = require('cors');

let app = express();
const MONGO_URI =
  'mongodb+srv://bart:diamondbart@cluster0-1tojs.mongodb.net/test?retryWrites=true&w=majority';

// Basic Configuration
let port = process.env.PORT || 3000;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const urlSchema = new Schema({
  sourceUrl: String,
  shortUrl: Number
});
const ShortUrl = mongoose.model('ShortUrl', urlSchema);

app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use(express.urlencoded());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index2.html');
});

// your first API endpoint...
app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

app.post('/api/shorturl/new', (req, res) => {
  let originalUrl = req.body.url;
  let findIt = ShortUrl.find()
    .sort({ shortUrl: -1 })
    .limit(1);
  findIt.exec((err, data) => {
    if (err) console.log(err);
    console.log(data);
    let newUrl = data.shortUrl ? data.ShortUrl++ : 1;
    const shortUrl = new ShortUrl({
      sourceUrl: originalUrl,
      shortUrl: newUrl
    });
    // shortUrl.save((err, data) => {
    //   if (err) console.log(err);
    // });

    console.log(shortUrl);
  });
  res.json({ original_url: originalUrl });
});

app.listen(port, () => {
  console.log('Node.js listening ...');
});
