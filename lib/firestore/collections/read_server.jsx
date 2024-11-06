import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

// Helper function to convert Firestore timestamps
const convertTimestamps = (data) => {
  return {
    ...data,
    timestampCreate: data.timestampCreate?.toDate().toISOString(),
    timestampUpdate: data.timestampUpdate?.toDate().toISOString(),
  };
};

export const getCollection = async ({ id }) => {
  const data = await getDoc(doc(db, `collections/${id}`));
  if (data.exists()) {
    return convertTimestamps(data.data());
  } else {
    return null;
  }
};

export const getCollections = async () => {
  const list = await getDocs(collection(db, "collections"));
  return list.docs.map((snap) => convertTimestamps(snap.data()));
};
