const database = require('../models');
const material = require('../service/MaterialService.js');
const ordemServico = require('../service/OrdemServicoService.js')


class ItensService {


    static async cadastrar(dados) {


        const { id_Os, fk_material, quantidade } = dados;
        const verifica = await this.#verificaExistencia(id_Os, fk_material);

        if (!verifica) return null;

        const { valorUnitario } = await material.buscarMaterialId(fk_material)

        const dadosValidos = {};
        dadosValidos.valor_unitario = valorUnitario;
        dadosValidos.quantidade = quantidade;
        dadosValidos.fk_material = fk_material;
        dadosValidos.id_Os = id_Os;

        const newVinculo = await database.Itens.create(dadosValidos)

        await this.#insereTotalOs(quantidade, valorUnitario, id_Os);
        await this.#decQuantidadeMaterial(quantidade, fk_material)

        return newVinculo;

    }

    static async listar() {
        const itens = await database.Itens.findAll();


        if (itens.length > 0) {
            return itens;
        }

        return null;
    }


    static async atualizarPreco(dados) {
        const { id_material, id_os, precoNovo } = dados;

        const verifica = await this.#verificaExistencia(id_os, id_material);

        if (!verifica) return false;


        const [itemUpdate] = await database.Itens.update({
            valor_unitario: precoNovo

        },
            {
                where: {
                    fk_material: id_material,
                    id_Os: id_os
                }
            });

        // aqui tem que atualizar o preco na os
        return itemUpdate > 0;
    }

    static async atualizarQuantidade(dados) {
        const { id_material, id_os, quantidade } = dados;

        const verifica = await this.#verificaExistencia(os_id, id_material);

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


        const dec = await this.#decQuantidadeMaterial(quantidade, id_material)
        if (!dec) {
            return false;
        }

        return itemUpdate > 0;


    }


    static async atualizarMaterial(dados) {
        const { id_material, novoIdMaterial, id_os } = dados;

        const verifica = await this.#verificaExistencia(id_os, id_material);

        if (!verifica) return false;


        const [itemUpdate] = await database.Itens.update({
            id: novoIdMaterial

        },
            {
                where: {
                    fk_material: id_material,
                    id_Os: id_os
                }
            });

        return itemUpdate > 0;


    }

    static async deletar(dados) {

        const { id_material, id_os } = dados;
        const verifica = await this.#verificaExistencia(os_id, id_material);

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
            const materialExist = await material.buscarMaterialId(material_id);

            if (os_Exists === null || materialExist === null) {
                return false;
            }
            return true;

        } catch (error) {
            throw new Error('erro ao buscar material ou ordem de serviço');
        }
    }


    static async #decQuantidadeMaterial(quantidade, fk_material) {
        const mat = await material.decrementarQuantidade(quantidade, fk_material);

        if (mat) {
            return true
        }

        return false;
    }

    static async #insereTotalOs(quantidade, valorUnitario, id_Os) {
        const total = quantidade * valorUnitario;
        await ordemServico.InserireAtualizarTotalItens(total, id_Os)
    }

}


module.exports = ItensService;