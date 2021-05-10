// use this if a server below 1.15 is doing that weird thing where ./status doesnt ping it correctly
const util = require("minecraft-server-util");
const motdparser = require("mcmotdparser");

module.exports = async (_req, res) => {
  const getServerData = async (ip) => {
    return util
      .status(ip, {
        enableSRV: true,
        timeout: 5000,
      })
      .then((response) => {
        motdparser.toHtml(
          response.description.descriptionText,
          (err, htmlText) => {
            response.description.html = htmlText;
          }
        );

        return response;
      })
      .catch((error) => {
        return error;
      });
  };

  const vanillaData = await getServerData("mc.zyand.co");
  const moddedData = await getServerData("modded.zyand.co");

  Promise.allSettled([vanillaData, moddedData]).then((results) => {
    res.json({ vanilla: results[0].value, modded: results[1].value });
  });
};
