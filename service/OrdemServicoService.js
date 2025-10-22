const manutencaoService = require('./ManutencaoService.js')
const database = require('../models');


class OrdemServicoService {

    // static async cadastrar(dados) {
    //     const { manutencao_id } = dados;
    //     const manutencaoExists = await manutencaoService.buscarPorId(manutencao_id);


    //     const verificaManutencao = 
    //  }




    static async atualizaStatus(novoStatus, id_manutencao, data_fim) {
        const arrayUp = {};

        if (data_fim !== null) {
            arrayUp.data_fechamento = data_fim;
        }

        arrayUp.status = novoStatus;
        const [statusAtualizado] = await database.Ordem_Servico.update(arrayUp,
            {
                where: {
                    manutencao_id: id_manutencao
                }

            });

        return statusAtualizado > 0;
    
    }

}


/*
 quilometragem_atual: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    problema: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      enum: {
        values: ["Aberto", "Em andamento", "Finalizada"]
      }
    }
    ,
    tipo: {
      type: DataTypes.STRING,
      enum: {
        values: ["Preventiva", "Corretiva"],
        message: 'Tipo de Manutencao informada está incorreta'
      }
    }
    ,
    data_abertura: {
      type: DataTypes.DATE
    },
    data_fechamento: {
      type: DataTypes.DATE,
    },
    valor_total_itens: {
      type: DataTypes.DECIMAL,
    },
    valor_total_procedimento: {
      type: DataTypes.DECIMAL
    },

    prioridade: {
      type: DataTypes.STRING,
      enum: {
        values: ["Baixa", "Alta", "Media"],
        message: 'A prioridade informada não existe'
      }
    }

*/

module.exports = OrdemServicoService;