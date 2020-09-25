module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cart_abandoned', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email_sent: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '0',
      },

      created_At: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_At: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('cart_abandoned');
  },
};
