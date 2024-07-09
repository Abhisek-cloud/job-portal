import mongoose from "mongoose";

type ConnectionObj = {
  isConnected?: number;
};

const readyState: ConnectionObj = {};

export const connectDb = async (): Promise<void> => {
  if (readyState.isConnected) {
    console.log("already connected");
    return;
  }
  try {
    const response = await mongoose.connect(process.env.MONGODB_URI!);
    readyState.isConnected = response.connections[0].readyState;
    console.log("database connected");
  } catch (error) {
    console.log(error);

    console.log("Database connection failed");

    process.exit(1);
  }
};
