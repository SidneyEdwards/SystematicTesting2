import { Pool } from "pg";

export const pool = new Pool({
user: "root",
password: "rootroot",
host: "localhost",
port: 3001,
database: "affirmations_db",
});