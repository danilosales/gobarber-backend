import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import SesstionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SesstionsController();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create,
);

export default sessionsRouter;
