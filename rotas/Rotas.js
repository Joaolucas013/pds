
const {Router} = require('express');
const SetorController = require('../controller/SetorController.js');
const MaterialController = require('../controller/MaterialController.js');
const MotoristaController = require('../controller/MotoristaController.js')
const VeiculoController = require('../controller/VeiculoController.js')
const FuncionarioController = require('../controller/FuncionarioController.js')
const procedimentoController = require('../controller/ProcedimentoController.js')
const ModeloController = require('../controller/ModeloController.js')
const manutencaoController =  require('../controller/ManutencaoController.js')
const VeiculoMotoristaController = require('../controller/VeiculoMotoristaController.js')


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
rotas.post("/veiculo", (req, res) => VeiculoController.cadastrarVeiculo(req, res));
rotas.put("/veiculo/atualizar", (req, res) => VeiculoController.atualizaVeiculo(req, res));
rotas.get("/veiculo/listar", (req, res) => VeiculoController.listarVeiculos(req, res));
rotas.get("/veiculo/buscar", (req, res) => VeiculoController.buscarVeiculo(req, res));
rotas.delete("/veiculo/:id", (req, res) => VeiculoController.deletar(req, res));


// funcionario
rotas.post("/funcionario/post", (req, res) => FuncionarioController.cadastrar(req, res));
rotas.put("/funcionario/update", (req, res) => FuncionarioController.atualizar(req, res));
rotas.get("/funcionario/listar", (req, res) => FuncionarioController.listar(req, res));
rotas.delete("/funcionario/deletar/:id", (req, res) => FuncionarioController.deletar(req, res));

// procedimento
rotas.post("/procedimento/cadastrar", (req, res) => procedimentoController.cadastrar(req, res));
rotas.get("/procedimento/listar", (req, res) => procedimentoController.listar(req, res));
rotas.put("/procedimento/:id", (req, res) => procedimentoController.atualizar(req, res));
rotas.get("/procedimento/buscar/:id", (req, res) => procedimentoController.buscarPorId(req, res));
rotas.delete("/procedimento/:id", (req, res) => procedimentoController.deletar(req, res));

// modelos
 rotas.post("/modelo", (req, res) => ModeloController.cadastrar(req, res));
 rotas.get("/modelo/listar", (req, res) => ModeloController.listar(req, res));
 rotas.put("/modelo/:id", (req, res) => ModeloController.atualizar(req, res));
rotas.get("/modelo/:id", (req, res) => ModeloController.buscarPorId(req, res));
rotas.delete("/modelo/:id", (req, res) => ModeloController.deletar(req, res));

// manutencao
 rotas.post("/manutencao/criar", (req, res) => manutencaoController.cadastrar(req, res));
 rotas.get("/manutencao/listar", (req, res) => manutencaoController.listar(req, res));
 rotas.get("/manutencao/buscar/:id", (req, res) => manutencaoController.buscarPorId(req, res));
 rotas.put("/manutencao/atualizar/:id", (req, res) => manutencaoController.atualizar(req, res));
 rotas.delete("/manutencao/deletar/:id", (req, res) => manutencaoController.deletar(req, res));

// veiculoMotorista
 rotas.post("/veiculoMotorista/post", (req, res) => VeiculoMotoristaController.atribuirVeiculoMotorista(req, res));
    rotas.put("/veiculoMotorista/update/motorista", (req, res) => VeiculoMotoristaController.atualizarAtribuicaoNewMotorista(req, res));
    rotas.put("/veiculoMotorista/update/veiculo", (req, res) => VeiculoMotoristaController.atualizarAtribuicaoNewVeiculo(req, res));
    rotas.delete("/veiculoMotorista/delete", (req, res) => VeiculoMotoristaController.deletar(req, res));
    rotas.get("/veiculoMotorista/listar/ativos", (req, res) => VeiculoMotoristaController.listarVinculosAtivos(req, res));
    rotas.get("/veiculoMotorista/listar/inativos", (req, res) => VeiculoMotoristaController.listarVinculosInativos(req, res));
    



module.exports = rotas;

