module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('meta_faturados', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      meta_faturados: {
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
    await queryInterface.dropTable('meta_faturados');
  },
};
