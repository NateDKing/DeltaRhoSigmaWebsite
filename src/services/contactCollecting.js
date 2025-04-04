import { collection, addDoc} from "firebase/firestore";
import { db } from "./firebase";

export class ContactInfo {
  constructor(first, last, email, phone, comment, newsletter) {
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.phone = phone;
    this.comment = comment;
    this.newsletter = newsletter;
  }
}

const contactToJson = (contact) => {
  return {
    first: contact.firstName,
    last: contact.lastName,
    email: contact.email,
    phone: contact.phone,
    comment: contact.comment,
    newsletter: contact.newsletter,
    submitDate: new Date().toISOString(),
  };
}

const contactCollection = collection(db, "contacts");

export const submitContact = async (contact) => {
  try {
    // await setDoc(doc(contactCollection, "contacts", contact.email), 'test');
    await addDoc(contactCollection, contactToJson(contact));
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
    console.log(contact);
    return false;
  }
}