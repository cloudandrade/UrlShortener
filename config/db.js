const mongoose = require('mongoose');
const config = require('config');
/* const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true
    });

    console.log('mongodbconnected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}; */

//MONGOOSE
const connectDB = async () => {
  mongoose.Promise = global.Promise;
  await mongoose
    .connect('mongodb://localhost/url', { useNewUrlParser: true })
    .then(() => {
      console.log('Mongodb connected...');
    })
    .catch(erro => {
      console.log(
        'houve um problema ao se conectar ao banco de dados, erro: ' + erro
      );
    });
};

module.exports = connectDB;
