const JsBarcode = require('jsbarcode');
const express = require('express');
const { createCanvas } = require('canvas');

const app = express();

app.get('/code/:number', (req, res, next) => {
  const { number } = req.params;
  const canvas = createCanvas();
  JsBarcode(canvas, number, {
    format: 'CODE39',
  });
  const buffer = canvas.toBuffer();
  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': buffer.length,
  });
  res.end(buffer);
});

app.listen(3000, () => {
  console.log('start!!');
});
