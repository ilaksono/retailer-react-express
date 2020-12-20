const app = require('express')();
const bodyParser = require('body-parser');
const db = require('./pool');
const dbHelpers = require('./dbHelpers')(db);
app.use(bodyParser.json());


app.listen(8001, () => console.log('listening 8001'))

app.post('/items')