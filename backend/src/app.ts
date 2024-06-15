import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import articleRoutes from './routes/articleRoutes';
import categoryRoutes from './routes/categoryRoutes';
import tagRoutes from './routes/tagRoutes';

const app = express();
app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api', articleRoutes);
app.use('/api', categoryRoutes);
app.use('/api', tagRoutes);

export default app;
