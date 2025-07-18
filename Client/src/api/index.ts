import * as collections from "./collections";
import * as auth from "./auth";

class API {
	collections: typeof collections;
	auth: typeof auth;

	constructor() {
		this.collections = collections;
		this.auth = auth;
	}
}

const api = new API();

export default api;
