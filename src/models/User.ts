import {
	Typegoose,
	prop
} from "typegoose";
import * as bcrypt from "bcrypt";

export class User extends Typegoose {
	
	@prop()
	firstName: string;

	@prop()
	lastName: string;

	@prop()
	email: string;

	@prop()
	username: string;

	@prop()
	password: string;

	@prop()
	generalScore: Number;

}

export const UserModel = new UserModel().getModelForClass(User);
