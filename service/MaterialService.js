const database = require('../models') 

class MaterialService {


    static async  criar(dados){
        try {
         const material = await database.Material.create(dados);
         return material;
        } catch (error) {
            throw  error;
        }
    }

    static async getAll(){
    try {
        const todosMateriais = await database.Material.findAll();
        return todosMateriais;
    } catch (error) {
        throw error(error.message)
    }
}

static async atualiza(id, dadosAtualizados){

const ListaMateriaisAtualizados = database.Material.update(dadosAtualizados, {
    where: {
        id: id
    }
});

if(!ListaMateriaisAtualizados[0] === 0){
return false
}
return true;
}

static async deletar(id){
try {
    const materialDeletado = await database.Material.destroy( {
        where: {
            id: id
        }
    })

    if(materialDeletado > 0){
      return true
      } else{
        return false
      }
} catch (error) {
    throw error;
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
      throw error;
    }
  }



}


module.exports = MaterialService;