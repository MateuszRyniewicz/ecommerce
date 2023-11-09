import { Product } from "./product";

export interface User {
	id:string;
	email: string;
	password: string;
	name?: string;
	cart: Product| Product[]
}
