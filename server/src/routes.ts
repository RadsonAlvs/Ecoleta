import express from "express";
import knex from "./database/connection";

import PointsController from './controller/PointsController';
import ItemsController from './controller/ItemsController';

const routes = express.Router();
const pointController = new PointsController();
const itemsController = new ItemsController();


routes.get("/items", itemsController.index);
// routes.delete('/items', itemsController.delete);

routes.post('/points', pointController.create);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);
// routes.delete('/points', pointController.delete)

export default routes;
