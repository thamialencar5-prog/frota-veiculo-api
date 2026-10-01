import { Router } from "express";
import { veiculosService} from "../services/Veiculos.services.js"
export const veiculosRouter = Router()

veiculosRouter.get("/", async (req, res) => {
    const veiculos = await veiculosService.getAll();
    return res.json(veiculos);
});
veiculosRouter.post("/", async (req, res) => {
    const veiculos = await veiculosService.create(req.body);
    return res.json(201).json(veiculos);
});

