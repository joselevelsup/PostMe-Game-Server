import * as restify from "restify";
import * as path from "path";
import { createConnection } from "typeorm";
import roomRouter from "./routes/room";

const server : any = restify.createServer({
	name: "PostMe API",
	version: "0.0.1"
});

roomRouter.applyRoutes(server);

createConnection().then(() => {
	server.listen(8080, () => {
		console.log("server running");
	})
}).catch((err: any) => {
	console.log(err);
})
