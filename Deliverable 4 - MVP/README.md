## Setting up

Make sure that Node is installed on your computer, Node is available at [Node](https://nodejs.org/en/). 

[This](https://www.guru99.com/download-install-node-js.html) tutorial, How to install Node.js on Windows, provides step by step instructions to install Node.js. 

Then run `node -v` in the command line to verify that Node is installed correctly.

Now, run `npm --version` in the command line to verify that npm installed correctly as well.


Next make sure that TypeScript is installed as a global dependency via: `npm install -g typescript`. This installs TypeScript globally which we use to build our project. 

Finally, go to the address path of the project, Deliverable 4. Then run `npm install` to update node_modules. This ensures that you have all the dependencies for the project to run.

## Starting the project
To start the API, run: `npm start`  

Expo should automatically run and open up your browser at http://localhost:19002/

This provides you with a dashboard for running the project. 

To run the App on an Android device on your computer, download [Android Studio](https://developer.android.com/studio/) and with Android Studio installed and open go > Tools > AVD Manager and create a new virtual Device and launch it. In the dashboard web page that was opened earlier, select _Tunnel_ as the connection mode on the side bar and select _Run on Android Device/Emulator_ 

Download the Expo App to your phone, for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) or for [iOS](https://apps.apple.com/app/apple-store/id982107779), select _Tunnel_ as the connection mode on the side bar and scan the QR code that appears in your browser or command line. For Android the QR code is scanned with the Expo App, on iOS the camera app is used to scan the QR code. The app may take a while to launch as it builds and downloads for the first time.

## Additional Resources:
The [How to Install and Run Fire Safety App](https://github.com/AveryCameronUofR/ENSE471-FireSafety/blob/master/Deliverable%204%20-%20MVP/How%20to%20Install%20and%20Run%20Fire%20Safety%20App.pdf) document goes more indepth with step by step instructions and images for the installation and running process. 

The [ENSE 471 Fire Safety How to Install](https://www.youtube.com/watch?v=nxa4MZMsmJU) youtube video is available for installation instructions as well. 
