import { createConnection } from 'mongoose';

const appConnect = createConnection(
  'mongodb+srv://root:root@cluster0.xzwpb.gcp.mongodb.net/logicadb?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

appConnect.then(
  db => {
    // eslint-disable-next-line no-undef
    console.log('Connected correctly to DB Logica');
  },
  err => {
    // eslint-disable-next-line no-undef
    console.log(err);
  }
);

export default appConnect;
