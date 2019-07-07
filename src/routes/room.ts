import { Router } from "restify-router";
import { 
	getAllPublicRooms
} from "./controllers/room";

const roomRouter = new Router();

roomRouter.get("/room", getAllPublicRooms);

export default roomRouter;

