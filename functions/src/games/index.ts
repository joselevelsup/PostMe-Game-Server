// import * as functions from "firebase-functions";
import { database } from "firebase-admin";
import { IRoom, GameStatus } from "../interfaces";

export const createAGame = (data: any, context: any) => {
	const gameDb = database().ref("/games");
	const gameData : IRoom = {
		roomNumber: data.roomNumber,
		passwordEnabled: data.passwordEnabled,
		roomType: data.roomType,
		game: {
			currentRound: 0,
			rounds: data.game.rounds,
			gameStatus: GameStatus.Started
		}
	};
	return gameDb.push(gameData).then(() => {
		console.log("game created");
	});
}

