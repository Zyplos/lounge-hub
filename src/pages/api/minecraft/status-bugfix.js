// use this if a server below 1.15 is doing that weird thing where ./status doesnt ping it correctly
const util = require("minecraft-server-util");

module.exports = async (_req, res) => {
  const getServerData = async (ip) => {
    return util.status(ip, undefined, {
      enableSRV: true,
      timeout: 7000,
    });
  };

  const vanillaData = getServerData(process.env.NEXT_PUBLIC_MCIP);
  const moddedData = getServerData(process.env.NEXT_PUBLIC_MCMODDEDIP);

  // await this allSettled and then send response instead of sending response in a .then()
  // script resolves without a "API resolved without sending a response" error
  const results = await Promise.allSettled([vanillaData, moddedData]);

  res.json({ vanilla: results[0].value || results[0].status, modded: results[1].value || results[1].status });
};
