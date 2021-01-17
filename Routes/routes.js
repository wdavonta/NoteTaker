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
app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.get('/api/notes/:id', (req, res) => {
    res.json(notes[req.params.id]);
});


app.post('/api/notes', (req, res) => {
    let saveInfo = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let newData = req.body;
    saveInfo.push(newData);
    let uniqueId = (saveInfo.length).toString();
    newData.id = uniqueId;
   





        fs.writeFileSync
            ('./db/db.json', JSON.stringify(saveInfo));
            console.log("new note", newData);


            res.json(saveInfo);
            

            
        });

    };