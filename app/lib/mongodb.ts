import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
      family: 4
    };

    try {
      console.log('Tentando conectar ao MongoDB...');
      cached.promise = mongoose.connect(MONGODB_URI!, opts);
      console.log('Conexão com MongoDB estabelecida');
    } catch (error) {
      console.error('Erro ao conectar com MongoDB:', error);
      cached.promise = null;
      throw error;
    }
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error('Erro na conexão com MongoDB:', e);
    throw e;
  }

  return cached.conn;
}

export default connectDB; 