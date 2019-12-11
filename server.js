const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 21050;
require('dotenv').config();

console.log('Using config env WHERE: ', process.env.WHERE);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/carrinho', (req, res) => {
    return app.render(req, res, '/Cart');
  });

  server.get('/checkout', (req, res) => {
    return app.render(req, res, '/Checkout');
  });

  server.get('/produto/:productSlug', (req, res) => {
    return app.render(req, res, '/Product', { productSlug: req.params.productSlug });
  });


  server.get('/', (req, res) => app.render(req, res, '/'));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
