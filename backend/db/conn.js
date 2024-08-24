const mongoose = require('mongoose');

async function main() {
  try {
    mongoose.set('strictQuery', true);

    await mongoose.connect(
      'mongodb+srv://david:geraldo123@cluster0.vuexk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',

      console.log('conectado ao banco!'),
    );
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
module.exports = main;
