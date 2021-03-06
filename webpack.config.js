const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validator = require('webpack-validator');
const parts = require('./libs/parts');

const PATH = {
	app : path.join(__dirname,'app'),
	build : path.join(__dirname,'build')
};

const common = {
	entry : {
		app : PATH.app
	},
	output : {
		path : PATH.build,
		filename : '[name].js'
	},
	plugins : [
		new HtmlWebpackPlugin({
			title : "Hello Cok"
		})
	]
}

let config;

switch(process.env.npm_lifecycle_event){
	case 'build' :
		config = merge(common, {});
		break;
	default :
		config = merge(common, 
			parts.devServer({
				host: process.env.HOST,
				port: process.env.PORT
			})
		);

}

module.exports = validator(config);
