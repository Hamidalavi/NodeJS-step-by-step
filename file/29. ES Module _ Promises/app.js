// const express = require("express");
// const responseHandler = require("./response-handler");
import express from "express";
import { handler } from "./response-handler.js";

const app = express();

app.get("/", handler);

app.listen(3000);

import { log } from "console";
log("Hamid");
