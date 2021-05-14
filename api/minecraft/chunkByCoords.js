const mysql = require("mysql2/promise");

module.exports = async (req, res) => {
  const { x, z } = req.query;

  if (!x || !z) {
    res.json({ error: "Chunk X and Z must be specified." });
  }

  if (isNaN(parseInt(x)) || isNaN(parseInt(z))) {
    res.json({ error: "Chunk X and Z must be numbers." });
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
          "SELECT chunk_id, BIN_TO_UUID(player_id) AS player_id, name, claimed_on, x, z," +
            "BIN_TO_UUID(dimension) AS dimension " +
            "FROM chunks JOIN players USING (player_id) WHERE x=? AND z=?",
          [x, z]
        )
        .then(([rows, fields]) => {
          res.json({ data: rows });
        })
        .catch((error) => {
          console.error("===========CONNECTION ERROR", error);
          res.json({ error: error.toString() });
        });
    })
    .catch((error) => {
      console.error("===========CREATECONNECTION ERROR", error);
      res.json({ error: error.toString() });
    });
};
