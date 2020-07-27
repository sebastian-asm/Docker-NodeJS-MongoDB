const express = require('express');
require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes/index.routes'));

app.listen(port, () => console.log(`Servidor en puerto ${port}`));
