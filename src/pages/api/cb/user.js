import { getSession } from "next-auth/react";
import { getProfileData } from "../../../firebase/fetchData";

async function UserCB(req, res) {
  const session = await getSession({ req });

  const profile = await getProfileData(session.user.id);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).json({ message: "no data" });
  }
}

export default UserCB;
