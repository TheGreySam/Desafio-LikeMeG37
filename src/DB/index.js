//import { findAllPosts } from "./connection.js";
import express from 'express';
import { connection } from "./connection.js";
//const express = require('express');

const app = express();

app.get("/todos", async (req, res) => {
    try {
        const todos = await connection.findAllPosts();
        return res.json(todos);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error" });
    }
});