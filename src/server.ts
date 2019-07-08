import * as restify from "restify";
import * as path from "path";
import { createConnection } from "typeorm";
import roomRouter from "./routes/room";

const server : any = restify.createServer({
	name: "PostMe API",
	version: "0.0.1"
});

server.use(restify.plugins.bodyParser());

roomRouter.applyRoutes(server);

createConnection().then(() => {
	server.listen(8080);
}).catch((err: any) => {
	console.log(err);
})



export default server;
