import MoviesController from '@api/controllers/MoviesController';
import { Router } from 'express';

const moviesRouter = Router();
const moviesController = new MoviesController();

moviesRouter.post('/', moviesController.create);

export default moviesRouter;
