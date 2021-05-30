module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    email: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    }
  });

  return Role;
};
