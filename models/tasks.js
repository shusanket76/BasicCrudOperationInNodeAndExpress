const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'you must provide a namesss'],
            trim:true
        },
        completed:Boolean,
    }
)

module.exports = mongoose.model("TASK", TaskSchema)