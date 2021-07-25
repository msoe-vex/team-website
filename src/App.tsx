import * as React from "react";
import {hot} from "react-hot-loader";
import "./App.scss";
import Landing from './components/Landing';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Landing/>
            </div>
        );
    }
}

export default hot(module)(App);