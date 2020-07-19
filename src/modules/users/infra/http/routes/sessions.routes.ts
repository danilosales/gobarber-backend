import { Router } from 'express';
import SesstionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SesstionsController();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
