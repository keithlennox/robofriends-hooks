import React from 'react'; //Creates a virtual DOM.
import ReactDOM from 'react-dom'; //Creates the actual DOM required by desktop browser. There are other packages for mobile, VR, etc.
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons'; //Very similar to bootstrap.

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

/*Tachyons is similar to bootstrap. It has predefined class names that you can add to your tags.
In the terminal, enter npm install tachyons. Go to tachyons.io/docs to get the different classes that you can use.
Add these classes to your JSX elements, but make sure to use className instead of class.
Please note, we import tachyons here in the index.js file, but use it in other components
even though we don't explicity import it in those components. This is a tachyons specific behaviour and NOT a
general React rule. And it only works when imported to the index.js file specifically.*/