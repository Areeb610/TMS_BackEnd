var express = require('express');
var router = express.Router();
const {connection } = require('../database/sql');

router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM tickets', (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
});

router.put('/', (req, res) => {
    const { ticketId, forwardedTo, comment, status } = req.body;
    const sql = `UPDATE tickets SET Forwarded_To = ?, description = ?, status = ? WHERE ticket_id = ?`;
    connection.query(sql, [forwardedTo, comment, status, ticketId], (err, result) => {
        if (err) {
            res.status(400).json({ message: 'Error updating ticket' });
        } else {
            res.status(200).json({ message: 'Ticket updated successfully' });
        }
    });
});
module.exports = router;


