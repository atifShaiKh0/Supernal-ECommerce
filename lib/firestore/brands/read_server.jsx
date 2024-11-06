import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

// Helper function to convert Firestore timestamps
const convertTimestamps = (data) => {
  return {
    ...data,
    timestampCreate: data.timestampCreate?.toDate().toISOString(),
    timestampUpdate: data.timestampUpdate?.toDate().toISOString(),
  };
};

export const getBrand = async ({ id }) => {
  const data = await getDoc(doc(db, `brands/${id}`));
  if (data.exists()) {
    return convertTimestamps(data.data());
  } else {
    return null;
  }
};

export const getBrands = async () => {
  const list = await getDocs(collection(db, "brands"));
  return list.docs.map((snap) => convertTimestamps(snap.data()));
};
