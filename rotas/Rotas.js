
const {Router} = require('express');
const SetorController = require('../controller/SetorController.js');
const MaterialController = require('../controller/MaterialController.js');
const MotoristaController = require('../controller/MotoristaController.js')


const rotas = Router();

// setor
rotas.post("/salvar", (req, res) => SetorController.salvar(req, res));
rotas.put("/listar", (req, res) =>  SetorController.atualizarSetor(req, res));
rotas.get("/listar/:id", (req, res) =>  SetorController.buscarIdSetor(req, res));
rotas.delete("/listar/:id", (req, res) =>  SetorController.deletarSetor(req, res));

// rotas de materiais
rotas.post("/material/create", (req, res) =>  MaterialController.cadastraMaterial(req, res));
rotas.get("/material/busca", (req, res) => MaterialController.buscarMaterial(req, res));
rotas.get("/material/read", (req, res) =>  MaterialController.listarMaterial(req, res));
rotas.put("/material/:id", (req, res) =>  MaterialController.updateMaterial(req, res));
rotas.delete("/material/:id", (req, res) =>  MaterialController.deletarMaterial(req, res));



// rotas de motorista
rotas.post("/motorista/create", (req, res) => MotoristaController.salvar(req, res));
rotas.put("/motorista/:id", (req, res) => MotoristaController.atualizarMotorista(req, res));
rotas.get("/motorista/:id", (req, res) => MotoristaController.pesquisarMotorista(req, res));
rotas.delete("/motorista/:id", (req, res) => MotoristaController.deletarMotorista(req, res));




module.exports = rotas;

