const { ping } = require("minecraft-server-ping");
const motdparser = require("mcmotdparser");

function backupMOTDParser(componentArray) {
  let output = "";
  componentArray.forEach((component) => {
    output += component.text;
    if (component.extra) {
      output += backupMOTDParser(component.extra);
    }
  });
  return output;
}

module.exports = async (req, res) => {
  const getServerData = async (ip, port) => {
    const data = ping(ip, port)
      .then((response) => {
        // if (response.description.text === "") {
        //   response.description.text = backupMOTDParser(
        //     response.description.extra
        //   );
        // }

        // var html = "";
        // motdparser.toHtml(response.description.text, (err, res) => {
        //   html = res;
        // });
        // response.description.html = html;
        return response;
      })
      .catch(() => {
        return {
          error: "Seems to be offline right now.",
        };
      });
    return data;
  };

  // const vanillaIp =
  //   process.env.NODE_ENV === "development" ? "192.168.1.163" : "mc.lounge.haus";
  // const moddedIp =
  //   process.env.NODE_ENV === "development" ? "192.168.1.163" : "mc.lounge.haus";

  const vanillaIp = "mc.lounge.haus";
  const moddedIp = "mc.lounge.haus";

  const vanillaData = await getServerData(vanillaIp, 25565);
  const moddedData = await getServerData(moddedIp, 25577);

  res.json({ vanilla: vanillaData, modded: moddedData });
};
