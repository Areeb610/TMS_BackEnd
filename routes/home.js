var express = require('express');
var router = express.Router();
const {connection} = require('../database/sql')

router.get('/',(req, res,) => {
    connection.query('SELECT * FROM tickets', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    }
    )
});

module.exports = router;

