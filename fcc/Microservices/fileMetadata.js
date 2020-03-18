let express = require('express');
let cors = require('cors');
let multer = require('multer');
let upload = multer();

// require and use "multer"...

let app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index4.html');
});

app.get('/hello', (req, res) => {
  res.json({ greetings: 'Hello, API' });
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json({
    name: req.file.originalname,
    size: req.file.size
  });
});
app.listen(process.env.PORT || 3000, function() {
  console.log('Node.js listening ...');
});
