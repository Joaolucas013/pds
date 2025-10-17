


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

static async pesquisarMotorista(req, res){
    try {
        const {id} = req.params;
        const motorista = await motoristaService.pesquisa(id);
    } catch (error) {
         return res.status(404).json({
                message: 'Motorista não encontrado.'
            });
    }
}

static async atualizarMotorista(req, res){
    try {
        const{id} = req.params;
        const dadosAtualizados = req.body;

        const foiAtualizado = await motoristaService.atualizar(id, dadosAtualizados);

        if(!foiAtualizado){
          return res.status(404).json({
                message: 'Motorista não encontrado ou nenhum dado alterado.'
            });
        }
        res.status(200).json({
            message: 'Motorista atualizado com sucesso.', 
            foiAtualizado
        })

    } catch (error) {
       return res.status(500).json({
            message: 'Erro interno ao atualizar o motorista.',
            error: error.message})
        
    }
}

static async deletarMotorista(req, res){
    try {
        const {id} =  req.params;
      
        const deletado = await motoristaService.deleta(id);
        if(!deletado){
            res.status(404).json({
                message: 'Motorista não encontrado'
            })
        }

        return res.status(200).json({
            message: `motorista ${id} deletad0 com sucesso`
        })
    } catch (error) {
            return res.status(500).json({
            message: 'Erro interno ao deletar motorista.',
            error: error.message})
    }
}



}

module.exports = MotoristaController;

