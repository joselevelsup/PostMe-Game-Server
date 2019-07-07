import {
	Entity, 
	ObjectIdColumn, 
	ObjectID, 
	Column, 
	BeforeInsert
} from "typeorm";
import * as bcrypt from "bcrypt";

@Entity()
export class User {

	@ObjectIdColumn()
	id: ObjectID;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	email: string;

	@Column()
	username: string;

	@Column()
	password: string;

	@Column()
	generalScore: Number;

	@BeforeInsert()
	encPass(){
		this.password = bcrypt.hashSync(this.password, 8);
	}

}
