import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to my Express API Template.' });
});

export default indexRouter;
