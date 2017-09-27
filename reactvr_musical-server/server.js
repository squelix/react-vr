const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/*
  The following headers are needed because the development server of React VR
  is started on a different port than this server.
  When the final project is published, you may not need this middleware
*/
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept")
    next();
});

const pusher = new Pusher({
    appId: '406635',
    key: '53f02bdfe6cccdb622b7',
    secret: 'd718cd5b9dfb6a35ad43',
    cluster: 'eu',
    encrypted: true,
});

app.post('/pusher/trigger', function(req, res) {
    pusher.trigger(req.body.channelName,
        'sound_played',
        { index: req.body.index },
        req.body.socketId );
    res.send('ok');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running on port ${port}`));