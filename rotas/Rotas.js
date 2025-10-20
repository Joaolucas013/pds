
const {Router} = require('express');
const SetorController = require('../controller/SetorController.js');
const MaterialController = require('../controller/MaterialController.js');
const MotoristaController = require('../controller/MotoristaController.js')
const VeiculoController = require('../controller/VeiculoController.js')
const FuncionarioController = require('../controller/FuncionarioController.js')


const rotas = Router();

// setor
rotas.post("/setor/salvar", (req, res) => SetorController.salvar(req, res));
rotas.put("/setor/update", (req, res) =>  SetorController.atualizarSetor(req, res));
rotas.get("/setor/listar/:id", (req, res) =>  SetorController.buscarIdSetor(req, res));
rotas.get("/setor/listar", (req, res) =>  SetorController.listar(req, res));
rotas.delete("/setor/deletar/:id", (req, res) =>  SetorController.deletarSetor(req, res));
rotas.get("/setor/busca/:nomeSetor", (req, res) =>  SetorController.buscarSetorPorNome(req, res));

// rotas de materiais
rotas.post("/material/create", (req, res) =>  MaterialController.cadastraMaterial(req, res));
rotas.get("/material/busca", (req, res) => MaterialController.buscarMaterial(req, res));
rotas.get("/material/read", (req, res) =>  MaterialController.listarMaterial(req, res));
rotas.put("/material/:id", (req, res) =>  MaterialController.updateMaterial(req, res));
rotas.delete("/material/:id", (req, res) =>  MaterialController.deletarMaterial(req, res));



// rotas de motorista
rotas.post("/motorista/create", (req, res) => MotoristaController.salvarMotorista(req, res));
rotas.put("/motorista/:id", (req, res) => MotoristaController.atualizarMotorista(req, res));
rotas.get("/motorista/:id", (req, res) => MotoristaController.pesquisarMotorista(req, res));
rotas.delete("/motorista/:id", (req, res) => MotoristaController.deletarMotorista(req, res));

// veiculos
rotas.post("/veiculo", (req, res) => VeiculoController.salvar(req, res));
rotas.put("/veiculo/atualizar", (req, res) => VeiculoController.atualizaVeiculo(req, res));
rotas.get("/veiculo/buscar", (req, res) => VeiculoController.buscarVeiculo(req, res));
rotas.delete("/veiculo/:id", (req, res) => VeiculoController.deletar(req, res));


// funcionario
rotas.post("/funcionario/post", (req, res) => FuncionarioController.cadastrar(req, res));
rotas.put("/funcionario/update", (req, res) => FuncionarioController.atualizar(req, res));
rotas.get("/funcionario/listar", (req, res) => FuncionarioController.listar(req, res));
rotas.delete("/funcionario/deletar/:id", (req, res) => FuncionarioController.deletar(req, res));

module.exports = rotas;

