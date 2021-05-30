import { ConnectionOptions, createConnection } from 'mongoose';
import { development } from './constants';

const options: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

const connectDB = createConnection(development.mongoUrl, options);
connectDB.then(
  () => {
    console.log('Connected correctly to DB Logica');
  },
  err => {
    console.log(err);
  }
);

export default connectDB;
