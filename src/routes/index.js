const express = require('express');
const router = express.Router();

router.get('/api', (req, res, next) => {
  res.status(200).send({
    message: 'REST WebAPI Challenge 20200630 Running',
  });
});

module.exports = router;