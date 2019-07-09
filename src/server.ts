import * as restify from "restify";
import { createConnection } from "typeorm";
import rjwt = require("restify-jwt-community");
import roomRouter from "./routes/room";
import authRouter from "./routes/auth";

const server : any = restify.createServer({
	name: "PostMe API",
	version: "0.0.1"
});

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.use(rjwt({
	secret: "shared-recipe"
}).unless({
	path: ["/login", "/signup"]
}));

authRouter.applyRoutes(server);

roomRouter.applyRoutes(server);

createConnection().then(() => {
	server.listen(8080);
}).catch((err: any) => {
	console.log(err);
})



export default server;
