import { addDoc, collection } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "./config";

async function addData(collectionId, data) {
	try {
		const docRef = await addDoc(collection(db, collectionId), data);
		return NextResponse.json({
			message: `Document written with ID: ${docRef.id} in collection ${collection}`
		});
	} catch (e) {
		NextResponse.json({
			error: `Error adding document: ${e}`,
		});
	}
}

export { addData };

