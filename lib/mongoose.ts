import mongoose from 'mongoose';

let isConnected = false; // Variable to track connection status

export const connectToDB = async () => {
  // mongoose.set is for setting global options for mongoose
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URI) return console.log('No MongoDB URI provided');

  if (isConnected) return console.log('=> Already connected to MongoDB');

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;

    console.log('=> Connected to MongoDB');
  } catch (error: any) {
    console.log('Failed to connect to MongoDB', error.message);
  }
};
