const fs = require('fs');
const path = require('path');


// this page you will do the app.get
module.exports = (app) => {

    
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));

});


// api routes
app.get('/api/notes/:id', (req, res) => {
    res.json(notes[req.params.id]);
});


app.post('/api/notes', (req, res) => {
    let saveInfo = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let newData = req.body;
    notes.push('newData');
    let uniqueId = (saveInfo.length).toString();
    newNote.id = uniqueId;
   





        fs.writeFileSync
            ('./db/db.json', JSON.stringify(saveInfo))


            res.json(newData);
        });

    };