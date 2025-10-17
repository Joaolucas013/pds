const database = require('../models');




class VeiculoService {


    static async salvar(dados){
        try {
            const newVeiculo = await database.Veiculo.create(dados);
            return newVeiculo;
        } catch (error) {
              throw new Error(`Erro ao criar motorista: ${error.message}`);
        }
    }


    static async buscar(id){
        try {
            const veiculo = await database.Veiculo.findByPk(id);
            return veiculo;
        } catch (error) {
              throw new Error(`Erro ao acessar o banco: ${error.message}`);
        }
        
    }

        static async atualizarVeiculo(id, dados){
            try {
                const atualizado = await database.Veiculo.update(dados, {
                    where: {
                        id:id
                    }
                })
                if(!atualizado>0){
                throw new Error(`Erro ao atualizar o veiculo: ${error.message}`);
                }
            } catch (error) {
                 throw new Error(`Erro ao acessar o banco: ${error.message}`);
            }

            return true;
        }

        static async deletarVeiculo(id){
            try {
                const deletar = await database.Veiculo.destroy({
                    where: {
                        id:id
                    }
                })
            } catch (error) {
                  throw new Error(`Erro ao acessar o banco: ${error.message}`);
            }

            return true;
        }

}

module.exports = VeiculoService;