import mongoose from "mongoose"
import passportLocalMongoose from "passport-local-mongoose"

const Schema = mongoose.Schema
const StudentSchema = new Schema({
    Name :{
        type: String,
        required: true,
    },
    StudentID: {
        type: String,
        required: true,
        unique: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Institution : {
        type: String,
        required: true,
    }, 
    Course : {
        type: String,
        required: true,
    },
})

StudentSchema.plugin(passportLocalMongoose)
const Student = mongoose.model("Student" , StudentSchema)
export default Student