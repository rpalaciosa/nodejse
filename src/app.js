import express from 'express';
import  {pool}  from './db.js';
import empRoutes from './routes/emp.routes.js';

const app = express()

app.use(empRoutes);

const port = 3000

app.get('/ping', async (req, res) =>  {
  const [result] = await pool.query('select 1 + 1 as result');
  res.json(result);
} );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
