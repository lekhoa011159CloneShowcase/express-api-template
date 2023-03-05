import express from 'express';
import { testVariableEnv } from '../settings';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: `Welcome to my Express API ${testVariableEnv}.` });
});

export default indexRouter;
