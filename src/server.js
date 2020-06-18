const express = require('express');
const router = require('./routes/routes');

const app = express();
const serverPort = process.env.PORT || 3000;

app.use(router);

app.listen(serverPort, (er) => {
    if (er) {
        console.log(er);
    } else {
        console.log(`Servidor rodando na porta ${serverPort}.`);
    }
});