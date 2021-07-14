const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
// this will later be the object to store our tables
const tables = [
    {
        tablenumber: '1',
        name: 'Tyler',
        phoneNumber: '123',
        email: 'tyler@tyler.com',
        id: '1',    
    },
    {
        tablenumber: '2',
        name: 'Tyler',
        phoneNumber: '123',
        email: 'tyler@tyler.com',
        id: '2',  
    },
    {   
        tablenumber: '3',
        name: 'Tyler',
        phoneNumber: '123',
        email: 'tyler@tyler.com',
        id: '3',  
    },
    {
        tablenumber: '4',
        name: 'Tyler',
        phoneNumber: '123',
        email: 'tyler@tyler.com',
        id: '4',  
    },
    {
        tablenumber: '5',
        name: 'Tyler',
        phoneNumber: '123',
        email: 'tyler@tyler.com',
        id: '5',  
    },
];

const waitlist = [
    {
        name: 'Tyler',
        phoneNumber: '123',
        email: 'tyler@tyler.com',
        id: '5',  
    }
]


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get ('/', function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
    console.log('Home Page has been initialized!');
})

app.get ('/reserve', function(req, res){
    res.sendFile(path.join(__dirname, "make-reservation.html"))
    console.log('Make a reservation');
})

app.get ('/tables', function(req, res){
    // res.sendFile(path.join(__dirname, "viewtables.html"))
    console.log('View tables');
})

app.get ('/api/tables', function(req, res) {
    res.json(tables);
    
    console.log('Tables API call');
})

app.get ('/api/waitlist', function(req, res){
    res.json(waitlist);
    console.log('Waitlist API call');
})



app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`);
});