module.exports = {
	path: "/api/partners",
	whitelist: ["partners.*"],
	aliases: {
		"POST /login": "partners.login",
	},
};
