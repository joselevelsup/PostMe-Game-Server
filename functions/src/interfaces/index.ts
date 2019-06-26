export enum GameStatus {
	Started = "started",
	Completed = "completed"
}

export interface IMessage {
	toUser: string;
	fromUser: string;
	timestamp: string;
	roomNumber: string;
} 

export interface IUserSettings { 
	messages: object;
	friends: object;
	gamesPlayed: Number;
}

export interface IGame {
	currentRound?: Number;
	rounds: Number;
	gameStatus?: GameStatus;
}

export interface IRoom {
	roomNumber: string;
	passwordEnabled: boolean;
	password?: string;
	members?: object;
	isPrivate?: boolean; 
	roomType: string;
	game?: IGame;
}

