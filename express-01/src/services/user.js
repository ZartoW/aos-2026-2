const listUsers = (models) => models.User.findAll();

const findUser = (models, userId) => models.User.findByPk(userId);

export { findUser, listUsers };
