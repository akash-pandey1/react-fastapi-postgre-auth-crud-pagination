import { httpCrudService } from "../lib/http.api";

export const productsService = httpCrudService<any>("/products");