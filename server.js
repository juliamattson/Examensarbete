const next = require('next');
const express = require('express');
const WooConfig = require('./Wooconfig');

const WooCommerceAPI = require('woocommerce-api');

const WooCommerce = new WooCommerceAPI({
    url: WooConfig.siteUrl,
    consumerKey: WooConfig.consumerKey,
    consumerSecret: WooConfig.consumerSecret,
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