const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://usertwo:usertwo@atlascluster.qomyx.mongodb.net/?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
const AdminSchema = new Schema({

    username : String,
    pass : String
    
});

var Admindata = mongoose.model('admin',AdminSchema);

module.exports = Admindata;