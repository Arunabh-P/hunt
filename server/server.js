import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import gigRoute from './routes/gigRoute.js';
import conversationRoute from './routes/conversationRoute.js';
import orderRoute from './routes/orderRoute.js';
import messageRoute from './routes/messageRoute.js';
import reviewRoute from './routes/reviewRoute.js';
import authRoute from './routes/authRoute.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Db Connected');
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json()); //allow app to take input from users
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/orders', orderRoute);
app.use('/api/messages', messageRoute);
app.use('/api/reviews', reviewRoute);

app.listen(8800, () => {
  connect();
  console.log('backend server is running');
});