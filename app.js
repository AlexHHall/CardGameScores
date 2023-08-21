const Express = require('express');
const app = Express();

app.use(Express.static('public'));

app.get('/dutchblitz', (req, res) => {
    res.sendFile(__dirname + '/public/dutchblitz.html');
    console.log('dutchblitz.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    console.log('dutchblitz.html');
});

app.listen(3000, ()=> {
    console.log('localhost:3000');
})