const course = require('./module/course');
const drizzle  = require('drizzle-orm/node-postgres');
const Pool = require('pg');
const courseSchema = require('./module/course');

const pool = new Pool({
  user: 'postgres',            // Or the custom user you created
  host: 'localhost',
  database: 'playground',           // Your database name
  password: 'postgres',    // Replace with your actual password
  port: 5432,                  // Default PostgreSQL port
});

const db = drizzle(pool);


db.connect()
.then(()=> console.log('connecting to postgres DB'))
.catch(err => console.error("Faild to connect to DB", err));


