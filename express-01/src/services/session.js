const findCurrentUser = (models, userId) => models.User.findByPk(userId);

export { findCurrentUser };
