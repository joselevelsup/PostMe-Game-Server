import * as chai from "chai";
import chaiHttp = require("chai-http");
import server from "../server";
import { RoomType } from "../utils";
import "mocha";

chai.use(chaiHttp);

let expect: any = chai.expect;

describe("Rooms", (): void => {
	it("should create a public room", (done: any): void => {
		chai.request(server).post("/room").send({
			roomNumber: "0a1b2c",
			roomType: RoomType.Public
		}).end((err: any, res: any) => {
			if(err){
				done(err);
			} else {
				expect(res).to.have.status(200);
				done();
			}
		});
	});

	it("should create a private room", (done: any): void => {
		chai.request(server).post("/room").send({
			roomNumber: "1ab2c3",
			roomType: RoomType.Private
		}).end((err: any, res: any) => {
			if(err){
				done(err);
			} else {
				expect(res).to.have.status(200);
				done();
			}
		})
	});

	it("should get all public rooms", (done: any): void => {
		chai.request(server).get("/room/public").end((err: any, res: any) => {
			if(err){
				done(err);
			} else {
				expect(res).to.have.status(200);
				done();
			}
		});
	});

	it("should get a room", (done: any): void => {
		chai.request(server).get("/room/0a1b2c").end((err: any, res: any) => {
			if(err){
				done(err);
			} else {
				expect(res).to.have.status(200);
				done()
			}
		});
	});
});
