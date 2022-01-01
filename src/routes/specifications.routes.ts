import { Router } from 'express';
import {createSpecificationControllers} from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();


specificationsRoutes.post("/", (request, response) => {
   return createSpecificationControllers.handle(request, response);
})

export { specificationsRoutes }