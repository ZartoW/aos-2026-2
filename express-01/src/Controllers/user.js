import { findUser, listUsers } from "../services/index.js";

const getUsers = async (req, res) => {
	const users = await listUsers(req.context.models);
	return res.status(200).send(users);
};

const getUser = async (req, res) => {
	const user = await findUser(req.context.models, req.params.userId);
	if (!user) return res.status(404).send({ error: "Usuário não encontrado" });
	return res.status(200).send(user);
};

const createUser = (req, res) =>
	res.status(201).send("POST HTTP method on user resource");

const updateUser = (req, res) =>
	res.status(200).send(`PUT HTTP method on user/${req.params.userId} resource`);

const deleteUser = (req, res) => res.status(204).send();

export { createUser, deleteUser, getUser, getUsers, updateUser };
