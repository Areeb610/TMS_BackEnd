const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'b33vxkvw5a0tehhn3tpz-mysql.services.clever-cloud.com',
    user : 'uwnupv3cw9w4sckd',
    password : 'K1pPM9JaPqwTL1Pn25lV',
    database : 'b33vxkvw5a0tehhn3tpz',
    port: 3306
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connection to database successful!');
}
);

module.exports = {connection};
