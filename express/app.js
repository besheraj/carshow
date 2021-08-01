import express from "express"
import mongoose from "mongoose"
import routes from "./routes/routes.js"
import dotenv from "dotenv"


const app = express();
dotenv.config()

// Json bodyparser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Route Middlewears
app.use('/api',routes)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION,
            { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Mongo DB Connected")
    }
    catch(err) {
        console.error(err);
    }
    app.listen(4000, () => console.log('Server is up and running'));
}

start()

