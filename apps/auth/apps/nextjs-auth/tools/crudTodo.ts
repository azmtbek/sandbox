import { getAuth } from "firebase/auth";
import firebase_app from "./firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc, } from 'firebase/firestore'

const db = getFirestore(firebase_app)
const auth = getAuth(firebase_app)

const usersCol = 'users'
const todosCol = 'todos'

export type TodoType = {
  id: string,
  orderId: number,
  complited: boolean,
  text: string,
}


export async function addTodo(todo: Omit<TodoType, 'id'>, userId: string) {
  const todosRef = collection(db, usersCol, userId, todosCol)

  try {
    const docRef = await addDoc(todosRef, {
      ...todo
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function deleteTodo(todoId: string, userId: string) {
  const todosRef = doc(db, usersCol, userId, todosCol, todoId)
  try {
    await deleteDoc(todosRef);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}
export type UpdateTodoType = {
  complited?: boolean,
  text?: string,
}
export async function updateTodo(todoId: string, userId: string, data: UpdateTodoType) {
  const todosRef = doc(db, usersCol, userId, todosCol, todoId)
  try {
    await updateDoc(todosRef, {...data});
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}


export async function getTodo(userId: string) {
  const todosRef = collection(db, usersCol, userId, todosCol)

  const querySnapshot = await getDocs(todosRef);
  let data: TodoType[] = []
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      text: doc.data().text,
      orderId: doc.data().orderId,
      complited: doc.data().complited
    });
  });
  data.sort((a, b) => +a.orderId - +b.orderId)
  return data
}