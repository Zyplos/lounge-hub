import admin from "./index";

export const getProfileData = async (username) => {
  const db = admin.firestore();
  const profileCollection = db.collection("users");
  const profileDoc = await profileCollection.doc(username).get();

  if (!profileDoc.exists) {
    return null;
  }

  return profileDoc.data();
};
