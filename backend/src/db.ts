import mongoose from "mongoose";


const MONGO_URI = 'mongodb+srv://root:root@cluster0.jfqzmrr.mongodb.net/linklab?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error: Error) => {
    console.error('Error connecting to MongoDB:', error);
  });