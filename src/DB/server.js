//import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';
//const express = require('express');
//const {Pool} = require('pg');
//const dotenv = require('dotenv');
const { Pool } = pkg;
dotenv.config();
//const app = express();
const port = process.env.PORT || 3000;

export const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,

});

try {
  await pool.query("SELECT NOW()");
  console.log(`Base de datos conectada en ${port}`);
} catch (error) {
  console.error(error);
}
/*
const getPosts = async () => {
    const result = await pool.query("SELECT * FROM posts")
    console.log(result)
}
getPosts()

/* const addPost = async (titulo, img, descripcion) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2)"
    const values = [titulo, img, descripcion]
    const result = await pool.query(consulta, values)
    console.log("Post Agregado")
}
addPost("title", "imagen", "descript") */

/*
app.use(express.json());
 
app.get('/api/registros', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM posts');
      res.json(result.rows);
    } catch (error) {
      console.error('Error al obtener posts:', error);
      res.status(500).json({ error: 'Error al obtener posts' });
    }
  });
  
  app.post('/api/registros', async (req, res) => {
    const { campo1, campo2 } = req.body;
  
    try {
      const result = await pool.query('INSERT INTO posts (campo1, campo2) VALUES ($1, $2) RETURNING *', [campo1, campo2]);
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error al almacenar post nuevo:', error);
      res.status(500).json({ error: 'Error al almacenar post nuevo' });
    }
  });
 
app.listen(port, () => {
  console.log(`Servidor encendido, puerto ${port}`)
});

*/