import * as products from "./products";
import * as todos from "./todos";
import * as collections from "./collections";

class API {
	products: typeof products;
	todos: typeof todos;
	collections: typeof collections;

	constructor() {
		this.products = products;
		this.todos = todos;
		this.collections = collections;
	}
}

const api = new API();

export default api;
