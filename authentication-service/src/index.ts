import * as express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import * as rm from 'typed-rest-client/RestClient';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.post('/authenticate', async (req, res) => {
  const {username, password} = req.body;
  if ('lvo' === username && password === '123456') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const restClient = new rm.RestClient();
    const data = await restClient.get(
      `${process.env.USER_SERVICE_URL}/users/123`
    );
    res.send(data.result);
  } else {
    res.status(400).send({message: 'Invalid username or password'});
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Authentication service listening on PORT ${process.env.PORT}`);
});
