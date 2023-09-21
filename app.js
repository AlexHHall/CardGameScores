const Express = require('express');
const app = Express();

app.use(Express.static('public'));

app.get('/dutchblitz', (req, res) => {
    res.sendFile(__dirname + '/public/dutchblitz.html');
});

app.get('/fivecrowns', (req, res) => {
    res.sendFile(__dirname + '/public/fivecrowns.html');
});

app.get('/scum', (req, res) => {
    res.sendFile(__dirname + '/public/scum.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(3000, ()=> {
    console.log('localhost:3000');
})