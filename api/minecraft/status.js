const { ping } = require("minecraft-server-ping");
const motdparser = require("mcmotdparser");

module.exports = async (req, res) => {
  const getServerData = async (ip, port) => {
    const data = ping(ip, port)
      .then((response) => {
        var html = "";
        motdparser.toHtml(response.description.text, (err, res) => {
          html = res;
        });
        response.description.html = html;
        return response;
      })
      .catch(() => {
        return {
          error: "Seems to be offline right now.",
        };
      });
    return data;
  };

  const vanillaIp =
    process.env.NODE_ENV === "development" ? "192.168.1.149" : "mc.zyand.co";
  const moddedIp =
    process.env.NODE_ENV === "development" ? "localhost" : "mc.zyand.co";

  const vanillaData = await getServerData(vanillaIp, 25565);
  const moddedData = await getServerData(moddedIp, 25577);

  res.json({ vanilla: vanillaData, modded: moddedData });
};
