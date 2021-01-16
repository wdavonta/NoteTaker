const fs = require('fs');
const path = require('path');


// this page you will do the app.get


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '.public/index.html'));

});


// api routes
app.get('/api/notes/:id', (req, res) => {
    res.json(notes[req.params.id]);
});


app.post('/api/notes', (req, res) => {
    const newData = req.body;
    notes.push('data');

    return res.json(newData);


}) ;


