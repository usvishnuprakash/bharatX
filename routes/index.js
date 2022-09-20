const config = {
	path: "/api",

	whitelist: ["api.*"],
	// for middle wares
	use: [],

	mergeParams: true,

	authentication: true,

	authorization: true,

	autoAliases: false,

	callingOptions: {},

	bodyParsers: {
		json: {
			strict: false,
			limit: "2MB",
		},
		urlencoded: {
			extended: true,
			limit: "2MB",
		},
	},

	mappingPolicy: "restrict", // Available values: "all", "restrict"

	// Enable/disable logging
	logging: true,

	/** 
     * Before call hook. You can check the request.
     * @param {Context} ctx 
     * @param {Object} route 
     * @param {IncomingRequest} req 
     * @param {ServerResponse} res 
     * @param {Object} data
     * 
    onBeforeCall(ctx, route, req, res) {
        // Set request headers to context meta
        ctx.meta.userAgent = req.headers["user-agent"];
    }, */

	/**
     * After call hook. You can modify the data.
     * @param {Context} ctx 
     * @param {Object} route 
     * @param {IncomingRequest} req 
     * @param {ServerResponse} res 
     * @param {Object} data
    onAfterCall(ctx, route, req, res, data) {
        // Async function which return with Promise
        return doSomething(ctx, res, data);
    }, */
};

module.exports = [
	{ ...config, ...require("./partners.routes") },
	{ ...config, ...require("./customers.routes") },
];
