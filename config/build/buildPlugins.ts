import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins(options: BuildOptions): Configuration['plugins']{
    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: options.paths.html }),
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());

        /** Выносит проверку типов в отдельный процесс **/
        plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));

        plugins.push(new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(options.paths.public, 'locales'),
                    to: path.resolve(options.paths.output, 'locales')
                },
            ]
        }));
    }

    return plugins;
}