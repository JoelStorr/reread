var connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.dbpassword, // password for db.
  database: process.env.dbname, // db name.
});

modules.export = connection;
