import { pool } from "../DB/server.js";

const findAllPosts = async () => {
    const { posts } = await pool.query("SELECT * FROM posts");
    return posts
};

export const connection = {
    findAllPosts,
};