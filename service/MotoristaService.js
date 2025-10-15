const database = require("../models");


class MotoristaService {


    static async criar(req){
        try {
            const motoristaCreate = await database.Motorista.create(req);
            return motoristaCreate;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MotoristaService;