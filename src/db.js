const mongoose = require('mongoose');

mongoose
  .connect('mongodb://mongo/appdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch((err) => console.log('Error en la conexión', err));
