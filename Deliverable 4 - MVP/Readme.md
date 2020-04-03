## Setting up

Make sure that Node is installed on your computer, Node is available at [Node](https://nodejs.org/en/). [This](https://www.guru99.com/download-install-node-js.html) tutorial, How to install Node.js on Windows, provides step by step instructions to install Node.js. Then run `node -v` in the command line to verify that Node is installed correctly.

Next make sure that TypeScript is installed as a global dependency via: `npm install -g typescript`. This installs TypeScript globally which we use to build our project. 

Finally, go to the address path of the project, Deliverable 4. Then run `npm install` to update node_modules. This ensures that you have all the dependencies for the project to run.

### Building the project
To build the project, run: `npm run build` or simply `tsc` if typescript was installed globally.

### Starting the project
To start the API, run: `npm start`  

Expo should automatically run and open up your browser at http://localhost:19002/

This provides you with a dashboard for running the project. 

Download the Expo App to your phone, for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) or for [IOS](https://apps.apple.com/app/apple-store/id982107779) and scan the QR code that appears in your browser or command line. This may take a while as it builds and downloads for the first time.
