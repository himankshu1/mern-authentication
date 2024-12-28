import "dotenv/config";
import express, { Request, Response } from "express";
import { connectToDatabase } from "./config/db";
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler";
import catchErrors from "./utils/catchErrors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: APP_ORIGIN, credentials: true }));
app.use(cookieParser());

app.get(
    "/health",
    catchErrors(async (req, res, next) => {
        throw new Error("Some error....");
        return res.status(200).send("i am listening...");
    })
);

app.use(errorHandler);

app.listen(PORT, async () => {
    await connectToDatabase();
    console.log(`Server is running in ${NODE_ENV} environment at ${PORT}`);
});
