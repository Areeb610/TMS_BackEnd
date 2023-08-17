var express = require('express');
var router = express.Router();
const {connection} = require('../database/sql');

router.post ('/', (req, res) => {
    const {
        title,
        description,
        status,
        initiated_by,
        due_date,
        forwardedTo
    } = req.body;
    console.log(req.body);

    const insertQuery = `INSERT INTO tickets (title, description, status, initiated_by, due_date, Forwarded_To) VALUES (?, ?, ?, ?, ?, ?)`;
    connection.query(insertQuery, [title, description, status, initiated_by, due_date, forwardedTo], (err, result) => {
        if(err) {
            console.error('Error initiating ticket', err);
            res.status(500).send('Error initiating ticket');
        }
        else {
            res.status(200).send('Ticket initiated successfully');
        }
    });
});

router.get('/', (req, res) => {
    const selectQuery = `SELECT * FROM tickets`;
    connection.query(selectQuery, (err, result) => {
        if(err) {
            console.error('Error fetching tickets', err);
            res.status(500).send('Error fetching tickets');
        }
        else {
            res.status(200).send(result);
        }
    });
});


module.exports = router;
