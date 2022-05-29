import { getSession } from "next-auth/react";
import { getProfileData } from "../../../../firebase/fetchData";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/rest/v10";

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_BOT_TOKEN);

async function UserCB(req, res) {
  let cbProfile;
  let session;
  try {
    session = await getSession({ req });

    cbProfile = (await getProfileData(session.user.id)) || { error: "no data" };
  } catch (error) {
    // fail here send nothing
    console.error("Error getting cbData api/cb/user", error);
    res.status(500).json({ cb: { error: "session or cbData failed" }, d: { error: "cb failed" } });
  }

  try {
    const dresult = await rest.get(Routes.guildMember(process.env.DISCORD_LOUNGE_GUILD_ID, session.user.id));

    // send both since both succeeded
    res.json({ cb: cbProfile, d: dresult });
  } catch (error) {
    // if cb succeeded but discord failed, send at least cb data
    if (error.code === 10007) {
      res.json({ cb: cbProfile, d: null });
    } else {
      console.error("Error checking user in guild api/cb/user", error);
      res.json({ cb: cbProfile, d: { error: "guild check failed" } });
    }
  }
}

export default UserCB;
