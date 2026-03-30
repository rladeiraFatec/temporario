import { Request, Response } from "express";
import query from "./db";
class SpentController {
public async create(req: Request, res: Response): Promise<void> {
const { iduser, description, value } = req.body;
const r:any = await query(
"INSERT INTO spents(iduser, description, value) VALUES ($1,$2,$3) RETURNING id",
[iduser, description, value]
);
res.json(r);
}
public async list(req: Request, res: Response): Promise<void> {
const { iduser } = req.body;
const r:any = await query(
"SELECT id,description,value FROM spents WHERE iduser=$1 ORDER BY id DESC",
[iduser]
);
res.json(r);
}
public async delete(req: Request, res: Response): Promise<void> {
const { id } = req.body; // id do registro a ser excluído
const r:any = await query(
"DELETE FROM spents WHERE id = $1", [id]
);
res.json(r);
}
public async update(req: Request, res: Response): Promise<void> {
const { id, description, value } = req.body;
const r:any = await query(
"UPDATE spents SET description=$2, value=$3 WHERE id=$1",
[id,description, value]
);
res.json(r);
}
}
export default new SpentController();