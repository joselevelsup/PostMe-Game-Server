import {
	Entity,
	Column,
	ObjectID,
	ObjectIdColumn
} from "typeorm";

@Entity()
export class RoomMessages {
	
	@ObjectIdColumn()
	id: ObjectID;

	@ObjectIdColumn()
	toUser: ObjectID;

	@ObjectIdColumn()
	fromUser: ObjectID;

	@Column()
	message: string;

	@Column()
	dateAndTime: Date;
}
