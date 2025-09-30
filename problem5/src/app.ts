import express from 'express';
import dotenv from 'dotenv';
import resourceRoutes from './routes/resourceRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/resources', resourceRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
