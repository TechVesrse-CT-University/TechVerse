import mongoose from "mongoose"
import passportLocalMongoose from "passport-local-mongoose"

const Schema = mongoose.Schema
const InstituteSchema = new Schema({
    InstitutionCode :{
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    InstituteLocation  : {
        type: String,
        required: true,
    },
    AdminstratorName : {
        type: String,
        required: true,
    },
})

InstituteSchema.plugin(passportLocalMongoose)
const Institution = mongoose.model("Institution" , InstituteSchema)
export default Institution
