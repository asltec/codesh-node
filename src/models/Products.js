module.exports = (sequelize, Sequelize) => {

    const Product = sequelize.define('products', {
        title: {
            type: Sequelize.STRING
        },

        type: {
            type: Sequelize.STRING
        },

        description: {
            type: Sequelize.STRING
        },

        price: {
            type: Sequelize.DECIMAL(10, 2)
        },

        rating: {
            type: Sequelize.BIGINT(11)
        }
    });
    //Product.sync({force: true});
    return Product
}



