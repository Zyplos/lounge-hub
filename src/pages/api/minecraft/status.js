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

  const vanillaData = await getServerData(process.env.NEXT_PUBLIC_MCIP, 25565);
  const moddedData = await getServerData(process.env.NEXT_PUBLIC_MCMODDEDIP, 25577);

  res.json({ vanilla: vanillaData, modded: moddedData });
};
