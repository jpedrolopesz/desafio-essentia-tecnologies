import { Request, Response } from "express";
import * as Todo from "../model/todo";

export async function getAll(req: Request, res: Response) {
  const todos = await Todo.findAll();
  res.json({ success: true, data: todos });
}

export async function getById(req: Request, res: Response) {
  const todo = await Todo.findById(Number(req.params.id));
  if (!todo)
    return res.status(404).json({ success: false, message: "Nao encontrado" });
  res.json({ success: true, data: todo });
}

export async function create(req: Request, res: Response) {
  const { title, description } = req.body;
  if (!title?.trim()) {
    return res
      .status(400)
      .json({ success: false, message: '"title" é obrigatorio' });
  }
  const todo = await Todo.create(title.trim(), description);
  res.status(201).json({ success: true, data: todo });
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id);
  const existing = await Todo.findById(id);

  if (!existing)
    return res.status(404).json({ success: false, message: "Nao encontrado" });

  const { title, description, completed } = req.body;
  const todo = await Todo.update(id, { title, description, completed });
  res.json({ success: true, data: todo });
}

export async function remove(res: Response, req: Request) {
  const deleted = await Todo.remove(Number(req.params.id));

  if (!deleted)
    return res.status(404).json({ success: false, message: "Nao encontrado" });
  res.json({ success: true, message: "Removido" });
}
