const database = require('../models');



class FuncionarioService {


    static async salvar(dados){
        try {
            const func = await database.Funcionario.create(dados);
            return func;
        } catch (error) {
             throw new Error(`Erro ao acessar o banco: ${error.message}`);
        }
    }
}

module.exports = FuncionarioService;