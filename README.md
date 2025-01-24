### ReactJs Notes
### Features.
    1. In contrast to Anuglar framework, React is a library for building complex applications using composable (composistion) UI components.
    2. Virtual DOM - Representation of real dom using JSON objects.
    3. Has better speed compared to Angualr.

## Components 
    are Custom elements with behavour simillary to native HTML elements.
 1. Supports properties.
 2. Nested components
 3. Using component and collection.


## Important concepts
1. Routing - BrowserRouter, HashRouter, MemoryRouter, NativeRouter, StaticRouter
    There are two ways to create router.
    1. Through library functions and providing Router.  <RouterProvider router={router} />
    2. Through RouterComponents.

2. HTTP - Fetch, axios 

3. Data binding
    Properties management

4. Event handling/management
    a. Parent to child (by using properties) 
        <Parent> <Child prop={ parent value}> <Child> <Parent>
    b. Child to parent (by using callback props)
         function abc(input) {   }
        <Parent> <Child onEvent={ abc}  onClick={()=> this.props.onEvent('input data')}> <Child> <Parent>
    c. Context API.
        Manage shared state using Context. 
          React.createContext() and provide in parent component. In child components using useContext() Hook to implemnt listenrs. 

    d. Custom Events (mainly useful when components don't have parent-child relationship)
       Create custom events using DOM APIs e.g addEVentListener(), dispatchEvent.
    e. Using state management libraries.

5. State managemnt 

6. 

# React
1) npx comes with node 5.2 or higher    
Creating app $> npx create-react-app reactapp   (or) npm init react-app my-app

**** React Using webpack & Babel
Install React $> npm install react react-dom --save
Install Webpack $> npm install webpack webpack-dev-server webpack-cli --save
Install Babel  $> npm install babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin --save-dev
Create below files:
type nul > index.html
type nul > App.js
type nul > main.js
type nul > webpack.config.js
type nul > .babelrc



## Commands to run 
 1. `npm start`  -> [http://localhost:3000](http://localhost:3000)
 2. `npm test`
 3. `npm run build` --
 4. `npm run eject`
 5. `npm run build` fails to minify

## Reference URL's
 1. (More info) [https://create-react-app.dev/docs/getting-started]



## Express API
    npm start ==> http://localhost:3000