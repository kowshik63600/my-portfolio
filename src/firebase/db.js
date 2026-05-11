import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { app } from "./firebase.js";

const db = getFirestore(app);

// Add transaction
export const addTransaction = async(userId, data) => {
    await addDoc(collection(db, "transactions"), {
        ...data,
        userId,
        createdAt: new Date()
    });
};

// Get transactions
export const getTransactions = async(userId) => {
    const q = query(
        collection(db, "transactions"),
        where("userId", "==", userId)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};