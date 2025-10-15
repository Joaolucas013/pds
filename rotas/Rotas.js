
const {Router} = require('express');
const SetorController = require('../controller/SetorController.js');
const MaterialController = require('../controller/MaterialController.js');


const rotas = Router();

rotas.post("/setor", (req, res) => SetorController.salvar(req, res));
rotas.get("/listar", (req, res) =>  SetorController.listar(req, res));
rotas.get("/listar/:id", (req, res) =>  SetorController.buscarIdSetor(req, res));

// rotas de materiais
rotas.get("/material/busca", (req, res) => MaterialController.buscarMaterial(req, res));

rotas.put("/material/:id", (req, res) =>  MaterialController.updateMaterial(req, res));
rotas.delete("/material/:id", (req, res) =>  MaterialController.deletarMaterial(req, res));
rotas.post("/material/create", (req, res) =>  MaterialController.cadastraMaterial(req, res));
rotas.get("/material/read", (req, res) =>  MaterialController.listarMaterial(req, res));




module.exports = rotas;

