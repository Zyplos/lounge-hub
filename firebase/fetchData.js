import admin from "./index";

export const getProfileData = async (discordID) => {
  const dbRef = admin.database().ref();
  const snapshot = await dbRef.child("loungeusers").child(discordID).get();

  if (!snapshot.exists()) {
    return null;
  }

  const data = snapshot.val();
  data.vc = true;
  await dbRef.child("loungeusers").child(discordID).set(data);

  return snapshot.val();
};
