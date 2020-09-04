# Q...

This project is updated from my tohacks project (tohacks-1 repo), which won Best Use of Blockstack.
Q... is an online queue tracker designed specifically to tackle the issue of long line-ups in stores during
the COVID-19 pandemic. 

During this time, many stores have reasonably cut down on their capacity. However, people still need a means
of attaining groceries and necessary household products. Thus, long line-ups in front become very common. Not
only can this be frustrating for people who have to wait in line, but is more importantly a safety hazard to be
in large crowds at this time.

For this sample application, we use Costco as an example of a busy store that may benefit in having an online queue
system like Q... Users can sign up and log in to the web application, where they can search for stores and enter in
the custom online queue that stores can use. This way, customers can wait in line virtually, get a gist of how long their
line up will take, and when its their turn, arrive at the store just in time to go in and pick up whatever they need.

I hope that in looking at Q..., we can strive to create an omnichannel bridge that brings a seamless experience
between online e-commerce platforms and in-person shopping.

## To set up the application locally:

### Clone this repository:

git clone https://github.com/wzhang2705/queue-tracker.git

### install dependencies:
  ```bash
  npm install
  ```

* Note that this may return an error in installing blockstack. If this is the case, try:
  
  ```bash 
  npm install blockstack
  npm install
  ```

This application uses Blockstack to create a decentralized login process.
### To log in, you need a blockstack id.
You can either create your own, or use a sample one I created earlier.

Username: wenzhang
Password: blockstack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
