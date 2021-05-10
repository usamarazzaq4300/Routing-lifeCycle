import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "../components/header"
import Company from "../components/company"
import Home from "../components/home"
import About from "../components/about"
import Footer from "../components/footer"
function Routing() {
    return (
        <div>
            <Router>
                <Header />

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

                <Footer />
            </Router>
        </div>
    )
}
export default Routing;