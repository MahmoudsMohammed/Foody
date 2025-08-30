import express, { Request, Response } from 'express';
import cors from 'cors';
import { sample_foods } from './data';

const app = express();
const PORT = 3000;

// to allow front-end server access back-end resources
app.use(cors());

// make app read body as JSON
app.use(express.json());

app.get('/meals', (req: Request, res: Response) => {
  const searchFields = req.body;
  let data = [];
  if (searchFields.tag) {
    data = sample_foods.filter(
      (m) =>
        m.name.toLowerCase().includes(searchFields.search.toLowerCase()) &&
        m.tags.includes(searchFields.tag)
    );
  } else {
    data = sample_foods.filter((m) =>
      m.name
        .toLowerCase()
        .includes(searchFields.search ? searchFields.search.toLowerCase() : '')
    );
  }
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
