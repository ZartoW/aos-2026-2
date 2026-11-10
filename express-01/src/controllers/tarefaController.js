
import { tarefaService } from "../services/index.js";
import { AppError } from "../utils/index.js";

const getTarefas = async (req, res) => {
  const tarefas = await tarefaService.getAllTarefas();
  return res.status(200).send(tarefas);
};

const getTarefa = async (req, res) => {
  const tarefa = await tarefaService.getTarefaById(
    req.params.objectId
  );

  if (!tarefa) {
    throw new AppError("Tarefa não encontrada.", 404);
  }

  return res.status(200).send(tarefa);
};

const createTarefa = async (req, res) => {
  const { descricao, concluida } = req.body || {};

  const tarefa = await tarefaService.createTarefa({
    descricao,
    concluida,
  });

  return res.status(201).send(tarefa);
};

const updateTarefa = async (req, res) => {
  const { descricao, concluida } = req.body || {};

  const tarefa = await tarefaService.updateTarefa(
    req.params.objectId,
    { descricao, concluida }
  );

  if (!tarefa) {
    throw new AppError("Tarefa não encontrada.", 404);
  }

  return res.status(200).send(tarefa);
};

const deleteTarefa = async (req, res) => {
  const isDeleted = await tarefaService.deleteTarefa(
    req.params.objectId
  );

  if (!isDeleted) {
    throw new AppError("Tarefa não encontrada.", 404);
  }

  return res.status(204).send();
};

export default {
  getTarefas,
  getTarefa,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};
