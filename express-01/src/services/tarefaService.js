
import models from "../models/index.js";

const getAllTarefas = async () => {
  return await models.Tarefa.findAll();
};

const getTarefaById = async (objectId) => {
  return await models.Tarefa.findByPk(objectId);
};

const createTarefa = async ({ descricao, concluida }) => {
  return await models.Tarefa.create({
    descricao,
    concluida,
  });
};

const updateTarefa = async (objectId, { descricao, concluida }) => {
  const tarefa = await getTarefaById(objectId);

  if (!tarefa) {
    return null;
  }

  return await tarefa.update({
    ...(descricao !== undefined && { descricao }),
    ...(concluida !== undefined && { concluida }),
  });
};

const deleteTarefa = async (objectId) => {
  const count = await models.Tarefa.destroy({
    where: { objectId },
  });

  return count > 0;
};

export default {
  getAllTarefas,
  getTarefaById,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};
