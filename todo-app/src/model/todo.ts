import pool from "../config/database";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export interface Todo {
  id: number;
  title: string;
  description: string | null;
  completed: boolean;
  created_at: Date;
  updated_at: Date;
}

export async function findAll(): Promise<Todo[]> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM todos ORDER BY created_at DESC",
  );
  return rows as Todo[];
}

export async function findById(id: number): Promise<Todo | null> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM todos WHERE id = ?",
    [id],
  );
  return rows.length > 0 ? (rows[0] as Todo) : null;
}

export async function create(
  title: string,
  description?: string,
): Promise<Todo> {
  const [result] = await pool.query<ResultSetHeader>(
    "INSERT INTO todos (title, description) VALUES (?,?)",
    [title, description ?? null],
  );
  return (await findById(result.insertId))!;
}

export async function update(
  id: number,
  data: { title?: string; description?: string; completed?: boolean },
): Promise<Todo | null> {
  const fields: string[] = [];
  const values: unknown[] = [];

  if (data.title !== undefined) {
    fields.push("title = ?");
    values.push(data.title);
  }

  if (data.description !== undefined) {
    fields.push("description = ?");
    values.push(data.description);
  }

  if (data.completed !== undefined) {
    fields.push("completed = ?");
    values.push(data.completed);
  }

  if (fields.length === 0) return findById(id);

  values.push(id);
  await pool.query(
    `UPDATE todos SET ${fields.join(",")}, updated_at = NOW() WHERE id = ?`,
    values,
  );
  return findById(id);
}

export async function remove(id: number): Promise<boolean> {
  const [result] = await pool.query<ResultSetHeader>(
    "DELETE FROM todos WHERE id = ?",
    [id],
  );
  return result.affectedRows > 0;
}
