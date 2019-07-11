import * as restify from "restify";
import * as mongoose from "mongoose";
import rjwt = require("restify-jwt-community");
import roomRouter from "./routes/room";
// import authRouter from "./routes/auth";

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

// authRouter.applyRoutes(server);
roomRouter.applyRoutes(server);

mongoose.connect("mongodb://localhost:27017/postme", { useNewUrlParser: true });

server.listen(8080);



export default server;
