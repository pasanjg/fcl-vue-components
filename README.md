# FCL-Vue Components
Bootstrap-Vue components for FCL

[![CI](https://github.com/pasanjg/fcl-vue-components/actions/workflows/main.yml/badge.svg)](https://github.com/pasanjg/fcl-vue-components/actions/workflows/main.yml)
## Bundling

Use `webpack.config.js` to create a production ready bundle

### Setup Webpack
Install `webpack` and `webpack-cli` dependencies locally or globally

- Install locally (using `package.json`)
```bash
npm install
```
- Install globally
```bash
npm install -g webpack webpack-cli
```

### Build
Create a production ready bundle in `./dist` folder
```bash
npm run build
```

## Development
Use VS Code Live Server extension or Browsersync to Live Reload

#### Setup Browsersync
- Install Browsersync globally (one-time install)
```bash
npm install -g browser-sync
```

- Start development server
```bash
npm start
```

#### Watch Sass using Live Sass Compiler Extension
Compile Sass or Scss to CSS at realtime
