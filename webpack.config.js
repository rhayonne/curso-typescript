/* arquivo de configuração do front ent
comando para instalar o webpack: npm i ts-loader webpack webpack-cli -D
*/
const path = require('path');

module.exports = {
  mode: 'development', // para nao ter que ficar dando build toda vez que alterar o codigo
  entry: './src/A0019-exercicio/index.ts', //arquivo raiz do front end
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig_frontend.json', // arquivo de configuração do typescript - front end
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  devtool: 'source-map', // for debugging  - vai mostrar a linha de codigo onde esta o erro
};
