module.exports = {
	path: "/api/customers",
	whitelist: ["customers.*"],
	aliases: {
		"POST /login": "customers.login",
	},
};
