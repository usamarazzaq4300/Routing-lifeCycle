import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "../components/header"
import Company from "../pages/company"
import Home from "../components/home"
import About from "../pages/about"
import Footer from "../components/footer"
import NavBar from "../components/navbar"
import Contact from "../pages/contact"
function Routing() {
    return (
        <div>
            <Router>
                <Header />
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>

                <Switch>
                    <Route path="/company">
                        <Company />
                    </Route>
                </Switch>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>

                <Footer />
            </Router>
        </div>
    )
}
export default Routing;