import {
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_NAME,
} from "./secretVariable";
import pkg from "pg";
import { userProps } from "./server";
const { Pool } = pkg;
export const pool = new Pool({
  host: DB_HOST,
  password: DB_PASSWORD,
  port: Number(DB_PORT),
  user: DB_USER,
  database: DB_NAME,
  ssl: { rejectUnauthorized: false },
});

export const userInsert = async (props: userProps): Promise<boolean> => {
  const { name, email, password, created_at } = props;
  const query =
    "INSERT INTO users (name, email, password, created_at) VALUES($1, $2, $3, $4)";
  try {
    const values = [name, email, password, created_at];
    await pool.query(query, values);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const selectUser = async (email: string): Promise<userProps | null> => {
  const query =
    "SELECT id, name, email, password, created_at FROM users WHERE email=$1";
  try {
    const req = await pool.query(query, [email]);
    return req.rows[0];
  } catch (err) {
    console.error(err);
    return null;
  }
};
