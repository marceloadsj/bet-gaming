# Bet Gaming (WIP)

### Description

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I choose CRA because it's a consolidated boilerplate with a lot of ready made configs and optimizations for webpack, babel, the development and the build process at all.

I'm using the generated project to work on the two edges:

- **Front** (in ./src and ./public folders);
- **Back** (in ./back_src folder with server.js as entrypoint);

---

### Development

- Start the servers using the **"npm start"** or **"yarn start"**:
  -- front run into **[localhost:3000](http://localhost:3000)**;
  -- back run into **[localhost:4000](http://localhost:4000)**;

In development, I use npm-run-all to start both servers (a back/express server and a front/webpack-dev-server from CRA).

The sass layer is builded using node-sass-chokidar, and all .sass files turns into .css files that can be imported into components.

_The CRA project does not use CSS Modules or CSS-in-JS approach, only the .css import into .js files facility._

### Build & Deploy

When we build with "npm/yarn build" command, a build folder is generated.
In production, we only use the ./back_src, ./build and ./server.js files (with .env and pkg.json).

(WIP) Configure the pipeline for CI/CD into Heroku!

### FRONT:

##### Code Standard

- I'm using prettier to format the code in a pre-commit hook;
- The front code is structured as:
  -- **index.js** (as entrypoint file);
  -- **App** (entrypoint component);
  -- **styles** (general style .sass files);
  -- **configs** (common config to use across the system);
  -- **domains** (domain driven folder to create components);

The Domain folder contains all components separated by application higher domains and/or features, and each domain can have:

- **Components/Containers** (dumb and smart at same file, better to read/code);
- **Styles** (specific styles with same name as component);
- **Reducer and Actions** (single file action/reducer approach, better to code entire flow of redux without need to navigate);

### BACK:

##### Code Standard

- Prettier to code format too;
- The back code is structured as:
  -- **server.js** (as entrypoint file);
  -- **./back_src/controllers** (controllers of a MVC structure as ES6 classes);
  -- (WIP)

### FRONT:

##### Some libraries used in project

- Redux (State Management);
- React Router (Routing System);
- Bootstrap 4 (With Sass);
- Reactstrap (React Components for Bootstrap 4);
- Font Awesome 5 (Icon Library);

- (WIP) React Loadable (Bundle splitting);
- (WIP) Axios (fetch library);

### BACK:

##### Some libraries used in project

- Express (Web HTTP Framework);
- (WIP)
