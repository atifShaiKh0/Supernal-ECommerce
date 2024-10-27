import { db, storage } from "@/lib/firebase";
import {
  deleteDoc,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createNewAdmin = async ({ data, image }) => {
  if (!image) {
    throw new Error("Image is Required");
  }
  if (!data.name) {
    throw new Error("Name is required");
  }
  if (!data.email) {
    throw new Error("Email is required");
  }
  const newId = data?.email;
  const imageRef = ref(storage, `admins/${newId}`);
  await uploadBytes(imageRef, image);
  const imageUrl = await getDownloadURL(imageRef);

  await setDoc(doc(db, `admins/${newId}`), {
    ...data,
    id: newId,
    imageURL: imageUrl,
    timestampCreate: Timestamp.now(),
  });
};
export const updateAdmin = async ({ data, image }) => {
  if (!data.name) {
    throw new Error("Name is required");
  }
  if (!data?.id) {
    throw new Error("Id is required");
  }
  if (!data?.email) {
    throw new Error("Email is required");
  }
  const id = data?.id;
  let imageURL = data?.imageURL;
  if (image) {
    const imageRef = ref(storage, `admins/${id}`);
    await uploadBytes(imageRef, image);
    imageURL = await getDownloadURL(imageRef);
  }
  if (id === data?.email) {
    await updateDoc(doc(db, `admins/${id}`), {
      ...data,
      imageURL: imageURL,
      timestampUpdate: Timestamp.now(),
    });
  } else {
    throw new Error("Haha.. You can't change admin's Email");
  }
};

export const deleteAdmin = async ({ id }) => {
  if (!id) {
    throw new Error("Id is required");
  }
  await deleteDoc(doc(db, `admins/${id}`));
};
