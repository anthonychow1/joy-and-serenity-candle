import React from "react";
import { Route, withRouter } from "react-router-dom";
import About from "./About";
import './App.css';
import NavBar from "./components/navbars/NavBar";
// import ProductList from "./components/sections/ProductList"
import Section from "./components/sections/Section"

class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <header>
                    <h1>Joy&nbsp;and&nbsp;Serenity&nbsp;Candle</h1>
                </header>
                <hr />
                <div className="public-nav">
                    <nav>
                        <NavBar />
                    </nav>
                </div>
                <hr />
                <main>
                    <Route path="/" exact={true}>
                        <Section cssName="succulent" content={`Hello`}/>
                        <hr />
                        <Section cssName="wood" content={`Hello`}/>
                    </Route>
                    <Route path="/about" exact={true} component={About} />
                </main>
                <footer> Joy and Serenity Candle &copy; 2020 </footer>
            </div>
        );
    }
}

export default withRouter(App);
