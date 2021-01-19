const next = require('next');
const express = require('express');
const WooConfig = require('./Wooconfig.js');

const WooCommerceAPI = require('woocommerce-api');

const WooCommerce = new WooCommerceAPI({
    url: 'https://wp.hjartanavguld.se/',
    consumerKey: 'ck_f2d6721af3cf16085efa560c43d8bfeb6f2b3ff2',
    consumerSecret: 'cs_d1fc0178935d5ecb830258498d24a0e446dde8c0',
    wpAPI: true,
    version: 'wc/v1'
});

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/produkter', (req, response) => {
            WooCommerce.get('products', function (err, data, res) {
                response.json(JSON.parse(res));
            });
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(port, err => {
            if (err) {
                throw err;
            }
            console.log(`Site is running on port ${port}`);
        })

    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });;