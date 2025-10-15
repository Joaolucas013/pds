const database = require('../models');

class SetorService {

  static async salvarSetor(dados) {
    try {
      const novoSetor = await database.Setor.create(dados);
      return novoSetor;
    } catch (error) {
      throw new Error('Erro ao salvar: ' + error.message);
    }
  }

  static async listar() {
    try {
      const setores = await database.Setor.findAll({});
      return setores;
    } catch (error) {
      throw new Error('Erro: ' + error.message);
    }
  }

  static async  buscarPeloId(id){
    try {
        const setorBusca = await database.setor.findByPk(id);
        return setorBusca
    } catch (error) {
        
    }
  }

  static async atualiza(id, dados){
    try {
        
    } catch (error) {
        const dadosAtualizados = await database.Setor.update(dados,  {
            where: {
                id: id
            }
        } )
    }
  }

  static async deletarSetor(id){
    try {
        const deletado = await database.Setor.destroy({
            where: {
                id: id
            }
        })

        if(deletado > 0){
            
        }
    } catch (error) {
        
    }
  }



}

module.exports = SetorService;
