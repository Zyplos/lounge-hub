const mysql = require("mysql2/promise");

module.exports = async (req, res) => {
  const { uuid } = req.query;

  if (!uuid) {
    res.json({ error: "UUID lookup for Chunks must be specified." });
  }

  mysql
    .createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: "loungeSurvival",
    })
    .then((connection) => {
      connection
        .execute(
          "SELECT chunk_id, BIN_TO_UUID(player_id) AS player_id, claimed_on, x, z," +
            "BIN_TO_UUID(dimension) AS dimension " +
            "FROM chunks WHERE player_id=UUID_TO_BIN(?)",
          [uuid]
        )
        .then(([rows, fields]) => {
          res.json({ data: rows });
        })
        .catch((error) => {
          console.error("===========CONNECTION ERROR", error);
          res.status(504).json({ error: error.toString() });
        });
    })
    .catch((error) => {
      console.error("===========CREATECONNECTION ERROR", error);
      res.status(504).json({ error: error.toString() });
    });
};
