const itensService = require('../service/ItensService.js');

class ItensController{

    static async cadastrarItem(req, res){
      try {
        const dados = req.body;
       const  newItem =  await itensService.cadastrar(dados);
       
      } catch (error) {
        
      }
    }
}