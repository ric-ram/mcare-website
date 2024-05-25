import { addDoc, collection, getDocs } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { db } from './config';

async function addData(collectionId, data) {
  try {
    const docRef = await addDoc(collection(db, collectionId), data);
    return NextResponse.json({
      message: `Document written with ID: ${docRef.id} in collection ${collection}`,
    });
  } catch (e) {
    NextResponse.json({
      error: `Error adding document: ${e}`,
    });
  }
}

async function getTestimonials() {
  const snapshot = await getDocs(collection(db, "testemunhos"));

  const testimonials = [];
  snapshot.forEach((doc) => {
    testimonials.push({ id: doc.id, ...doc.data() })
  });

  return testimonials;
}

export { addData, getTestimonials };
