"use strict";
const consumersActions = require("../actions/customers.actions");

module.exports = {
	name: "customers",

	settings: {},

	dependencies: [],

	// actual controller function
	actions: {
		login: {
			
			handler: consumersActions.login,
		},
	},

	events: {},

	methods: {},

	created() {},

	async started() {},

	async stopped() {},
};
