import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

// local import
import apiRouter from './routes/api';
import {
  errorMiddleware,
  HttpException,
} from './utils/error-handling';
import jwtcheck from './auth/auth0';

const app = express();
const port = process.env.PORT || 3000;
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan('tiny'));

app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});

app.use('/api', jwtcheck, apiRouter);
app.use('/', (_req, _res, next) => {
  next(new HttpException(404, 'not found'));
});
app.use(errorMiddleware);
