const perguntas = require('../database/perguntas');
const configs = require('../config/configs');

const controllers = {
    getPadrao: (req, res) => {
        return res.status(200).send(configs.data);
    },
    getApi: (req, res) => {
        let perguntaNum = configs.randInt(perguntas.length - 1);
        let pergunta = perguntas[perguntaNum];
        return res.status(200).send(JSON.stringify(pergunta));
    }
}

module.exports = controllers;