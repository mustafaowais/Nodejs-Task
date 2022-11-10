const Pool = require('pg').Pool
const pool = new Pool({
    user: 'atwrjempymbayh',
    host: 'ec2-44-205-177-160.compute-1.amazonaws.com',
    database: 'db5nlqmn38ud51',
    password: 'dbfbfbdacd5a5437f8be4cfa7d0015cbc487242e8f7c3aa1046719b97fc89d8a',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;
