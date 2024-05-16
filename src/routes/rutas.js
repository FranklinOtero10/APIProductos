const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (request, response) => {
    const indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
    response.status(200).sendFile(indexPath);
})

router.get('/api', (request, response) => {
    const indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
    response.status(200).sendFile(indexPath);
})

router.get('*', (request, response) => {
    const indexPath = path.join(__dirname, '..', '..', 'public', 'error.html');
    response.status(404).sendFile(indexPath);
})


module.exports = router;