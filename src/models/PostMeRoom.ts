import { 
	Typegoose,
	prop
} from "typegoose";
import { RoomType } from "../utils";
import { Schema } from "mongoose"
// import { Messages } from "./Messages";

export class PostMeRoom extends Typegoose {
	
	@prop()
	roomNumber: string;

	@prop()
	roomType: RoomType;

	@prop()
	members?: Array<Schema.Types.ObjectId>;

	@prop()
	passwordEnabled: boolean;

	@prop()
	password?: string;

}

export const Room = new PostMeRoom().getModelForClass(PostMeRoom);
