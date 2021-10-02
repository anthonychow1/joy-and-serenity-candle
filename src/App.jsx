import React from "react";
import { Route, withRouter } from "react-router-dom";
import About from "./About";
import './App.css';
import NavBar from "./components/navbars/NavBar";
import Header from "./components/sections/Header";
import ProductList from "./components/sections/ProductList"
import Section from "./components/sections/Section"

class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <Header />
                <hr />
                <div className="public-nav">
                    <nav>
                        <NavBar />
                    </nav>
                </div>
                <hr />
                <main>
                    <Route path="/" exact={true}>
                        <Section cssName="succulent" content={`Soleil`}/>
                        <hr />
                        <Section cssName="wood" content={`Soleil`}/>
                    </Route>
                    <Route path="/about" exact={true} component={About} />
                    <Route path="/products" exact={true} component={ProductList} />
                </main>
                <footer> Soleil &copy; 2021 </footer>
            </div>
        );
    }
}

export default withRouter(App);
