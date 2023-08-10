const Express = require('express');
const app = Express();

app.use(Express.static('public'));

app.listen(3000, ()=> {
    console.log('localhost:3000');
})