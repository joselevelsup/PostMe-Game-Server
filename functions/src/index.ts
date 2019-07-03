import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";

import { IUserSettings } from "./interfaces";
import { 
	createARoom, 
	onRoomCreation, 
	getARoom 
} from './rooms';
import { createAGame } from "./games";

admin.initializeApp();

export const onUserCreated = functions.auth.user().onCreate(user => {
	const userDb = admin.database().ref(`/users/${user.uid}`);
	const defaultData : IUserSettings = {
		messages: [],
		friends: [],
		gamesPlayed: 0
	};

	userDb.set(defaultData).then(() => {
		console.log("added to db");
	}).catch(err => {
		console.log(err);
	});
});

export const createGame = functions.https.onCall(createAGame);
// export const createPost = functions.https.onCall(createAPost);
// export const seeAllPosts = functions.https.onCall(getAllPosts);

// Rooms
export const getRoom = functions.https.onRequest(getARoom);
export const createRoom = functions.https.onCall(createARoom);

export const onRoomCreate = functions.database.ref("/rooms/{roomId}").onCreate(onRoomCreation);

