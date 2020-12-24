import React from "react";
import { withRouter } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Logo from "./assets/images/logo-double-heart.png";

class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <header>
                    <h1><img className="header-logo" src={Logo} alt="joy and serenity candle"></img> Joy and Serenity Candle <img className="header-logo" src={Logo} alt="joy and serenity candle"></img></h1>                        
                </header>

                    <NavBar />

                <main>
                    <section id="section-1">
                        <h1>Section 1</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
                    </section>
                    <section id="section-2">
                        <h1>Section 2</h1>
                        <p>Ratione nulla nam, ipsa dignissimos corrupti veniam nostrum, laudantium asperiores sequi numquam placeat velit voluptate in praesentium non labore unde incidunt laborum maxime quae magni.</p>
                    </section>
                    <section id="section-3">
                        <h1>Section 3</h1>
                        <p>Soluta quibusdam ad nostrum vel voluptate delectus sequi dolores quia quaerat officia corrupti, aperiam fugit facere debitis repudiandae praesentium sapiente inventore repellendus, nemo commodi alias!</p>
                    </section>
                    <section id="section-4">
                        <h1>Section 4</h1>
                        <p>Aliquid aliquam magnam ducimus similique obcaecati, unde exercitationem laborum incidunt, quas in ipsum inventore nostrum? Blanditiis optio cumque earum iste odio! Alias sint accusamus repudiandae.</p>
                    </section>
                    <section id="section-5">
                        <h1>Section 5</h1>
                        <p>Officia ipsum fugit iure eaque quisquam error tempore earum enim illum, delectus officiis incidunt corrupti aliquid nam quas perspiciatis eveniet doloremque quod labore? Doloremque, ipsum?</p>
                    </section>
                    <section id="section-6">
                        <h1>Section 6</h1>
                        <p>Aperiam repellat dignissimos fugiat possimus esse, suscipit neque nisi libero alias obcaecati ipsam, porro illo corrupti nostrum reprehenderit unde, illum in laudantium impedit. Modi, veniam.</p>
                    </section>
                    <section id="section-7">
                        <h1>Section 7</h1>
                        <p>Cum asperiores temporibus itaque consequatur quod inventore, quia quis explicabo dicta esse minus voluptatem reiciendis eveniet animi, necessitatibus illum dolorem doloremque repellat placeat, dolores eaque.</p>
                    </section>
                    <section id="section-8">
                        <h1>Section 8</h1>
                        <p>Optio qui, omnis itaque rerum iusto molestiae necessitatibus deleniti quod tenetur id perspiciatis voluptatum dolorum quisquam eius ipsum non architecto labore! Distinctio, tenetur. Officiis, necessitatibus?</p>
                    </section>
                    <section id="section-9">
                        <h1>Section 9</h1>
                        <p>Rem iste iure blanditiis excepturi esse nisi corrupti sequi, illo, laborum quo quis quaerat assumenda perspiciatis quod fuga vel laudantium doloribus architecto tempora omnis earum!</p>
                    </section>
                </main>
                <footer> Skybridge, LLC </footer>
            </div>
        );
    }
}

export default withRouter(App);
