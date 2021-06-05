import { ConnectionOptions, createConnection } from 'mongoose';
import constants from './constants';

const options: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

const connectDB = createConnection(constants.mongoUrl, options);
connectDB.then(
  () => {
    console.log('Connected correctly to DB Logica');
  },
  err => {
    console.log(err);
  }
);

export default connectDB;
