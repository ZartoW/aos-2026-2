const listMessages = (models) => models.Message.findAll();

const findMessage = (models, messageId) => models.Message.findByPk(messageId);

const createMessage = (models, text, userId) =>
	models.Message.create({ text, userId });

const deleteMessage = (models, messageId) =>
	models.Message.destroy({ where: { id: messageId } });

export { createMessage, deleteMessage, findMessage, listMessages };
