import { 
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    where
} from "firebase/firestore/lite";
import { db } from "./config";

const collectionRef = collection(db, 'tasks')

export const getTasks = async (priority) => {
    const q =  priority 
    ? query(collectionRef, where('priority', '==', priority))
    : collectionRef

    const data = await getDocs(q)

    return data.docs.map((d) => ({
        ...d.data(), id: d.id
    })) 
}

export const createTask = async (task) => {
    return addDoc(collectionRef, task)
}

export const updateTask = async (id, task) => {
    const taskDoc = doc(db, 'tasks', id)
    return updateDoc(taskDoc, task)
}

export const deleteTask = async (id, task) => {
    const taskDoc = doc(db, 'tasks', id)
    return deleteDoc(taskDoc, task)
}