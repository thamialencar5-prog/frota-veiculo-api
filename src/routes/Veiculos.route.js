import { Router } from "express";
import { veiculosService} from "../services/Veiculo.service.js"

export const veiculosRouter = Router()

veiculosRouter.get("/", async (req, res) => {
    try {
        const veiculo = await veiculosService.listarveiculos()
        res.json(veiculo);
    }catch (error) {
        console.error(error);
    }
});
veiculosRouter.post("/", (req, res) => {
    const veiculos = await veiculosService.create(req, body);
    return res.status(201).json(veiculos);
});

