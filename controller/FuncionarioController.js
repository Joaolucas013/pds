

const funcionarioService = require('../service/FuncionarioService.js');


class FuncionarioController {

    static async cadastrar(req, res){
        try {
            const dados = req.body;
            const novoFuncionario =  await funcionarioService.salvar(dados);
            return res.status(200).json({
                message: 'funcionario cadastrado com sucesso.',
                novoFuncionario
            })
        } catch (error) {
             res.status(500).json({
            message: 'Erro no servidor'
          })
        }
    }
}

module.exports = FuncionarioController;