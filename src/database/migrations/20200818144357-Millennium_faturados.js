module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mil_ag_faturamento', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ag_faturamento: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '0',
      },
      update: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('mil_ag_faturamento');
  },
};
