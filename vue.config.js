module.exports = {
	baseUrl: "vue-app/dist/",
	devServer: {
		proxy: {
			"/": {
				target: "http://localhost:80",
			}
		}
	}
};