const mongoose = require('mongoose');

const connectDB = async (URI) => {
  try {
    const conn = await mongoose.connect(URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); 
  }
};

async function dropAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (let collectionName of collections) {
    try {
      await mongoose.connection.collections[collectionName].drop();
      console.log(`Dropped collection: ${collectionName}`);
    } catch (error) {
      if (error.message === 'ns not found') continue; 
      console.error(`Error dropping collection "${collectionName}":`, error.message);
    }
  }
}

module.exports = connectDB;
