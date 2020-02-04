const express = require('express');
const routes = express.Router();
const testController = require('./controllers/testController')
const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)

/**
 * @deprecated [#1]Ddeprecated since version 1.0. [2#]Will be deleted in version 2.0
 * 
routes.get('/Test', testController.index)
*/

routes.post('/products', ProductController.store)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.destroy)

module.exports = routes