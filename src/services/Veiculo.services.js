class VeiculosService {
    async listarveiculos() {
        const res = await Pool.query("SELECT * FROM veiculos");
        return res.row;
    }

    async create(dados) {
        const res = await Pool.query("INSERT INTO veiculos RETURNING", [dadosveiculos]);
        return res.row(0);
    }
}
export const veiculosService = new VeiculosService();