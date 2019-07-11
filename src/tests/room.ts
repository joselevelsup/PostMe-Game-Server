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
			roomType: RoomType.Public,
			passwordEnabled: false
		}).end((err: any, res: any) => {
			if(err){
				done(err);
			} else {
				expect(res).to.have.status(200);
				expect(res.body).to.be.instanceOf(Object);
				expect(res.body.success).to.be.true;
				done();
			}
		});
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
				expect(res.body).to.be.instanceOf(Object);
				expect(res.body.room).to.be.instanceOf(Object);
				done();
			}
		});
	});

	it("should add a member to room", (done: any): void => {
		chai.request(server).put("/room/0a1b2c").send({
			userId: ""
		})
	})

	it("should make a private room", (done: any): void => {
		chai.request(server).post("/room").send({
			roomNumber: "01ab2d3",
			roomType: RoomType.Private,
			passwordEnabled: true,
			password: "thisIsAPassword"
		}).end((err: any, res: any) => {
			if(err){
				done(err);
			} else {
				expect(res).to.have.status(200);
				expect(res.body).to.be.instanceOf(Object);
				expect(res.body.success).to.be.true;
				done();
			}
		})
	})
});
