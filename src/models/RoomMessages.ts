import {
	Typegoose,
	prop
} from "typegoose";
import { Schema } from "mongoose";
export class RoomMessages extends Typegoose{

	@prop()
	toUser: Schema.Types.ObjectId;

	@prop()
	fromUser: Schema.Types.ObjectId;

	@prop()
	message: string;

	@prop()
	dateAndTime: Date;
}
