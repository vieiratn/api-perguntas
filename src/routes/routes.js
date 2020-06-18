const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router();

router.get('/', controllers.getPadrao);
router.get('/api', controllers.getApi);

module.exports = router;