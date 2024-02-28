const express = require("express");
const mysql = require("mysql");
const app = express();

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const port = 3000;

app.get("/", (req, res) => {
  const connection = mysql.createConnection(config);

  let html = "<h1>Full Cycle</h1>";

  connection.query(`INSERT INTO people(name) values ('Victor')`);
  connection.query(`SELECT * FROM people`, (_, people) => {
    people.forEach((person) => (html = html.concat(`<p>${person.name}</p>`)));

    res.send(html);
  });

  connection.end();
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
