const veiculo =  require('./VeiculoService.js');
const motorista = require('./MotoristaService.js');
const database =  require('../models');
const manutencao = require('../models/manutencao.js');

class ManutencaoService{



    static async create(dados){

      const { motorista_id, veiculo_id, data_manutencao } = dados;

        try {
            const motoristaExists =  await motorista.pesquisarMotorista(motorista_id);
            const veiculoExists = await veiculo.buscar(veiculo_id);

            if(motoristaExists !== null && veiculoExists !==null){

                const newManutencao = await database.Manutencao.create({
                data_manutencao,
                fk_motorista: motorista_id,
                fk_veiculo: veiculo_id
             }
            );
              return newManutencao;
            }
        } catch (error) {
              throw new Error(`Erro ao cadastrar manutencão: ${error.message}`);
        }

        return null;
    }

    static  async listar(){
        try {
            const manutencoes = await database.Manutencao.findAll();    
           if(manutencoes !== null){
                return manutencoes;
           } else {
                return [];
           }
        } catch (error) {
            throw new Error(`Erro ao listar manutenções: ${error.message}`);
        }
    }


    static async buscarPorId(id){
        try {
            const manutencao = await database.Manutencao.findByPk(id);
            if(manutencao === null){
                return null;
            }
            return manutencao;
        } catch (error) {
            throw new Error(`Erro ao buscar manutenção: ${error.message}`);
        }       
    }

    static async atualizar(id, dadosAtualizados){
        try {   

            const { veiculo_id, motorista_id } = dadosAtualizados;

            if(veiculo_id !==null){
                 const veiculoExists = await veiculo.buscar(veiculo_id);

                 if(veiculoExists === null){
                    throw new Error(`Veículo ${veiculo_id} não encontrado.`);
                 }
            }


            if(motorista_id !== null){
                 const motoristaExists =  await motorista.pesquisarMotorista(motorista_id); 

                 if(motoristaExists === null){
                    throw new Error(`Motorista ${motorista_id} não encontrado.`);
                 }
            }


            const manutencaoExists = await this.buscarPorId(id);
            if(manutencaoExists === null){
                return false
            }

            const atualizado = await database.Manutencao.update(dadosAtualizados, {
                where: {
                    id_manutencao: id
                }
            });

            if (!atualizado > 0) {
                throw new Error(`Erro ao atualizar a manutenção: ${error.message}`);
            }
        } catch (error) {
            throw new Error(`Erro ao acessar o banco: ${error.message}`);
        }
        return true;
    }


    static async deletar(id){
        try {
           const manutencaoExists = await this.buscarPorId(id);
          
            if(manutencaoExists === null){
                return false;
            }   
            const deletar = await database.Manutencao.destroy({
                where: {
                    id_manutencao: id
                }
            });
        } catch (error) {
            throw new Error(`Erro ao acessar o banco: ${error.message}`);
        }
        return true;
    }


}


module.exports = ManutencaoService;