const express = require('express')
const router = express.Router({ mergeParams: true })

const { CreateResultsPage, GetResultsPage } = require('../controllers/get_results');

router.post('/results', CreateResultsPage);
router.get('/results', GetResultsPage);
module.exports = router;