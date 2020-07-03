# UnsplashExample

System Requirements

1. Xcode and Cocoapods for iOS
2. React Native CLI
3. Node

Setting up the react native frontend (for iOS):

1. npx react-native init UnsplashExample
2. Download App.js, Components, package.json
3. Replace App.js and package.json from project creation with App.js and package.json downloaded from Github
4. Add Components folder to project root directory
5. npm install dependencies in project root directory
6. cd ios, pod install, cd ..
7. npm start to start metro server at the root directory of react native project
8. npx react-native run-ios to run the ios app
9. The app should then load and run


Note:

On Screen 2, I just decided to go with the number of photos shown that is the default returned by the Unsplash api - which is 10. If I had a bit more, time, I can make it so it would be however many photos the user has, and add the swiping photo feature for Screen 3.
