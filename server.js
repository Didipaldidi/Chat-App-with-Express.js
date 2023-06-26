// require express and create a reference variable
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname)); // tell express.js that we will be using static file

var dbUrl = 'mongodb+srv://valdilaurentius:g2aIIRReH4aGW9gX@cluster0.l9uktyd.mongodb.net/';

// Configure multer to store uploaded images in the 'uploads' directory
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });

var upload = multer({storage: storage});
  
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Connected to the database');
    // Additional code here
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

var Message = mongoose.model('Message', { name: String, message: String, timestamp: { type: Date, default: Date.now }, image: String });

app.get('/messages', (req, res) => {
  Message.find({})
    .then((messages) => {
      res.send(messages);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});

app.post('/messages', upload.single('image'), (req, res) => {
    const message = new Message({
      name: req.body.name,
      message: req.body.message,
      image: req.file ? req.file.path : null
    });
    message
      .save()
      .then(() => {
        io.emit('message', message);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });

app.delete('/messages/:id', (req, res) => {
    const messageId = req.params.id;
    Message.findByIdAndRemove(messageId)
      .then(() => {
        io.emit('messageDeleted', messageId); // Emit an event to notify clients about the deleted message
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });


io.on('connection', (socket) => {
  console.log('a user is connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

var server = http.listen(3000, () => {
  console.log('server is running on port', server.address().port);
});