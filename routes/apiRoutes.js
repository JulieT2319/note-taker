let path = require("path");
let fs = require("fs");

//let notes = require("../db/db.json")
module.exports = function (app) {

	app.get("/api/notes", function (req, res) {
		fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (err, data) {
			if (err) {
				return err;
			}
			console.log(data);
			notes = JSON.parse(data);
			res.json(notes);
		});
		// res.json(notes);
		// console.log(notes);
	})
	app.post("/api/notes", function (req, res) {
		let currentNote = req.body;
		notes.push(currentNote)
		let notesIDs = [];
		let maxID = 0;
		for (i = 0; i < notes.length; i++) {
			if (notes[i].id) {
				notesIDs.push(notes[i].id);
				if (notes[i].id >= maxID) {
					maxID = notes[i].id
				}
			} else {
				notes[i].id = maxID + 1
			}
		}
		fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
		});
	})


}