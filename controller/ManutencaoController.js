
const manutencaoService = require('../service/ManutencaoService');

class ManutencaoController{



    static async cadastrar(req, res){
        try {
            const dados = req.body;
            const novaManutencao =  await manutencaoService.create(dados);
           
            if(novaManutencao !== null){
                res.status(200).json({
                    message: 'Manutencão cadastrada com sucesso.', 
                    manutencao: novaManutencao
                })
            }

        } catch (error) {
            res.status(500).json({
                message: 'erro ao cadastrar manutenção.'
            })
        }
    }
    static async listar(req, res){
        try {

            const manutencoes = await manutencaoService.listar();
            res.status(200).json({ 
                message: 'Lista de manutenções',
                manutencoes: manutencoes
            })
        } catch (error) {
            res.status(500).json({
                message: 'erro ao listar manutenções.'
            })
        }
    }
  
    static async buscarPorId(req, res){
        try {
            const { id } = req.params;  
            const manutencao = await manutencaoService.buscarPorId(Number(id));
            res.status(200).json({
                message: 'Manutenção encontrada',
                manutencao: manutencao
            })
        }
            catch (error) {
            res.status(500).json({
                message: 'erro ao buscar manutenção.'
            })
        }
    }
    static async atualizar(req, res){
        try {
            const { id } = req.params;
            const dadosAtualizados = req.body;
            const manutencaoAtualizada = await manutencaoService.atualizar(id, dadosAtualizados);
        
            if (manutencaoAtualizada) {
                res.status(200).json({
                    message: 'Manutenção atualizada com sucesso.',
                    manutencao: manutencaoAtualizada
                });
            } 
        } catch (error) {
            res.status(500).json({
                message: 'erro ao atualizar manutenção.'
            });
        }
    }

    static async deletar(req, res){
        try {   
            const { id } = req.params;
            const deletado = await manutencaoService.deletar(Number(id));
           
            if (!deletado) {
                 res.status(404).json({
                    message: 'Manutenção não encontrada.'
                });
            }
             res.status(200).json({
                message: `Manutenção ${id} deletada com sucesso`
            });
        } catch (error) {
             res.status(500).json({
                message: 'Erro interno ao deletar manutenção.',
                error: error.message
            });
        }
    }
    
}

module.exports = ManutencaoController