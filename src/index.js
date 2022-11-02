const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const moment = require('moment')
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://patelsatyam9827:b76wuy3TFrbOISnL@cluster0.bqjly5l.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use(
    function(req, res, next) {
        console.log(moment().format('YYYY MM DD, h:mm:ss'), ",", req.ip, req.path);

        next();
    }
);

app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});