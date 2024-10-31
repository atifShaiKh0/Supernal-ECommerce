import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getProduct = async ({ id }) => {
  const data = await getDoc(doc(db, `products/${id}`));
  if (data.exists()) {
    console.log(data.data());
    return data.data();
  } else {
    return null;
  }
};
