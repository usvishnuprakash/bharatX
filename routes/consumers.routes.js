module.exports = {
	path: "/api/consumers",
	whitelist: ["consumers.*"],
	aliases: {
		"POST /login": "consumers.login",
	},
};
