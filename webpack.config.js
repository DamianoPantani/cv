import path from "path";

import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import StyleLintPlugin from "stylelint-webpack-plugin";

export default {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve("./dist/"),
    filename: "[name].js",
    clean: true,
  },
  resolve: {
    alias: {
      "@assets": path.resolve("./src/assets"),
    },
    extensions: [".tsx", ".ts", ".js"],
    symlinks: false,
  },
  devServer: {
    static: {
      directory: path.resolve("./dist/"),
    },
    client: {
      overlay: false,
    },
    hot: false,
    historyApiFallback: true,
    port: 3000,
    open: true,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  optimization: {
    minimize: false,
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new StyleLintPlugin({
      context: "./src",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new ESLintPlugin({
      context: "./src",
      extensions: [".ts", ".tsx"],
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve("./src")],
        use: [
          {
            loader: "ts-loader",
            options: {
              // Turn off TS checks completely - "fork-ts-checker-webpack-plugin" already emits TS errors / warnings.
              // (Prevent duplicated TS checks, speed up the build)
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        include: [path.resolve("./src")],
        use: [
          "style-loader", // loads CSS inline, so that HTML output can be copied to external tools and exported as PDF
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: {
                auto: true,
                localIdentName: "[name]_[local]_[hash:base64:3]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              api: "modern-compiler",
              additionalData: '@use "variables" as *;\n',
              sassOptions: {
                loadPaths: ["./src/scss"],
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        include: [path.resolve("./src/assets/svg")],
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: [path.resolve("./src/assets/img")],
        use: [
          {
            loader: "url-loader",
            options: {
              fallback: "file-loader",
              limit: 50 * 1024, // Files smaller than 50 kB will be bundled and imported as base64 string. Larger files will be served separately
              outputPath: "./img/",
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
