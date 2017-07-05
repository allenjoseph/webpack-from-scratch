const webpack = require("webpack");
const path = require("path");

let config = {
    context: path.resolve(__dirname, "src"),
    entry: "./app/index.ts",
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/public/assets/",
        filename: "output.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
        historyApiFallback: true,
        inline: true,
        open: true
    },
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.js$/, loader: "source-map-loader", enforce: "pre" },
            { test: /\.ts$/, loader: "awesome-typescript-loader", options: {configFileName: path.resolve(__dirname, "src/tsconfig.json")} },
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader!postcss-loader", exclude: path.resolve(__dirname, "node_modules") }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".json", ".scss"]
    }
}

module.exports = config;