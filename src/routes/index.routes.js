const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'Conexión de prueba...',
  });
});

module.exports = router;
