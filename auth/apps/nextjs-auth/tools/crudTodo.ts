import firebase_app from "./firebase";
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'

const db = getFirestore(firebase_app)

const todoCol = 'todos'

export async function addTodo(text: string) {
  try {
    const docRef = await addDoc(collection(db, todoCol), {
      text
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);

  }
}

export type TodoType = { id: string, data: { text: string } }

export async function getTodo() {
  const querySnapshot = await getDocs(collection(db, todoCol));
  let data: TodoType[] = []
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, data: { text:doc.data().text } });
  });
  return data
}