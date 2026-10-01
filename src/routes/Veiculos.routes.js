import { Router } from "express";
import { veiculosService} from "../services/Veiculo.service.js"

export const veiculosRouter = Router()

veiculosRouter.getAll("/", async (req, res) => {
    try {
        const veiculo = await veiculosService.listarveiculos()
        res.json(veiculo);
    }catch (error) {
        console.error(error);
    }
});

