import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => res.send('API is running'));

app.listen(3001, () => {
  console.log('Server started on port 3001!');
});