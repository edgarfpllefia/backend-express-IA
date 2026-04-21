import mongoose from 'mongoose';

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connectat a MongoDB Atlas');
  } catch (error) {
    console.error('Error connectant a MongoDB:', error);
    process.exit(1);
  }
}
