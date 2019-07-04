import * as restify from "restify";
import { ExampleCtrl } from "./controllers";
import "reflect-metadata";

const server : any = restify.createServer({
	name: "PostMe API",
	version: "0.0.1"
});

server.get("/", ExampleCtrl.example);

server.listen(8080, () => {
	console.log("server running");
})
