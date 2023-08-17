var express = require('express');
var router = express.Router();
const {connection}= require('../database/sql');

router.get('/', function(req, res, next) {
    const query = `SELECT * FROM tickets WHERE status = 'forwarded'`;
    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error fetching initiated tickets:', err);
            res.status(500).send('Error fetching initiated tickets');
        }
        else {
            res.status(200).json(result);
        }
    }
)});

module.exports = router;


