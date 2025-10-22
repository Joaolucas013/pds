const database = require('../models');
const material = require('../service/MaterialService.js');
const ordemServico = require('../service/OrdemServicoService.js')


class ItensService {


    static async cadastrar(dados) {

        const { os_id, material_id } = dados;
        const verifica = await verificaExistencia(os_id, material_id);

        if (!verifica) return null;

        const newVinculo = await database.Itens.create();
        return newVinculo;

    }


    static async listar() {
            const itens = await database.Itens.findAll();
             if (itens !== null) {
                return itens;
            }
            return null;
        } 


        static async atualizarPreco(dados) {
        const { id_material, id_os, precoNovo } = dados;

        const verifica = await verificaExistencia(os_id, id_material);

        if (!verifica) return false;


        const [itemUpdate] = await database.Itens.update({
           preco_unitario: precoNovo

        },
            {
                where: {
                    fk_material: id_material,
                    fk_Os: id_os
                }
            });

        return itemUpdate > 0;


    }
    
static async atualizarQuantidade(dados) {
        const { id_material, id_os, quantidade } = dados;

        const verifica = await verificaExistencia(os_id, id_material);

        if (!verifica) return false;


        const [itemUpdate] = await database.Itens.update({
            quantidade: quantidade

        },
            {
                where: {
                    fk_material: id_material,
                    fk_Os: id_os
                }
            });

        return itemUpdate > 0;


    }


    static async atualizarMaterial(dados) {
        const { id_material, novoMaterial, id_os, novo_valor_unitario, quantidade } = dados;

        const verifica = await verificaExistencia(os_id, id_material);

        if (!verifica) return false;


        const [itemUpdate] = await database.Itens.update({
            id_material:novoMaterial

        },
            {
                where: {
                    fk_material: id_material,
                    fk_Os: id_os
                }
            });

        return itemUpdate > 0;


    }

    static async deletar(dados) {

        const { id_material, id_os } = dados;
        const verifica = await verificaExistencia(os_id, id_material);

        if (!verifica) return false;

        const itemDeletado = await database.Itens.destroy({
            where: {
                fk_material: id_material,
                fk_Os: id_os
            }
        })

        return itemDeletado > 0;

    }


    static async  #verificaExistencia(os_id, material_id) {
        try {

            const os_Exists = await ordemServico.buscarPeloId(os_id);
            const materialExist = await material.buscarPorMaterial(material_id);

            if (os_Exists === null || materialExist === null) {
                return false;
            }


        } catch (error) {
            throw new Error('erro do servidor');
        }
    }

}


module.exports = ItensService;