const router = require("express").Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const db = require('../config/database.config');
const Products = db.product;
const fs = require('fs');


router.post("/upload", multer(multerConfig).single('products'), (req, res) => {

    let product;

    fs.readFile(req.file.path,  (err, data) => {

            const products = JSON.parse(data);
           
            for (const prod of products) {
              
             product = Products.create({
                    title: prod.title,
                    type: prod.type,
                    description: prod.description,
                    price: prod.price,
                    rating: prod.rating
                });
            }

            return res.status(201).send({ message: 'Product save success!' });
    });
});


router.get("/upload", async (req, res) => {
    const products = await Products.findAll();
    return res.json(products);
});


router.get("/upload/:id", async (req, res) => {
    const product = await Products.findByPk(req.params.id);
    return res.json(product);
})


router.delete("/upload/:id", async (req, res) => {
    const product = await Products.findByPk(req.params.id);

    await product.destroy();

    return res.status(200).send({ message: 'Product deleted success!' });
});

router.put('/upload/:id', async (req, res) => {

    Products.update({

        title: req.body.title,
        type: req.body.type,
        description: req.body.description,
        price: req.body.price,
        rating: req.body.rating
    },

        { where: { id: req.params.id } }
    ).then(() => {
        res.status(200).send("Product updated success!");
    });

});

module.exports = router;