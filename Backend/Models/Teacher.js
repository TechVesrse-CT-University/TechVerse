import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const Schema = mongoose.Schema;
const TeacherSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  SubjectSpecialization: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  subject : {
    type: String,
    required: true,
  },
  content: [
    {
      title: { type: String, required: true },
      description: { type: String, },
      date: { type: Date, default: Date.now },
      file: { type: Buffer }, // Stores the file data in buffer format
      fileType: { type: String }, // Stores the MIME type of the file (e.g., image/png, application/pdf)
    },
  ],
});

TeacherSchema.plugin(passportLocalMongoose);

const Teacher = mongoose.model("Teacher", TeacherSchema);
export default Teacher;