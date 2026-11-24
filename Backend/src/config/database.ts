
import dns from 'node:dns';
import mongoose from 'mongoose';

// Ensure reliable SRV resolution on Windows environments
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch {
  // Ignore fallback error if already configured
}

const connectDB = async (): Promise<void> => {
  try {
    const mongoUrl = process.env.MONGO_URL;

    // Check environment variable
    if (!mongoUrl) {
      throw new Error(
        'MONGO_URL is missing. Please check your Backend/.env file.'
      );
    }

    // Connect to MongoDB Atlas
    await mongoose.connect(mongoUrl, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log('-----------------------------------');
    console.log(' MongoDB Connected Successfully!');
    console.log(` Database: ${mongoose.connection.name}`);
    console.log(` Host: ${mongoose.connection.host}`);
    console.log('-----------------------------------');

  } catch (error) {
    console.error('MongoDB Connection Failed:', error);
    throw error;
  }
};

export default connectDB;
