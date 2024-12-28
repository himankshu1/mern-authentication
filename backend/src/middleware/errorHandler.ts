import { ErrorRequestHandler, Response } from "express";

const errorHandler: ErrorRequestHandler = (error, req, res, next): any => {
    console.log(`PATH: ${req.path}`, error);
    return res.status(500).send("Internal server error");
};

export default errorHandler;
