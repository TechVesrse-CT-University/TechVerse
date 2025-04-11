import express from "express"
import mongoose from "mongoose"
import passport from "passport"
import session from "express-session" 
import TeacherRoutes from "./Routes/TeacherRoutes.js"
import StudentRoutes from "./Routes/StudentRoutes.js"
import InstitutionRoutes from "./Routes/InstituteRoutes.js"
import bodyParser from "body-parser"
import cors from "cors"
const app = express()
const PORT = process.env.PORT || 5000

// Middleware for parsing JSON
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/EduTech";
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err))

// CORS setup
app.use(cors())
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    credentials: true, // Allow cookies and credentials
  })
)

// Passport.js setup
app.use(
  session({
    secret: "MySecretKey", 
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use("/teacher", TeacherRoutes)
app.use('/student' , StudentRoutes)
app.use('/institution' , InstitutionRoutes)
  app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("Logged in successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});