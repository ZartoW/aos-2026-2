import {
	createMessage,
	deleteMessage,
	findMessage,
	listMessages,
} from "../services/index.js";

const getMessages = async (req, res) => {
	const messages = await listMessages(req.context.models);
	return res.status(200).send(messages);
};

const getMessage = async (req, res) => {
	const message = await findMessage(
		req.context.models,
		req.params.messageId,
	);
	if (!message) return res.status(404).send({ error: "Mensagem não encontrada" });
	return res.status(200).send(message);
};

const postMessage = async (req, res) => {
	if (!req.body.text) return res.status(400).send({ error: "Texto obrigatório" });
	const message = await createMessage(
		req.context.models,
		req.body.text,
		req.context.me.id,
	);
	return res.status(201).send(message);
};

const removeMessage = async (req, res) => {
	const deleted = await deleteMessage(
		req.context.models,
		req.params.messageId,
	);
	if (!deleted) return res.status(404).send({ error: "Mensagem não encontrada" });
	return res.status(204).send();
};

export { getMessage, getMessages, postMessage, removeMessage };
