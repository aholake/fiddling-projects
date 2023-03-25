import * as dotenv from 'dotenv';
import * as express from 'express';
import {createRandomUser} from './services/user.service';

dotenv.config();

const app = express();

app.get('/users/:id', (req, res) => {
  res.send(createRandomUser());
});

app.get('/users', (req, res) => {
  const users = [];
  for (let i = 0; i < 10; i++) {
    users.push(createRandomUser());
  }
  res.send(users);
});

app.listen(process.env.PORT, () => {
  console.log(`User service listening on PORT ${process.env.PORT}`);
});
