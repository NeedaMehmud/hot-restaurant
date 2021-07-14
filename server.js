const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
// this will later be the object to store our tables
const tables = [
    {},
    {},
    {},
    {},
    {},
];
const waitlist = []

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get ('/', function(req, res){
    // res.sendFile(path.join(__dirname, "index.html"))
    console.log('Home Page has been initialized!');
})

app.get ('/reserve', function(req, res){
    // res.sendFile(path.join(__dirname, "reserve.html"))
    console.log('Make a reservation');
})

app.get ('/tables', function(req, res){
    // res.sendFile(path.join(__dirname, "viewtables.html"))
    console.log('View tables');
})

app.get ('/api/tables', function(req, res) {
    // res.json(tables);
    
    console.log('Tables API call');
})

app.get ('/api/waitlist', function(req, res){
    // res.json(waitlist);
    console.log('Waitlist API call');
})



app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`);
});