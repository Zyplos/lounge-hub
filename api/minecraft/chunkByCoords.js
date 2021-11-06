const mysql = require("mysql2/promise");

module.exports = async (req, res) => {
  const { x, z, dimension } = req.query;

  if (!x || !z || !dimension) {
    res.json({ error: "Chunk X, Z, and dimension must be specified." });
  }

  if (isNaN(parseInt(x)) || isNaN(parseInt(z))) {
    res.json({ error: "Chunk X and Z must be numbers." });
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
          "SELECT chunk_id, BIN_TO_UUID(player_id) AS player_id, name, claimed_on, x, z," +
            "BIN_TO_UUID(dimension) AS dimension " +
            "FROM chunks JOIN players USING (player_id) WHERE x=? AND z=? AND dimension=UUID_TO_BIN(?)",
          [x, z, dimension]
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
