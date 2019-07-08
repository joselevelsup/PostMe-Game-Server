import { 
	Entity,
	Column,
	ObjectID,
	ObjectIdColumn
} from "typeorm";
import { RoomType } from "../utils";
// import { Messages } from "./Messages";

@Entity()
export class PostMeRoom {
	
	@ObjectIdColumn()
	id: ObjectID;

	@Column()
	roomNumber: string;

	@Column()
	roomType: RoomType;

	@Column()
	members: Array<ObjectID>;

	// @Column(type => Array<Messages>)
	// messages: Array<Messages>
	
	constructor(roomNumber: string, roomType: RoomType, members: Array<ObjectID>){
		this.roomNumber = roomNumber;
		this.roomType = roomType;
		this.members = members || []
	}
}
