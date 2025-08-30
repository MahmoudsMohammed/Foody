import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// to allow front-end server access back-end resources
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript + Express!!!!!!!!!!!!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
