import { findCurrentUser } from "../services/index.js";

const getSession = async (req, res) => {
	const user = await findCurrentUser(req.context.models, req.context.me.id);
	if (!user) return res.status(401).send({ error: "Não autenticado" });
	return res.status(200).send(user);
};

export { getSession };
