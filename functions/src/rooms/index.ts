import * as functions from "firebase-functions";
import * as bcrypt from "bcrypt";
import { database } from "firebase-admin";
import { IRoom } from "../interfaces";


export const createARoom = (data: IRoom, context: any) => {
	const roomDb = database().ref("rooms");
	return roomDb.push({
		roomNumber: data.roomNumber,
		passwordEnabled: data.passwordEnabled,
		password: data.passwordEnabled ? bcrypt.hashSync(data.password, 8) : null,
		roomType: data.roomType
	}).then(() => {
		console.log("room created");
	}).catch((err: any) => {
		console.log(err);
	});
};

export const getARoom = (req: functions.Request, res: functions.Response) : void => {
	const room = database().ref(`/rooms/${req.query.roomNumber}`);
	room.once("value").then((snapshot: functions.database.DataSnapshot) => {
		console.log(snapshot.val());
		res.status(200).json({
			"room": snapshot.val()
		});
	}).catch((err: any) => {
		console.log(err);
		res.status(500).json({
			"err": err
		});
	});
}

export const onRoomCreation = (snapshot: functions.database.DataSnapshot, context: any) => {
	const originalData = snapshot.val();
	const newData = {
		...originalData, 
		members: {
			member0: "someone"		
		}
	};
	
	return snapshot.ref.parent.child(`${context.params.roomId}`).set(newData).then((data) => {
		console.log(data);
	}).catch((err: any) => {
		console.log(err);
	});
}

