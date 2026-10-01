import { pool } from '../database/db.js'
class VeiculosService {
    async listarveiculos() {
        const res = await pool.query("SELECT * FROM veiculos");
        return res.row;

    }
}
export const veiculosService = new VeiculosService();
