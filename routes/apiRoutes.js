let path = require("path");
let fs = require("fs");

let notes = require("../db/db.json")
module.exports = function (app) {
	app.get("/api/notes", function (req, res) {
		// notes = fs.readFile("../db/db.json", (err, data) => {
		// 	if (err) throw err;
		// 	return data;
		// }).then(function () { })
		// let notesID = notes.forEach(element => {
		// 	element.id == index(element);
		// });
		res.json(notes);
	})

}