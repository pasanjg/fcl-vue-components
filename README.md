# FCL-Vue Components
Bootstrap-Vue components for FCL

## Bundling

Use `webpack.config.js` to create a production ready bundle

### Setup Webpack
Install `webpack` and `webpack-cli` as devDependencies

- Install locally (using `package.json`)
```bash
npm install
```
- Install globally
```bash
npm install -D webpack webpack-cli
```

### Build
Create a production ready bundle in `./dist/` folder
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
