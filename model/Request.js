const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
	//_id:{type:Object},
    userid: { type: Object, required: true },
    providerid: { type: Object, required: true }, 
	status: { type: String, required: true },
	created:{type:Date,required:true},
	file:{type:String,required:false},
	
});

module.exports = Request = mongoose.model('requests', requestSchema);


   