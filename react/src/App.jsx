import React from "react";
import { withRouter } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import SocialBar from "./components/SocialBar";

class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <div className="social-nav">
                        <SocialBar />
                </div>
                
                <header>
                    <div className="header-logo">
                        <h1>Joy&nbsp;and Serenity Candle</h1>
                    </div>                       
                </header>
                <div className="public-nav">
                    <nav>
                        <NavBar />
                    </nav>
                </div>
                <main>

                </main>
                <footer> Joy and Serenity Candle &copy; 2020 </footer>
            </div>
        );
    }
}

export default withRouter(App);
