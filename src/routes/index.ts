import { Router } from 'express';
import moviesRouter from './movieRoutes';

const routes = Router();

routes.use('/api/v1/movies', moviesRouter);

export default routes;
