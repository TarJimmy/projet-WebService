const express = require('express');

const app = express();
const port = 3000;

/*
app.use(cors());
*/

app.get('/', (req,res) => 
{
    /* truc a faire */
});

app.listen(port, () => console.log('app running'));