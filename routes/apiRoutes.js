let path = require("path");
let fs = require("fs");


function readFileAsync(path, encoding) {
	return new Promise(function (resolve, reject) {
		fs.readFile(path, encoding, function (err, data) {
			if (err) {
				return reject(err);
			}

			resolve(data);
		});
	});
}
let notes = require("../db/db.json")
module.exports = function (app) {
	// notes = fs.readFile("../db/db.json", "utf8", function (err, data) {
	// 	if (err) {
	// 		return err;
	// 	}
	// 	console.log(data);
	// 	return data;
	// });
	app.get("/api/notes", function (req, res) {
		let idNotes = [];
		for (i = 0; i < notes.length; i++) {
			notes[i].id = i + 1;
		}


		res.json(notes);
		console.log(notes);

		fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
		});
	})



}