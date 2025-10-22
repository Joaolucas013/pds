const database = require('../models')

class MaterialService {


  static async criar(dados) {
    try {

      const{descricao} = dados;
      const materialExist = await this.buscarPorMaterial(descricao)
      if(materialExist === null){
        throw new Error('Material já cadastrado em nosso sistema')
      }
      const material = await database.Material.create(dados);
      return material;
      

    } catch (error) {
      throw new Error('erro ao cadastrar novo material')
    }
  }

  static async getAll() {
    try {
      const todosMateriais = await database.Material.findAll();
      return todosMateriais || [];
    } catch (error) {
      throw new Error(`Erro ao acessar o banco: ${error.message}`);
    }
  }

  static async atualizaQuantidade(dadosAtualizados) {

    const {quantidadeNova, id } = dadosAtualizados;
    const [listaMateriaisAtualizados] = database.Material.update({
       quantidadeEstoque: quantidadeNova
    }, {
      where: {
        id: id}
      });

       return listaMateriaisAtualizados = 0 ? false : true;
}

  static async deletar(id) {
    try {
      const materialDeletado = await database.Material.destroy({
        where: {
          id: id
        }
      })

      return materialDeletado > 0 ? true : false;
    } catch (error) {
      throw new Error(`Erro ao deletar material: ${error.message}`);
    }
  }

  static async buscarPorMaterial(material) {
    try {
      const materialGet = await database.Material.findOne({
        where: {
          descricao: material
        }
      });

      return materialGet;
    } catch (error) {
     throw new Error('erro ao buscar por material')
    }
  }

}


module.exports = MaterialService;