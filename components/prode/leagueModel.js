const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
	Nombre: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
	},
	PIN: {
		type: String,
		required: true,
	},
});

const model = mongoose.model("League", mySchema);
module.exports = model;
