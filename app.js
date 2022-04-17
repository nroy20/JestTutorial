var express = require('express')

var app = express();

const PORT = 3000

app.get('/', function(req, res) {
    res.send("Hello World")
});

app.get('/hello', (req, res) => {
    res.send([1, 2, 3]);
})

app.listen(PORT, function() {
    console.log("Listening on port ", PORT)
})