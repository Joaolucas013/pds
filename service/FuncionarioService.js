const database = require('../models');
const setor = require('./SetorService.js')


class FuncionarioService {

    static async salvar(dados) {

        try {
           
             const { setor_id } = dados;

            const setorId = await setor.buscarPeloId(setor_id)

            if (setorId === null) {
                  throw error;
            }

             const func = await database.Funcionario.create(dados);
            return func;
        } catch (error) {
             throw error;
        }

    }

    static async listar() {
        const funcionarios = await database.Funcionario.findAll();



        if (funcionarios !== null) {
            return funcionarios;
        } else {
            return null;
        }
    }


    static async pesquisarFuncionario(nomeFuncionario) {

        const funcionario = await database.Funcionario.findOne({
            where: {
                nome: nomeFuncionario
            }
        });
        if (funcionario !== null) {
            return funcionario;
        } else {
            return null;
        }
    }




    static async update(dados) {
        const { id } = dados;

        const [funcAtualizado] = await database.Funcionario
            .update(dados, {
                where: { id: Number(id) }
            });

        return funcAtualizado > 0;

    }

    static async deletar(id) {

        const funcionarioExists = await database.Funcionario.findByPk(id);


        if (funcionarioExists !== null) {

            const funcionarioDeletado = await database.Funcionario.destroy({
                where: { id: id }
            });

            return funcionarioDeletado > 0;
        } else {
            return null;
        }


    }
}




module.exports = FuncionarioService;
