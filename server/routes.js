import { Router } from 'express';
import homeController from './controllers/homeControler.js';
import authController from './controllers/authController.js';
import apiController from './controllers/apiController.js';

const routes = Router();

routes.use('/', homeController);
routes.use('/auth', authController);
routes.use('/api', apiController);
 

routes.all('*', (req, res) => {
    res.status(404).send({ error: 'Page not found' });
});


export default routes;


/*import { Router } from "express";
import homeController from "./controllers/homeControler.js";
import authController from "./controllers/authController.js";

const routes = Router();

routes.use(homeController);

routes.use('/auth', authController);

routes.all('*', (req, res) => {
    res.render('home/404', {title: '404 Page'})
});

export default routes;*/
