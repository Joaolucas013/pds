


const motoristaService = require("../service/MotoristaService.js");

class MotoristaController {

 static async salvar(req, res) {
try {
    const motoristaCriado = await motoristaService.criar(req.body);
    const {data_demissao, situacao, ...dados} = motoristaCriado.dataValues;
    res.status(200).json({
        message: 'Motorista criado com sucesso!',
        motorista: dados
    })
} catch (error) {
    throw error;
}
}



}

module.exports = MotoristaController;