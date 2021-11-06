const mysql = require("mysql2/promise");

module.exports = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    res.json({ error: "No player name specified." });
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
          "SELECT BIN_TO_UUID(player_id) AS player_id, name, joined, community_id, home_x, home_y, home_z, BIN_TO_UUID(home_dimension) AS home_dimension, home_hidden FROM players WHERE name=?",
          [name]
        )
        .then(([rows, fields]) => {
          if (rows.length > 0) {
            const homeHidden = rows[0].home_hidden;
            if (homeHidden) {
              rows[0].home_x = null;
              rows[0].home_y = null;
              rows[0].home_z = null;
              rows[0].home_dimension = "sneaky sneaky. nothing here";
            }
          }
          res.json({ data: rows });
        })
        .catch((error) => {
          res.status(504).json({ error: error });
        });
    })
    .catch((error) => {
      res.status(504).json({ error: error });
    });
};
