import * as dotenv from 'dotenv';
import * as express from 'express';
import {createRandomUser} from './services/user.service';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send(createRandomUser());
});

app.listen(process.env.PORT, () => {
  console.log(`User service listening on PORT ${process.env.PORT}`);
});
