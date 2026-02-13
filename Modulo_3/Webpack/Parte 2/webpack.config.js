import { dir } from "console";
import HtmlWebpackPlugin from "html-webpack-plugin";
import DotenvWebpack from "dotenv-webpack";
import { BundleStatsWebpackPlugin } from "bundle-stats-webpack-plugin";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default (argv) => {
  const mode = argv.mode || "development";

  return {
    entry: ["./src/index.tsx"],
    resolve: {
      extensions: [".tsx", ".js", ".ts"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                esModule: true,
                modules: {
                  namedExport: false,
                  exportLocalsConvention: "camelCase",

                  // Genera nombres de clase únicos para evitar colisiones mostrando clase original con prefijo y hash para facilitar debugging
                  localIdentName: "[name]__[local]--[hash:base64:5]",
                },
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    devServer: {
      port: 8080,
      hot: true,
      devMiddleware: {
        stats: "errors-only",
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/index.html",
        scriptLoading: "blocking",
        favicon: "./src/assets/images/favicon.ico",
      }),
      new DotenvWebpack({
        path: `./.env.${mode}`,
        systemvars: true,
        silent: false,
        safe: false,
      }),
      new BundleStatsWebpackPlugin({
        outDir: ".",
        json: false,
      }),
    ],
  };
};
