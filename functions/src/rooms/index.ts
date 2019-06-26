import * as functions from "firebase-functions";
import { database } from "firebase-admin";
import { IRoom } from "../interfaces";

export const createARoom = (data: IRoom, context: any) => {
	const roomDb = database().ref("/rooms");
	roomDb.push({
		roomNumber: data.roomNumber,
		passwordEnabled: data.passwordEnabled,
		password: data.password,
		roomType: data.roomType
	}).then(() => {
		console.log("room created");
	});
};

export const onRoomCreation = (snapshot: functions.database.DataSnapshot, context: any) => {
	const originalData = snapshot.val();
	const newData = {
		...originalData, 
		members: {
			0: context.auth.uid
		}
	};
	console.log(newData);
	console.log("creating after created");
	return snapshot.ref.parent.child(`${context.params.roomId}`).set(newData);
}
