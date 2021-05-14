const mysql = require("mysql2/promise");

module.exports = async (req, res) => {
  const { uuid } = req.query;

  if (!uuid) {
    res.json({ error: "No player name specified." });
  }

  mysql
    .createConnection({
      host:
        process.env.NODE_ENV === "development"
          ? "192.168.1.163"
          : "mc.zyand.co",
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: "loungeSurvival",
    })
    .then((connection) => {
      connection
        .execute(
          "SELECT BIN_TO_UUID(player_id) AS player_id, name, joined FROM players WHERE player_id=UUID_TO_BIN(?)",
          [uuid]
        )
        .then(([rows, fields]) => {
          res.json({ data: rows });
        })
        .catch((error) => {
          res.json({ error: error });
        });
    })
    .catch((error) => {
      res.json({ error: error });
    });
};
